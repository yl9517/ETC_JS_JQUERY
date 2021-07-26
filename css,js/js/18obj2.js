let man={irum:'park',age:20, addr:'서울'};

man.gender='남';
man['favfood']='떡볶이';

console.log(man);


 //객체는 in (배열에는 of )
for(let item in man){ 
    console.log(item, man[item]);
   // console.log(man.item); //item은 속성이 아닌 변수 이므로 위에처럼 써야함
}