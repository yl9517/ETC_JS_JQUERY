// $('li').eq(0).css('border','1px solid blue');  // eq : 순서
// $('li').eq(1).css('backgroundColor','pink');

$('li').odd().css('background-color','yellow')  //홀수 1 3 
    .end().even().css('background-color','green');  //짝수 0 2 4


let result = $('li').map(function(index,element){
    return $(this).text()+" : hello";
});

console.log(result);