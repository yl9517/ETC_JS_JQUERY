let arr=['hong','kim','lee','park'];

arr.push('hello');
console.log(arr);

console.log('--------');

let result = arr.pop();  //맨 끝에꺼 나옴
console.log(result);
console.log(arr);


console.log('===============');

let irum=['hong','lee'];
let irum2=['a1','a2'];
let newarr = irum.concat(irum2);
console.log(newarr);

//arr은 객체 아닌지? 객체는 힙메모리에 저장이 되는데 어떻게 스택메모리처럼 푸시 팝을 하는지?? 스택구조 찾아보고 다시 질문
