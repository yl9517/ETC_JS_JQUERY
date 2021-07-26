let arr=['hong','kim',10,20,10.2,true,'park'] ; //에러는 나지 않지만 안좋음

console.log(arr.length);
console.log(typeof arr); //object
console.log(Array.isArray(arr)); //배열인지 판별 //t

console.log(arr[0]);
console.log(arr[6]);
console.log(arr[7]);


console.log('---------');

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('---------');
for(let item of arr){
    console.log(item);
}

console.log('---------');
for(let item in arr){  //in은 주로 객체에 씀
    console.log(item);
}

console.log('---------');
for(let item in arr){
    console.log(arr[item]);
}