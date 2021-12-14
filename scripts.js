document.getElementById("btnContactUs").addEventListener("click", envia);

function envia () {

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (nome) {
        if (email) {
            var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                if (reg.test(email)){
                    if (subject != "default") {
                        if (message) {
                            alert("Certinho");

                            //https://github.com/ajudadoprogramador/php-formulario-html-com-ajax
                        } else {
                            alert("Por favor, explique melhor em quê posso te ajudar.");
                            message.focus;
                        }
                    } 
                    else {
                        alert("Por favor, selecione o assunto da mensagem.");
                        subject.focus;
                    }
                }
                else{
                alert("Preencha o email corretamente no formato EMAIL@PROVEDOR.xxx");
                email.focus;
                }
            }
        else {
            alert("Por favor, preencha o campo do email.");
            email.focus;    
        }
    }
    else {
        alert("Por favor, preencha o campo do nome.");
        nome.focus;

    }
    
}