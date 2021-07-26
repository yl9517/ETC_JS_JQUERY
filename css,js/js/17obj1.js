//생성자 함수 (틀에 맞춰 객체 만들기)

const Man=function(name,age){
    this.name=name;
    this.age=age;
}

let m1 = new Man('hong',20);
let m2 = new Man('park',10);

console.log(m1.name, m1.age);
console.log(m2.name, m2.age);