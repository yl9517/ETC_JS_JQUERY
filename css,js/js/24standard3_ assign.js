//------------ 얕은복사, 깊은복사 -----------



//▶ 얕은 복사
let a = [10,20,30,40];
let b = a;

console.log(a);
console.log(b);
                console.log(a==b); //t -> 같은것을 가르키고 있음

console.log('-----------');

a[2]=100;
console.log(a);
console.log(b);  //얘도 바뀜
                console.log(a==b);  //t -> 같은 주소값



//===================================================================
console.log('=============');




//▶ 깊은 복사 assign
let c = [10,20,30,40];
let d = [];

let result = Object.assign(d,c); // d에다가 c를 집어넣어라   //d 대신 []도 가능
console.log(c);
console.log(result);
                console.log(c==result);  // f -> 다른것을 가르키고 있음

              

c[2]=300;

console.log('-----------');
console.log(c);     //얘만 바뀜
console.log(result); //이전에 복사한건 안바뀜
                console.log(c==result);   // f -> 다른 주소값