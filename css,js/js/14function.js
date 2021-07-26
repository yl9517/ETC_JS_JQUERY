/*
    [함수선언식]
    : 한번만 파싱 / hoisting 위험
    : 많이 사용하지 않음

    function 함수이름(a,b,c){

    }


*/

fn1();
console.log("------!");
fn1();  // [hoisting] 선언 전에 호출해도 잘 작동됨..-> 위험

function fn1(){  // 그러므로 가급적 쓰지 않는게 좋음. 
    console.log("fn1 function!!");
}

// fn1();
// console.log("------!");
// fn1();

//---------------------------------------


//매개변수 있을경우

function argfn(name, age){
    console.log('name',name);
    console.log('age',age);
}
argfn('hong',20);


function sum(su1,su2){
    return su1+su2;
}
let result = sum(10,20);
console.log('result',result)