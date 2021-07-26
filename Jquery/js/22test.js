
    
$('#btn').click(function(){
    let n = document.getElementById('name');
    let name = n.value;
    
    $('<li>'+name+'</li>').addClass('bg').appendTo('ol');
    n.value='';

});