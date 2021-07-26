//1. 이름 5개받아서 배열 만들고 출력
let arr = ['hong','lee','kim','park','choi'];

for(let data of arr){
    document.write(data+' ');
}

//2. 숫자 2개를 입력받아 함수내에서 합계를 출력하는 함수 만드시오
//(함수이름 : add)  , hap : 리턴받아서 출력

function add1(a,b){    //함수 선언 -> 선억적 함수
    console.log(a+b);  
}
add1(10,50);


function hap1(a,b){   
    return a+b;
}
let sum = hap1(50,50);
console.log(sum);


console.log('-------');


let add = function(a,b){    //익명 함수
    return a+b;
}
let a = function(a,b,hap){  
    let total=hap(a,b);
    console.log(total);
}
a(10,20,add);   // add = 콜백함수


//add호출시 add가 "function add(a,b)" 여도 똑같은지? 


console.log('-------');


//3. 익명함수이용하여 사칙연산
let cal = function(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}

cal(50,25);





//4. 이름이 홍길동,나이가 20인 자료의 객체를 만드시오
//  - 생성자 함수, 객체 리터럴

//생성자 함수
const Man = function(name,age){
    this.name=name;
    this.age=age;
}
let m1 = new Man('hong',20);
let m2 = new Man('kim',50);

console.log(m1.name,m1.age);
console.log(m2.name,m2.age);


//객체 리터럴
let woman={irum:'lee', age:10};
let woman2={irum:'choi', age:60};

console.log(woman['irum'],woman['age']);
console.log(woman2.irum,woman.age);