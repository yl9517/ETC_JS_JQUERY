let irum=['hong','kim','lee','park'];

//innerHTML은 보안에 취약하므로 안쓰는게 좋음.
//DOM으로 객체를 만들어서 넣는 방법

document.getElementById('btn').onclick=function(){

    let vli1=document.createElement('li');   // li 태그 생성
                vli1.setAttribute('class','liClass'); //li태그에 (class)속성 추가
    let vli2=document.createElement('li');

    let txt1 = document.createTextNode('list1');  // 내용 생성
    let txt2 = document.createTextNode('list2');

    
    vli1.appendChild(txt1); // li태그에게 내용 붙이기
    vli2.appendChild(txt2);

    document.getElementById('result').appendChild(vli1);  //html로 보내기
    document.getElementById('result').appendChild(vli2);

}

/*

.append 는 폭넓게 아무 요소,내용 추가 가능    ex)vil1.append('hello'); 가능
.appendChild는 노드를 생성해서 추가          ex)vil1.appendChile('hello'); 불가능 (레퍼런스에러)


*/