const Man = function(name,age){
    this.name=name;
    this.age=age;
}

let m1 = new Man('hong',20);

//속성 추가
m1.addr='seoul';
m1.prt=function(){
    console.log('prt!!');
}

//출력
console.log(m1.name,m1.age, m1.addr);
m1.prt();

//삭제
delete m1.age;

console.log('---------');
//출력
console.log(m1.name,m1.age, m1.addr);
m1.prt();