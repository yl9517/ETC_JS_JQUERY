
let arr=[10,20,30,40]; //배열

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log('----------');

//es6이후.. 배열 출력하는 법
for(let data of arr){
    console.log(data)
}

console.log('----------');

let arr2=['hong','kim','lee','park'];
for(let data of arr2){
    console.log(data)
}

console.log('----------');

let hello='안녕하세요 만나서 반갑습니다';
                                            console.log(typeof hello);
for(let data of hello){
    console.log(data)
}