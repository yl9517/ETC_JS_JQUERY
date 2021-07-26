window.onload = function(){

    //생성자 이용
    let Person = function(id,pw,irum,addr,gender,fav,etc){
        this.id=id;
        this.pw=pw;
        this.irum=irum;
        this.addr=addr;
        this.gender=gender;
        this.fav=fav;
        this.etc=etc;
    }

    document.getElementById('send').onclick=function(){
      
        let id = document.getElementById('id');
        let pw = document.getElementById('pw');
        let irum = document.getElementById('irum');
        let addr = document.getElementById('addr');

        let g = document.getElementsByName('gender');
        let gender = '';
        for(let data of g){
            if(data.checked){
                gender = data.value;
            }
        }

        let f = document.getElementsByName('fav');
        let arr = [];
        for(let data of f){
            if(data.checked)
                arr.push(data.value);
        }

        let etc = document.getElementById('etc');

        let p1 = new Person(id.value,pw.value,irum.value,addr.value,gender,arr,etc.value);


        for(let data in p1){ //객체
             document.getElementById('result').innerHTML += '<li>'+ p1[data]+"</li>";  
                                                                 // p1[속성]
        }


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