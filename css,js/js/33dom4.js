
//let vli = document.getElementsByTagName('li');   ▶  무작정 li로 하면 문제가 될 수 있음
let vli = document.getElementById('result2').children  // result2의 자식들로 지정

// DOM EVENT
for(let i=0; i<vli.length; i++){
    vli[i].ondblclick=function(){
        document.getElementById('result2').removeChild(this);  //삭제
    }
}