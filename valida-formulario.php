<?php


	$nome = $_POST['name'];
	$telefone = $_POST['phone'];
	$email = $_POST['email'];
	$texto = $_POST['message'];
	$assunto = 'Mensagem nova do site!';
	$destino = "suporteiros@gmail.com";

	$mensagem = '<h2 style="text-align: center;"><span style="font-family:verdana,geneva,sans-serif">Tem mensagem nova pra voc&ecirc;!</span></h2>';
	$mensagem .= '<p><span style="font-family:georgia,serif">Rog&eacute;rio, <strong>'.$nome.'</strong> deseja falar contigo:</span></p>';
	$mensagem .= '<p><span style="font-family:tahoma,geneva,sans-serif">'.$texto.'</span></p><hr />';
	$mensagem .= '<address>Esse email foi enviado atrav&eacute;s do seu site.</address>';
	$mensagem .= '<div>Nome: '.$nome.'</div><div>Email: '.$email.'</div><div>Telefone: '.$telefone.'</div><address>&nbsp;</address>';

	//codificações corretas e  tudo mais.
	$headers =  "Content-Type:text/html; charset=UTF-8\n";
	$headers .= "From:  suporteiros.com.br<".$email.">\n";
	//Vai ser //mostrado que  o email partiu deste email e seguido do nome
	$headers .= "X-Sender:  <sistema@suporteiros.com>\n";
	//email do servidor //que enviou
	$headers .= "X-Mailer: PHP  v".phpversion()."\n";
	$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
	$headers .= "Return-Path:  <".$email.">\n";
	$headers .= "MIME-Version: 1.0\n";
	
	//mail($destino, $assunto, $mensagem, $headers);

	if(mail($destino, $assunto, $mensagem, $headers)) {
		$res = "<div class='alert alert-success'>".$nome.", sua mensagem foi enviada corretamente. Muito obrigado!</div>";
		echo (json_encode($res));
		} else {
		echo 'ERROR!';
		}
?>