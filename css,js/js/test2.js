

//이름 추가
document.getElementById('btn').onclick=function(){

    let n = document.getElementById('name');
    let name = n.value;
    n.value='';
 
    let sendB1 = document.createElement('p');
    let addname = document.createTextNode(name);
    sendB1.appendChild(addname);
    
    document.getElementById('table1').append(sendB1);  //표1에 추가
 
   addOnclick(); //테이블이동 메소드
   removeOnclick();
    
 }
 
// 테이블 이동
const addOnclick = function(){

    let names = document.getElementsByTagName('p'); //표1 자식 호출
                      // getElementById('table1').childern;     // → 표2가 css안먹음

    for(let i=0; i<names.length; i++){  

        names[i].onclick=function(){    //이름 선택시

            for(let j=0; j<names.length; j++){      //모든 스타일 초기화
                names[j].classList.remove('clickSt'); 
            }

            let thisn = this;    //현재 클릭한 p 대상
            thisn.classList.add('clickSt');         //클래스 생성(css)
     
            document.getElementById('right').onclick=function(){  //우클릭
                thisn.classList.remove('clickSt');  //클래스 삭제
                document.getElementById('table2').append(thisn);     //해당 요소 t2로 옮기기! (append : 복사+추가가 아니라 객체 자체를 옮기기)
                thisn = '';     //현재대상 초기화
                removeOnclick();
            }
     
            document.getElementById('left').onclick=function(){  //왼클릭
                thisn.classList.remove('clickSt');   
                document.getElementById('table1').append(thisn);
                thisn = '';
                removeOnclick();
            }
        }
    }
}

//이름 삭제
const removeOnclick = function(){
        let table1 = document.getElementById('table1').children; 
        let table2 = document.getElementById('table2').children; 
    
        for(let i=0; i<table1.length; i++){
            table1[i].ondblclick=function(){
                document.getElementById('table1').removeChild(this);
            }
        }
        for(let i=0; i<table2.length; i++){
            table2[i].ondblclick=function(){
                document.getElementById('table2').removeChild(this);
            }
        }
}