$('document').ready(function(){

    $('#sel').change(function(){  //change() : 이벤트가 바뀌었을때

        let select = $('#sel').val();
        //let select = $('#sel option:selected').val();
        $('div').css('backgroundColor',select);
    });

});