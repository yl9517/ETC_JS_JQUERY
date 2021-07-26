let Man= function(name, age){
    this.name=name;
    this.age=age;

    this.prt=function(){ //메서드
   // ★ this.prt는 객체 각각의 행동으로 됨.. -> 모든 객체의 prt동작은 같으므로 this.prt는 좋은방법X  
        console.log('prt!!!')
    }
}
//★ prt와 달리 prototype으로 한번만 만들어서 모든 객체가 공유할 수 있는 paint메소드!!  (동작 같음)
Man.prototype.paint=function(){
    console.log('paint');
}


let m1=new Man('hong',20);
let m2=new Man('park',20);

//프로토 타입      !=      속성

console.dir(m1);
console.dir(m2);

//객체 안에서의 함수 -> 메소드
//그냥 함수r