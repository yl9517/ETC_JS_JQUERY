
// var은 글로벌 정보로 인식, 어디서든 쓸 수 있음      → 약간 문제가 됨..
for(var i=0; i<5; i++){
    console.log(i);
}
console.log('test :'+i); //에러 안남 


// let 지역변수
for(let j=0; j<5; j++){
    console.log(j);
}
console.log('test :'+j);  //에러!!


//var 문제점2
kor=90;
console.log(kor);
 
var kor;  //hoisting = 선언된 변수들을 맨위로 올려서 마치 선언된 것을 호출하는 것처럼 보임
