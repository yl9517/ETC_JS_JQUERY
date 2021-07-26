let vli = document.getElementsByTagName('li');


for(let i=0; i<vli.length; i++){

    vli[i].onclick=function(){  //하나를 클릭했을 때

        for(let i=0; i<vli.length; i++){  //모두 스타일 none
            vli[i].style.border='';
            vli[i].style.padding='0px';
        }

        //클릭한 것만 스타일변경
        this.style.border="1px solid red";
        this.style.padding="10px 30px";
    }
}