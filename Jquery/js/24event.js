// ---------on----------
// $('div').on('click',function(){
//     $(this).after("<div>추가 element</div>");
// });

//내가 만든 요소(div)에도 이벤트 주기
// $('body').on('click','div',function(){  //div보다 부모의 요소에 on주기
//     $(this).after("<div>추가 element</div>");
// });


//--------one----------
// $('div').one('click',function(){
//     alert('click');
// });

//-----trigger-----
$('div').on('click',function(){
    alert('click');    
});

$('div').trigger('click');