window.onload= function(){
    document.getElementById('send').onclick=function(){

       let score = parseInt(document.getElementById('score').value);
       document.getElementById('score').value = ''; //입력값 안남게 빈 공간으로 초기화

       let result = '';
       if(score >=60)
           result = '합격';
       else
           result = '불합격';

        document.getElementById('result').innerHTML = '점수 : '+ score+'  |  결과 : '+result;
    }
}