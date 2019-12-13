$('form').keydown(function(){
    var username1 = $('#reg-username').val();
    var username2 = username1.length;
    if (username2 < 4) {
        $('#reg-username').addClass('wrong');
    } else {
        $('#reg-username').removeClass('wrong');
    }
})

$('form').keydown(function(){
   var pasword1 = $('#reg-password1').val();
   var pasword2 = pasword1.length;
   if (pasword2 < 6) {
      $('#reg-password1').addClass('wrong');
  } else {
    $('#reg-password1').removeClass('wrong');
  }
})