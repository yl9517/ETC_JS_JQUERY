//방법1
// //$(document).ready(function(){   -->  JS의 onload와 같음.-->병목현상
    
//     $('div').css('backgroundColor','yellow')
//             .css('border','2px solid silver');
// //});  

//방법2
//ready 안쓰려면 script 링크를 맨 아래 걸어주기!!


//방법3
$(function(){
    $('div').css('width','500px')
            .css('backgroundColor','yellow');
})