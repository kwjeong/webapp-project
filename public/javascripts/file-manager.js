var editor;

$(document).ready(function () {
  set_file_list();

  $(document).on('keydown', editor, function(key) {
    /* 파일 저장 단축키 기능 구현 */
  });
	
  // 드래그&드롭으로 파일 업로드
  $("#dropzone").on({
    dragenter: function (e) {

    },
    dragleave: function (e) {

    },
    dragover: function (e) {

    },
    drop: function (e) {
      /* 파일 업로드 기능 구현 */
    }
  });
		
  $('#save').click(function () {
    // 파일 내용 저장
    if (!confirm('저장하시겠습니까?')) return;

    	/* 요청 보내기 전 처리 구현 */
      var file_name = $('#editor_filename').val();
      $.ajax({
        url: '/upload',
        method: 'put',
        data: JSON.stringify({
          file_name: file_name
          /* 그외 함께 보낼 데이터 */
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: function(res) {
          /* 요청 성공 후 처리 구현 */
      }
    });
  });

  // 실행 & 채점 기능
  // 서버에서 파일의 코드를 (컴파일 및) 실행하고 input.txt를 표준입력(stdin)으로 전달하여,
  // 실행 결과(표준출력, stdou)가 correct.txt와 일치하는지 판단
  $('#compile').click(function () {
    var file_name = $('#editor_filename').val();

    $.ajax({
      url: '/compiler/' + file_name,
      method: 'get',
      dataType: 'json',
      success: function(res) {
        /* 성공 시 처리 구현 */
      },
      error: function(err) {
        /* 에러 케이스 처리 구현*/
      }
    });
  });

  // 편집 종료
  $('#close').click(function () {
    if(confirm('편집을 종료하시겠습니까?')) {
      /* 편집 종료 구현 */
    }
  });
});

// 목록에서 클릭한 파일의 내용을 에디터에 보여줌
$(document).on('click', 'a[name="uploaded_file"]', function(event) {
  var file_name = event.target.innerHTML;
  var url = '/upload/uploded_file';

  $.ajax({
    url: url + '?file_name=' + file_name,
    method: 'get',
    dataType: 'json',
    processData: false,
    contentType: false,
    success: function(res) {
      /* 요청 성공 후 처리 구현 */
    }
  });
});

// 파일을 서버로 실제 업로드 하는 함수
function FileMultiUpload(files) {
  if(confirm("파일을 업로드 하시겠습니까?")) {
    var url = '/upload';

    /* 업로드 요청 전 처리 구현 */
    var data;

    $.ajax({
      url: url,
      method: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      contentType: false,
      success: function(res) {
        /* 파일 업로드 성공 후 처리 구현 */
      }
    });
  }
}

// 파일 목록을 보여주는 함수
function set_file_list() {
  var url = '/upload/uploded_files';

  /* 요청 전 처리 구현 */

  $.ajax({
    url: url,
    method: 'get',
    dataType: 'json',
    processData: false,
    contentType: false,
    success: function(res) {
      /* 요청 성공 후 처리 구현 */
    }
  });
}
