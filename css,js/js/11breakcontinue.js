let i=0;
while(i<10){
    i++
    if(i%3==0) break;

    console.log(i);
}

console.log('---------');

i=0;
while(i<10){
    i++;
    if(i%3==0) continue; //3으로 나눠떨어지면 넘어감

    console.log(i);
}