let irum = ['hong','kim','lee','park'];

document.getElementById('btn').onclick=function(){


    for(let data of irum){

       let names = document.createElement('li');
       let txt = document.createTextNode(data);   //in 일때 irum[data]??

       names.appendChild(txt);
       document.getElementById('result').appendChild(names);
    }
    


}