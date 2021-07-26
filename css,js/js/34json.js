let person={name:'hong', age:20};  //객체 리터럴

let a= JSON.stringify(person);
alert(a);       // {"name":"hong","age":20}


document.getElementById('btn').onclick =function(){
    let result = '{"name":"hong","age":20}';

    let data = JSON.parse(result); //json형식의 문자열을 js객체로 변환
    // console.log(data.name); 객체의 name값 받아짐

    let a="<td>"+data.name+"</td>";
        a+="<td>"+data.age+"</td>";

    let child = document.getElementById('result').children;
    child[1].innerHTML=a;
}