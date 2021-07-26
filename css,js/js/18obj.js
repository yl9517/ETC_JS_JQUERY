let person={irum:'kim', age:20};

console.log(person.irum, person.age);
console.log(person['irum'], person['age']);  //person['문자표현 속성']

//person.say hi='hello';   이건 안됨
person['say hi']='hello';

console.log(person);
console.log(person['say hi']);

let juso='addr';
person.juso='seoul';
console.log(person);