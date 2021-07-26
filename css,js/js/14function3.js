/*
    Function 생성자
     : 많이 사용하지 않음
*/

const fn3 = new Function("a","b","return a+b");
const result = fn3("hong","giledong");
console.log(result);

const fn3_1 = new Function("a","alert('hello'+a)");
const result2 = fun3_1('hong gil dong');
console.log(result2);