
// ReferenceError : 존재하지 않는 변수를 사용하고자 할때
try{
    a;
}catch(e){
    console.log(e);
}finally{
    console.log('finally');
}

// RangeError :
try{
    let a = new Array(-1); //배열 갯수
}catch(e){
    console.log(e);
}finally{
    console.log('finally');
}



let b=-10;
try{
    if(b>=0)
        console.log(b);
    else   
       // throw "변수 b는 음수";  //예외 던지기 -> 메세지만 뜰뿐 에러느낌x
       throw new Error('변수 b는 음수');   //에러생성하여 던지기
}catch(e){
    console.log(e);
}finally{
    console.log('finally');
}
