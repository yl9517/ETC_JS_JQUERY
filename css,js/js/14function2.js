/*
    [함수표현식] 
    : 접근할때마다 함수 파싱이 일어남 / 익명함수 / hoisting 안일어남
*/

// a(); 오류!

const a = function(){
    console.log('function all');
}

a();
console.log("------");
a();


//---------------------------------------

//매개변수 있을경우

const s = function(name,age){
    console.log('name',name);
    console.log('age',age);
}
s('hong',20);
s('park',50);


const s2 = function(kor,eng){
    return kor+eng;
}
let sum = s2(100,90);
console.log('sum',sum)