<?php
	if(strcasecmp('formulario', $_POST['metodo']) == 0){

		$html = 'Nome: '.$_POST['nome'];
		$html .= "\n";
		$html .= 'Email: '.$_POST['email'];
		$html .= "\n\n Obrigado pela mensagem.";
		echo $html;


$para = "suporteiros@gmail.com";
$nome = $_POST['name'];
$assunto = $_POST['subject'];
$email = $_POST['email'];


 //4 – Agora definimos a  mensagem que vai ser enviado no e-mail
$mensagem = "<strong>Nome:  </strong>".$nome;
$mensagem .= "<br>  <strong>Mensagem: </strong>".$_POST['message'];
$mensagem .= '<h1 style="text-align: center;"><span style="font-family:verdana,geneva,sans-serif">Tem mensagem nova pra voc&ecirc;!</span></h1>';
$mensagem .= '<p><span style="font-family:georgia,serif">Rog&eacute;rio, <strong>'.$nome;
$mensagem .= '</strong>deseja falar contigo:</span></p>';
$mensagem .= '<p><span style="font-family:tahoma,geneva,sans-serif">'.$_POST['message'];
$mensagem .= '</span></p><hr /><address>Esse email foi enviado atrav&eacute;s do seu site.</address>';
$mensagem .= '<div>Nome: '.$nome;
$mensagem .= '</div><div>Email: '.$email;
$mensagem .= '</div><address>&nbsp;</address>';


//codificações corretas e  tudo mais.
$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From:  dominio.com.br<sistema@dominio.com.br>\n";
//Vai ser //mostrado que  o email partiu deste email e seguido do nome
$headers .= "X-Sender:  <sistema@dominio.com.br>\n";
//email do servidor //que enviou
$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "Return-Path:  <".$email.">\n";
//caso a msg //seja respondida vai para  este email.
$headers .= "MIME-Version: 1.0\n";

mail($para, $assunto, $mensagem, $headers);
	}
?>