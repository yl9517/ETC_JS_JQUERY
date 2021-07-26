$(document).ready(function(){

    //removeClass() / addClass() ▶ bg클래스 생성 및 삭제
    // $('div').click(function(){

    //     if($(this).hasClass('bg')){ //bg클래스 가지고 있으면
    //         $(this).removeClass();
    //     }else{
    //         $(this).addClass('bg');
    //     }
    // });


    //.toggleClass ▶ a,b클래스 왔다갔다
    $('div').click(function(){
        $(this).toggleClass('bg');
    });



    //attr추가
    $('#btn').dblclick(function(){
        $('img').attr({                     // .attr('src','../img/star.png');
            src:'../img/tree.jpg'
            ,alt:'img1'
        }).css({
            display:'inline-block'
            ,width:'400px'
            ,height:'500px'
        });
    });

    //attr삭제
    $('#btn2').click(function(){
        $('img').removeAttr('src');
    });



});
