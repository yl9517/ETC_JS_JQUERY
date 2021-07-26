//alert('hello');  //화면 출력 전 알람동작

window.onload=function(){ //화면 출력 후 동작
    document.getElementById("send").onclick=function(){
        alert('hello');
    }
}


window.onload=function(){ //화면 출력 후 동작
    document.getElementById("send").onclick=function(){
        let name=document.getElementById('name').value;
        let kor=parseInt(document.getElementById('kor').value);
        let eng=parseInt(document.getElementById('eng').value);
        let math=parseInt(document.getElementById('math').value);
        let tot = kor+eng+math;
        let avg = tot/3.0;

        let result="<li> name:"+name+"<li>";
        result+="<li> kor:"+kor+"<li>";
        result+="<li> eng:"+eng+"<li>";
        result+="<li> math:"+math+"<li>";
        result+="<li> tot:"+tot+"<li>";
        result+="<li> avg:"+avg+"<li>";

        document.getElementById('result').innerHTML=result; //html에 값 보내기
        //단 innerHTML은 보안에 취약하므로 나중에 다른 명령어로 써줄거임

    }
}