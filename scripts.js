

$('#btnContactUs').click(function(){

    if ($('#subject').val() == "default") {
        alert("Por favor, selecione o assunto da mensagem.");
        $('#subject').focus;
    }
    else {
        if($('#btnContactUs').val() == 'Enviando...'){
			return(false);
		}
		
		$('#btnContactUs').val('Enviando...');
		
		$.ajax({
			url: 'valida-formulario.php',
			type: 'post',
			dataType: 'html',
			data: {
				'nome': $('#name').val(),
				'email': $('#email').val(),
				'assunto': $('#subject').val(),
				'Mensagem': $('#message').val(),
			}
		}).done(function(data){

            //alert(data);
			$('#btnContactUs').val('Enviar mensagem');
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('message').val('');
			
		});
    }

    
});
