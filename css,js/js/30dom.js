let d1 = document.getElementById('p1');
console.log(d1);

let d2=document.getElementsByClassName('t1'); //배열로 값이 저장됨 (근데 isArray체크는 불가)
console.log(d2, typeof d2);

for(let i=0; i<d2.length; i++){
    console.log(d2[i]);
}
d2[1].style.backgroundColor="green";

console.log('-------');

let d3=document.getElementsByTagName('li');
console.log(d3, typeof d3);
