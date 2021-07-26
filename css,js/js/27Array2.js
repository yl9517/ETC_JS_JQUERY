//Array 순회 메소드 (prototype)
let a=[10,100,60,30,40,20,70,100,45];



// [find method] : 조건을 만족하는 첫 번째 요소 반환
let result = a.find(function(item){
    return item>=50;  
});
console.log(result);


let result2 = a.find(item => item>=50);
console.log(result2); 


console.log('------');


// [every] : 배열안의 모든 요소가 조건을 통과하는지
let result3 = a.every(function(item){
     return item>=30;
});
console.log(result3);   //f   모든요소X


console.log('------');


// [filter] : 조건을 만족하는 요소들을 배열로 반환
let result4 = a.filter(function(item){
    return item>=60;
})
console.log(result4);


let result5 = a.filter(item=>item>=60);
console.log(result5);


// [join] : 배열의 모든 요소를 입력한 문자로 연결해 하나의 문자열로 만듦
let result6 = a.join("/");
console.log(result6);

