let a =['hong','lee','kim'];

// [splice] : 기존 요소를 삭제/교체하거나 or 새 요소를 추가
a.splice(1,1);  // 1번째 인덱스부터 하나 삭제
console.log(a);

a.splice(1,0,'a1','a2'); //1번째 인덱스에 0개 삭제하고 그 자리에 a1,a2 추가
console.log(a);

a.splice(2,1,'test1','test2'); //2번째 인덱스에서 하나 삭제후 그 자리에 요소 추가
console.log(a);