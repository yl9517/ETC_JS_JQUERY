//NaN : not a Number

console.log(isNaN('hong'));  //ture = 숫자가 아니다
console.log(isNaN(10.2));    //false = 숫자다
console.log(isNaN(10));     //f
console.log(isNaN(true));   //f 
console.log(isNaN('10'));   //f  숫자로 형변환
console.log(isNaN('10a'));  //t
 
//정수형으로 변경  => parseInt
console.log(parseInt('10')+1);  //11
console.log(parseInt('10')+parseInt('22.72'));   //32 (정수만)

console.log('12'+'12');  //1212 ▶ 문자형

//소수점을 포함한 자료 => parseFloat
console.log(parseFloat('12.12')+1);    //13.12  ▶ 실수형
