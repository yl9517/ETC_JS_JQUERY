window.onload= function(){

    document.getElementById('btn').onclick=function(){

        let jumin = new String();
        let j = document.getElementById('jumin');
        jumin = j.value;
        j.value='';

        //성별
        let g = jumin.charAt(7);
        let gender='';
        if(g == 1 || g==3){
            gender="남자";
        }
        else{
            gender="여자";
        }

        //나이
        let now = new Date();
        let a = jumin.substring(0,2);  
        if(g == 1 || g==2)
            a = '19'+a;
        else
            a = '20'+a;       
     
        let age = now.getFullYear()-parseInt(a);
        

        let result = "주민번호 : "+jumin +"<br>성별 : "+gender+"<br>나이 : "+parseInt(age);

        document.getElementById('result').innerHTML=result;
    }

}