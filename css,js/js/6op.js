let a=10;
let b=20;

//산술연산
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**3); //제곱승

//문자열 연결
console.log(10+'eee');
console.log('eee'+'rrr');
console.log('bbb'+20);

//같다 같지않다
console.log(10=='10');  //값이 같니? T
console.log(10==='10'); //타입과 값이 같니? F (타입은 다름)
console.log(10!='10');  //값이 같지 않니? F
console.log(10!=='10'); //타입과 값이 같지 않니?  T

//논리 연산
let kor=90;
let eng=80;

console.log(kor>=90 && eng>=90);  //f
console.log(kor>=90 || eng>=90);  //t
console.log(!(kor==90)); //f