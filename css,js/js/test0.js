window.onload = function(){

    document.getElementById('send').onclick=function(){
        let id = document.getElementById('id');
        let pw = document.getElementById('pw');
        let irum = document.getElementById('irum');
        let addr = document.getElementById('addr');

        let g = document.getElementsByName('gender');
        let gender = '';
        for(let i=0; i<g.length; i++){
            if(g[i].checked == true){
                gender =g[i].value;
            }
        }

        let arr = [];
        let f = document.getElementsByName('fav');
        for(let i=0; i<f.length; i++){
            if(f[i].checked == true)
                arr.push(f[i].value);
        }

        let etc = document.getElementById('etc');


        let result = "<li> <label> 아이디 : "+id.value+"</li>";
        result += "<li> <label> 비밀번호 : "+pw.value+"</li>";
        result += "<li> <label> 이름 : "+irum.value+"</li>";
        result += "<li> <label> 주소 : "+addr.value+"</li>";
        result += "<li> <label> 성별 : "+gender+"</li>";
        result += "<li> <label> 좋아하는 과목 : "+arr+"</li>";
        result += "<li> <label> 비고 : "+etc.value+"</li>";

        document.getElementById('result').innerHTML = result;
        

        //초기값
        id.value='';
        pw.value='';
        irum.value='';
        etc.value='';

        for(let i=0; i<f.length; i++){
                f[i].checked = false;
        }


    }

}