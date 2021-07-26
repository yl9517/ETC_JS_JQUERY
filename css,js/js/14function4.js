//원래 (fn2 참고)
const a = function(){
    console.log('test');
} 
//위에 한줄짜리 함수를 축약한 함수  = 화살표함수

//화살표 함수 arrow function (람다식)
const a2=()=>console.log('test2');

a();
a2();


//---------------------------
//매개변수 있을 경우
//원래 (fn2 참고)
const a3 = function(a,b){
    console.log('test');
} 

console.log('----------');

//한줄 화살표 함수
const a4=(irum,age)=>console.log('name1',irum,'age1',age);
a4('lee',20);


//두줄이상 화살표 함수 (묶어주기)
const a5=(irum,age)=>{
    console.log('name2',irum);
    console.log('age2',age);
}
a5('kim',30);


console.log('----------');

//리턴값
const a6=(kor,eng)=> kor+eng;   // {return kor+eng}
let result = a6(50,80);

console.log(result);