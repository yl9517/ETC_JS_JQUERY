let s;
console.log(s);  //undifined = 값 지정X
let w = null;
console.log(w);

console.log(null==undefined);  //T (값 같음)
console.log(null===undefined); //F
console.log(false=='');   //T
console.log(false==0);    //T
console.log(false==='');  //F
console.log(false===0);   //F 


let max;
let a=10, b=20;

max=(a>b)? a:b;
console.log(max);