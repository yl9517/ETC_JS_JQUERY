function prt(name,age,addr) {  //매개변수 타입이 없으므로 이름만 선언
    console.log('name ',name);
    console.log('age ',age);
    console.log('addr ',addr);
}

prt('hong',20,'seoul'); //호출

//--------------------------------

function sum(su1,su2,su3,su4){
    return su1+su2+su3+su4;
}

let total = sum(10,20,30,40);
console.log('total '+total);

//--------------------------------

function hello(name1,name2){
    console.log('name1 ',name1);
    console.log('name2 ',name2);
}
hello('hong','kim');
console.log('-----')
hello('lee');