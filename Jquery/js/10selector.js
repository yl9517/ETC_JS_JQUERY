$(document).ready(function(){

    // 클래스 추가, 속성선택자
    $('a[href*=daum]').addClass('red');   //daum이 포함된 href속성
    $('a[href$=com]').addClass(['green','txtdeco']);  //com으로 끝나는 href속성

    $('input[type="text"]').css('backgroundColor','yellow')
                        .val('안녕하세요');+

                        
    $('div').text("hello");
    $('div').text("<h1>안녕하세요</h1>");  // → h1태그를 문자열로 인식.
    $('div').html("<h1>안녕하세요</h1>");  // → h1태그를 문자열로 인식.

});

/*

    text() : 태그 사이에 들어갈 문자열 출력(태그인식X)
    html() : 태그 인식하여 문자열 출력            // ▶ innerHTML이랑 같은역할..역시 보안에 취약하므로 쓰지X
    val() : 요소에서 value 속성  (input에 관한애들)

*/
