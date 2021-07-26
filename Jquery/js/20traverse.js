$(document).ready(function(){
    // <slice 요소에도 적용됨>
//     $('ol li').slice(2,4).css('backgroundColor','yellow')
//         .end().slice(1).css('color','red');


    // add() :
    $('li').css({
        width: '400px'
        , height : '50px'
        , border : '1px solid silver'
    }).add('div')
      .css('backgroundColor','yellow');


});