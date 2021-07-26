//Date()  ▶ 문자형 (.tostring이므로)
//new Date()  ▶ Date타입

let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth()+1);

// 2021.7.21 15:11:20 요일

let week = d.getDay();
if(week==0)
    week = '일';
else if(week==1)
    week = '월';
else if(week==2)
    week = '화';
else if(week==3)
    week = '수';
else if(week==4)
    week = '목';
else if(week==5)
    week = '금';
else if(week==6)
    week = '토';
    
console.log(
    d.getFullYear() +"."+ (d.getMonth()+1) +"."+d.getDate()+"  "
    +d.getHours() +":"+ d.getMinutes()+":"+d.getSeconds() +" "+week+"요일"
);