let s;
document.getElementById('timer').onclick=function(){
    s = setInterval(function(){
       let now = new Date();
       let y =now.getFullYear();
       let m = now.getMonth()+1;
       let d= now.getDate();
       
       let h=now.getHours();
       let mi=now.getMinutes();
       let s= now.getSeconds();
        document.getElementById('result').innerHTML=y+"."+m+"."+d+" "+h+":"+mi+":"+s;
    }, 1000)  //1초마다 반복해서 setInerval 실행
}
document.getElementById('clear').onclick=function(){  //중지
    clearInterval(s);
}