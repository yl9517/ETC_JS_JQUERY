let a=Number('12');         
let b=Number('12.2');
let c=Number('abc');

console.log(a,isNaN(a));    //12 f
console.log(b,isNaN(b));    //12.2 f
console.log(c,isNaN(c));    //NaN t


console.log('----------------');


let a2= new Number('12');

console.log(a+10);     //둘다 결과 같음
console.log(a2+10);    //둘다 결과 같음


console.log('----------------');
console.log(typeof a);  //number
console.log(typeof a2); //object
console.log(a===12);  //t (number)
console.log(a2===12); //f (object)


// Number() = 함수
// new Number() = 객체화