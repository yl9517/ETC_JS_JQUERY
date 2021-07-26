"use strict"
//document write
// 1 3 5 7 9
// 5 4 3 2 1

/*

*
**
***
****

*/
document.write('[1번]<br>');
for(let i=1; i<10; i+=2){
    document.write(i+' ');
}

document.write('<br>[2번]<br>');
for(let i=5; i>0; i--){
    document.write(i+' ');
}

document.write('<br>[3번]<br>');
for(let i=1; i<5; i++){  //세로줄
    for(let j=1; j<=i; j++){ //1부터 i번째 될때까지 출력
        document.write('* ');
    }
    document.write('<br>');
}