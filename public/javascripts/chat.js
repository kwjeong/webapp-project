var page = 1;

$(document).ready(function() {
  var time = new Date();
	
  update_chat_list(user_id, time);

  $('#chat_div').scroll(function() {
	if ($(this).scrollTop() === 0) {
      update_chat_list(user_id, time);
      $(this).scrollTop(40);
	}
  });

  $('#send_chat').click(function() {
    if ($('#chat_input').val() === '') return;
    send_msg();
    $('#chat_input').val('');
  });
	
  $('#chat_input').keyup(function (key) {
    if(key.keyCode == 13) $('#send_chat').click();
  });
	
  $(document).on('click', 'button[name="chat_user"]', function (event) {
    $('#chat_select').val(event.target.value).prop("selected", true);
  });
});


// 사용자 목록을 받아 화면에 보여주는 함수
function update_user_list(data) {
  var user_list = data.user_list;

  /* 구현 */

}

// 채팅 메시지를 가져와서 보여주는 함수
function update_chat_list(id, time) {
  var url = '/chat/' + id + '/' + page + '/' + time;
  $.ajax({
    url: url,
    method: 'get',
    dataType: 'json',
    success: function(chat_list) {
      page++;
      /* 요청 성공 후 처리 구현 */

    }
  });
}

// 수신한 메시지를 화면에 보여주는 함수
function receive_msg(data) {
  /* 구현 */
}

// 소켓으로 메시지를 보내는 함수
function send_msg() {
  /* 각 변수에 적절한 값을 전달하고, 기타 로직 구현 */

  var message = '';
  var receive_socket_id = '';
  var receive_user_name = '';

  socket.emit('send_msg', { message: message, receive_socket_id: receive_socket_id, receive_user_name: receive_user_name });
}