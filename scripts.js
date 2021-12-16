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
        e.preventDefault();
       //let formData = new FormData(document.getElementById("formulario"));
       console.log($('#name').val());
       console.log($('#email').val());
       console.log($('#phone').val());
       console.log($('#message').val());

        $.ajax({
            url: "valida-formulario.php/",
            type: "post",
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
        .done(function (res) {                  
          if(res.a == "1"){
            $("#formulario").html(res.b); 
            $("#formulario").trigger("reset");    
		}  else {                                       
			$("#formulario").html(res.b); 

          }
        })
        .fail(function (res) {                    
            $("#formulario").html(res.b);
        });
    });
});