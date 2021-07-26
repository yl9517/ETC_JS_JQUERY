console.log('hello')   
console.log('javascript')  
//줄단위 주석
/* 블록단위 주석*/

//화면에 출력
document.write("hong's home <br>");
document.write('홍길동이 말했다 "하이" ');

//변수지정 let, const (예전엔 var)
let irum='김하나';
let age=20;

console.log('이름 :',irum);
console.log('나이 :',age);

console.log('이름 :'+irum+' age :'+age) //좋지는 X
console.log(`name : ${irum}, age: ${age}`)  // '' 말고 물결(~)에 있는 ` `

//각 명령문 or 변수 는 대소문자 구분
let addr = 'seoul';
console.log(`addr: ${addr}`);
