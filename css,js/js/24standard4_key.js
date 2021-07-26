let person={irum:'hong', age:20};

let data = Object.keys(person); //내용을 배열로 담음

console.log(person);
console.log(data);

console.log(typeof person);
console.log(Array.isArray(person));
console.log('--------');
console.log(typeof data);
console.log(Array.isArray(data)); //ture = 배열이다.



console.log('-------------------');
for(let i=0; i<data.length; i++){
    console.log(data[i]);
}
console.log('-------------------');
for(let item of data){
    console.log(item);
}


console.log('==================||====================');

// 첫번째 arg는 값,, 두번째 arg는 index
[10,20,30,40].forEach(function(v){
    console.log(v);
});
console.log('-------------------');
['hong','kim','park','kang'].forEach(function(item, index){
    console.log(item,index);
});


console.log('====================================');

//위에 문장을 화살표함수로
data.forEach((item,index)=> console.log(item,index));

//값가져오고싶으면 Object.values