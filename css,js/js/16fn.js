//window.onload=function(){ //html 본문이 모두 실행 된 후.. (속도 ↓)


document.getElementById('btn').onclick=function(){
        
    document.getElementById('result').innerHTML=addcount();
}

// const addcount=function(){
//     let count = 0;  //계속 초기화 됨
//     return count++;
// }


//fn2,fn3

//------------------------
//클로저 함수
/* 위 문장에서 let count를 밖으로 빼내도 구현이 가능한데
   클로저로 사용한 이유는 다른곳에서 못건드리도록! (캡슐화를 위해)*/

const addcount=(function(){
    let count =0;
    return function(){
        return ++count;
    }
})();

