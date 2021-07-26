
//중첩 함수
const outer=function(){
    const inner=function() {
        console.log('inner');
    }
    inner();
}

outer();
// inner();  오류 ▶ outer안에 정의한 함수

