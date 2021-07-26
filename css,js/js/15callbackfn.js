//[콜백함수] = 매개변수를 전달하는 함수


let hello= function(e){
    e(); //2. 받아온 매개변수가 함수이므로 이렇게 호출
}

//1. 매개변수로 함수를 보내는 것
hello( function(){
    console.log('massage');
})


g('-------------');



let sum=function(a,b){
    return a+b;
}

let fn=function(a,b,tot){  //2. sum을 tot으로 받음

    let total=tot(a,b);   //3. 즉 sum(a,b)
    console.log(total);
}

fn(10,20,sum);  //1. fn에 sum함수를 보냄 ( sum = 콜백함수 )

