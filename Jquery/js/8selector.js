let fcolor=['red','green','pink','yellow','gray'];

$('div').css('backgroundColor', function(index){
    return fcolor[index];   //index 0~4
})

let a =$('div');
console.log(a);  //이 객체의 index값 ↑