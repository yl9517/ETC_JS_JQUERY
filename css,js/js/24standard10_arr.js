let arr=['a1','a2','a3'];
let arr2=new Array('a1','a2','a3'); 
let arr3=new Array(10); //배열 갯수

console.log(arr.length);  //3
console.log(arr2.length); //3
console.log(arr3.length); //10

console.log('=================');

console.log(Array.isArray(arr));
console.log(Array.isArray(arr2));
console.log(Array.isArray(arr3));