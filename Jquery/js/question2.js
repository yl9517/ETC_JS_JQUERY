// $('li').on('click',function(){
//     $('li').each(function(index,item){
//         $(item).removeClass('bg');
//     });
    
//     $(this).addClass('bg');
//     $('#result').text($(this).text()+"입니다");   
// })

$('li').on('click',function(){
    $('li').each(function(index,item){
        $(item).removeClass('bg');
    });

    
    $(this).addClass('bg');
    $('#result').empty().append($(this).text()+"입니다");
})