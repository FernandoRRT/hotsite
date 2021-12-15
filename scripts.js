

// $('#btnContactUs').click(function(e){
//     e.preventDefault();

//     if ($('#subject').val() == "default") {
//         alert("Por favor, selecione o assunto da mensagem.");
//         $('#subject').focus;
//     }
//     else {
//         $.ajax({
//             method: "POST",
//             url: "valida-formulario.php",
//             data: {
//                     'nome': $('#name').val(),
//                     'email': $('#email').val(),
//                     'assunto': $('#subject').val(),
//                     'mensagem': $('#message').val(),
//                 },
//                 beforeSend : function(){
//                      $("#resultado").html("ENVIANDO...");
//                 }
//            })
//            .done(function(msg){
//                 $("#resultado").html(msg);
//            })
//            .fail(function(jqXHR, textStatus, msg){
//                 alert(msg);
//            });



//         // if($('#btnContactUs').val() == 'Enviando...'){
// 		// 	return(false);
// 		// }
		
// 		// $('#btnContactUs').val('Enviando...');
		
// 		// $.ajax({
// 		// 	url: 'valida-formulario.php',
// 		// 	type: 'post',
// 		// 	dataType: 'html',
// 		// 	data: {
// 		// 		'nome': $('#name').val(),
// 		// 		'email': $('#email').val(),
// 		// 		'assunto': $('#subject').val(),
// 		// 		'Mensagem': $('#message').val(),
// 		// 	}
// 		// }).done(function(data){

//         //     //alert(data);
// 		// 	$('#btnContactUs').val('Enviar mensagem');
// 		// 	$('#name').val('');
// 		// 	$('#email').val('');
// 		// 	$('#subject').val('');
// 		// 	$('message').val('');
			
// 		// });
//     }

    
// });


$(function(){
    $("#formulario").on("submit", function(e){
              
        // Cancelamos el evento si se requiere 
        e.preventDefault();
 
        // Obtenemos los datos del formulario 
        
        //let formData = new FormData(document.getElementById("formulario"));
        //formData.append("dados", "valores");
               
       //ssss console.log(formData);
       console.log($('#name').val());
       console.log($('#email').val());
       console.log($('#phone').val());
       console.log($('#message').val());


        // Enviamos los datos al archivo PHP que procesará el envio de los datos a un determinado correo 
        $.ajax({
            url: "valida-formulario.php",
            type: "POST",
            dataType: "json",
            //data: formData,
            data: {
              name: $('#name').val(),
              email: $('#email').val(),
              phone: $('#phone').val(),
              message: $('#message').val(),
              },
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function() {
              $('#formulario').html("Enviando mensagem...");
            },
        })
 
        // Cuando el formulario es enviado, mostramos un mensaje en la vista HTML 
        // En el archivo enviarcorreo.php devuelvo el valor '1' el cual es procesado con jQuery Ajax 
        // y significa que el mensaje se envio satisfactoriamente. 
        .done(function (res) {                  
 
          if(res.a == "1"){
                    
            // Mostramos el mensaje 'Tu Mensaje ha sido enviado Correctamente !' 
            $("#formulario").html(res.b);                   
            $("#formulario").trigger("reset");    
 
          }  else {                                       
            $("#formulario").html(res.b); 
          }
                                                      
        })
 
        // Mensaje de error al enviar el formulario 
        .fail(function (res) {                    
            $("#formulario").html(res.b);
        });
 
    });
});