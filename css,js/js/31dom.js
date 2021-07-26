let vimg=document.getElementsByClassName('t');

for(let i=0; i<vimg.length; i++){
    vimg[i].onclick=function(){

        console.log(this);
        let result = document.getElementById('result');
            result.setAttribute('src',this.getAttribute('src')); //src 속성을 클릭한src로
            result.setAttribute('alt',this.getAttribute('alt')); //alt 속성을 클릭한alt로
    }
}