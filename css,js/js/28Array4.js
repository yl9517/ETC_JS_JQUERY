
// [map] : 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
let arr=[10,20,30,40];

let result = arr.map(function(item){
    return item*2;
})
console.log(result);



// [reduce] : 배열 요소의 누적
let jumsu = [40,30,20,10,50,60,90];

let result2 =jumsu.reduce(function(prev,curr,index){  //첫번쨰값,두번째값, 인덱스
    return prev+curr;
});
console.log(result2);



// [sort] : 배열 정렬
let score = [70,32,400,40,200,100,60,70,50];
score.sort();    //숫자 순서대로 정렬
console.log(score);

score.sort((a,b) => a-b);   //숫자 크기대로 오름차순 정렬   //???????찾아보기...............
/* 
score.sort(funcitoon(a,b){
    return a-b;
});
*/
console.log(score);  