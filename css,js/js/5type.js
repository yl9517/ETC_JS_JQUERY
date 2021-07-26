let a=10;
let b=10.2;
let c='hong gil dong';
let d=true;
let e=null;
let f=new Date();
let g=[10,20,30];

//typeof : 해당 타입확인
console.log(a, typeof(a)); //number  //타입선언1 : 괄호 안에
console.log(b, typeof b);            //타입선언2 : 한칸 띄고
console.log(c, typeof(c)); //string
console.log(d, typeof d);  //boolean
console.log(e, typeof e);  //object
console.log(f, typeof f);
console.log(g, typeof g);

let fn=function(){

}
console.log(fn,typeof fn); //function

//-----------------------------------------------------------------

console.log(typeof null);
console.log(typeof undefined); 


let arr = [10,20,30];  
console.log(typeof arr,arr);  //object

console.log(Array.isArray(arr), arr)  //undefined 타입이 선언되어있지 않음?

let now = new Date();
console.log(typeof now);   //object
console.log(Array.isArray(now));  //false = 찾는값이 없다