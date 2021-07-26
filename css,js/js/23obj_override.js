//부모클래스
class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
Person.prototype.prt=function(){
    console.log('Person prt mehtod');
}
Person.prototype.paint=function(){
    console.log('Person paint mehtod');
}


//자식 클래스
class Student extends Person{

    constructor(name,age,addr){
        super(name,age);
        this.addr=addr;
    }
}
Student.prototype.draw=function(){
    console.log('Student draw method');
}
Student.prototype.prt=function(){   //오버라이딩
    console.log('Student prt method');
}



//출력
let p1 = new Person('hong',20);
p1.prt();
p1.paint();

console.log('-----------');

let s1 = new Student('park',10,'seoul');
s1.prt();
s1.draw();
s1.paint();