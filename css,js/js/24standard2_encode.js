const a ='http://hello.jsp?name=홍길동&age=20';

const encode_a=encodeURI(a);        //인코드
const decode_a=decodeURI(encode_a); //인코딩 된 것을 원래상태로 복구 = 디코드

const encode_comp_a = encodeURIComponent(a); 
const decode_comp_a = decodeURIComponent(encode_comp_a);

console.log(encode_a);
console.log(decode_a);

console.log('--------');

console.log(encode_comp_a);
console.log(decode_comp_a);