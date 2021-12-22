
$('#formulario').submit(function(e){
  e.preventDefault();

  $.ajax({
    url: 'valida-formulario.php',
    type: 'post',
    dataType: 'json',
    data: {
      'name': $('#name').val(),
      'email': $('#email').val(),
      'phone': $('#phone').val(),
      'message': $('#message').val()
    }
  })
  .done(function (res) {
        $("#formulario").html(res); 
    });
});