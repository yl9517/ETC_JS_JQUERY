class Person{

    constructor(name,age,addr){
        this.name=name;
        this.age=age;
        this.addr=addr;
    }
    static draw=function(){   //정적메소드 (this 없는 거)
        console.log('draw method');
    }
    
}

Person.prototype.prt=function(){
    console.log(this.name, this.age, this.addr);
}

Person.prototype.view=function(){
    console.log('view method');
}


let p1 = new Person('hong',20,'seoul');
let p2 = new Person('park',10,'kangwon');

p1.prt();
p1.view();
console.log('p1',p1);
console.log(p1.name , p1.age, p1.addr);

console.log('------------------------');

p2.prt();
p2.view();
console.log('p2',p2);
console.log(p2.name , p2.age, p2.addr);


console.log('------------------------');
Person.draw(); //정적 메소드