$(document).ready(function(){

    //each() : 반복
    $('div').each(function(index, item){ 
        $(item).text($(item).text()+index) //숫자 추가하여 text 설정
            .css('border','2px solid silver');

        let txt = $(item).text();

        console.log(txt); //div태그입니다+숫자

        if(txt.charAt(txt.length-1)=='1'){  //txt의 마지막글자가 1과 같다면
            $(item).css('color','red');
        }
    });


    
    let person=[
        {name:'hong',age:20}
        ,{name:'park',age:15}
        ,{name:'park',age:11}
    ];       //배열

    let result="";
    $.each(person,function(index,item){
        result += index+":"+item.name+", "+item.age+"<br>";
    });

    $('#result').html(result);

});