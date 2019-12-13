$('#msg-send-btn').click(function(){
    var username = '<p class="chat-done-new-username">' + $('#username-input').val() + '</p>';
    var message = '<p class="chat-done-new-msg">' + $('#message-input').val() + '</p>';
    var postingDate = '<p class="chat-done-new-time">' + new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + '.' + '</p>';
    $('#chat-done').append('<div class="chat-done-new">' + username + postingDate + message + '</div>');
    $('#username-input').val('');
    $('#message-input').val('');
})










