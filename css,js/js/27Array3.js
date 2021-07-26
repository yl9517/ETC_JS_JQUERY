
let a=['hong','kim','lee','park'];

// [forEach] : 순환하며 처리
let data = '';
a.forEach(item => data+= '<li>'+item+'</li>');
document.getElementById('result').innerHTML=data;