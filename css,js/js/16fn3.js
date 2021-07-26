// closure 함수 (중첩함수 안에 리턴값)
/*
const outer=function(){

    const inner=function () {
        console.log('inner');
    }
    return inner;

}

let result=outer();
console.log(result);
*/

const outer=function(){

    const inner=function () {
        console.log('inner');
    }
    return inner;  //반환된 중첩함수 => 클로저(closure)
};

let a =outer();
a();

console.log('i---------');

outer()();