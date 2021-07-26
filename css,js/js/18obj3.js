window.onload = function(){
    
    let arr = [];
    document.getElementById('send').onclick = function(){  //send

        let name = document.getElementById('name');
        let nameValue = name.value;
        arr.push(nameValue);
        name.value=''; //이름칸 초기화
    }    

    document.getElementById('prt').onclick = function(){  //prt
        let result = '';

        for(let data of arr){    // in은 객체
            result += "<li>"+data+"</li>";
        }
            document.getElementById('result').innerHTML = result;    
    }
}