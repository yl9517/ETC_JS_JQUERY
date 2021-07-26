// $('#btn').click(function(){ 
//     let names = [];
//     let result = '';

//     $('li').each(function(index, item){
//         names = $(item).text().split(' ')[1];  //이름배열
//         result += "<li>"+names+"</li>"
//     });
//     $('#result').html(result);
// });


// $('#btn').click(function(){ 

//     let arr = $('li').map(function(){  //map : 변경 후 저장
//         let loc = $(this).text().indexOf(' ');
//         return $(this).text().slice(loc);

//     });

//     $('ol').empty();

//     arr.each(function(index, item){
//         $('ol').append("<li>"+item+"</li>");
//     });

// });


$('#btn').click(function(){ 

    $('li').each(function(index, item){
        $('li').text(function(index,text){
            return text.split(' ')[1];
        });
    });

});