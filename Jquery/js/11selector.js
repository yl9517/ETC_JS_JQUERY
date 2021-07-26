$(document).ready(function(){

    $('#btn').click(function(){
        //alert('test');

        let result='';
        result+='텍스트 박스 : '+$('#txtid').val()+'\n';
        result+='라디오 선택 : '+$('input[name="gender"]:checked').val()+'\n';
        result+='select 선택 : '+$('#fav').val().join()+'\n';   
        // select 여러개 선택시 알아서 배열로 처리됨
        // join() : 배열을 문자열 처리
        result+='select 다른표현 : '+$('select[name="fav"]').val().join()+'\n'; 
        
       // console.log($('#fav').val()); 

        console.log(result);
        alert(result);

    });


});