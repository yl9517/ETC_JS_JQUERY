window.onload=function(){

    class Person{
        constructor(name,addr,tel){
            this.name=name;
            this.addr=addr;
            this.tel=tel;
        }
    }

    let arr = [];
    document.getElementById('add').onclick=function(){

        let n=document.getElementById('name');
        let a=document.getElementById('addr');
        let t=document.getElementById('tel');

        let name = n.value;
        let addr = a.value;
        let tel = t.value;

        arr.push(new Person(name,addr,tel));

        //초기화
        n.value='';
        a.value='';
        t.value='';

    }
    document.getElementById('view').onclick=function(){

        let result = '';
        for(let i=0; i<arr.length; i++){
            result += "<tr>"
            result += "<td>"+arr[i].name+"</td>"
            result += "<td>"+arr[i].addr+"</td>"
            result += "<td>"+arr[i].tel+"</td>"
            result += "</tr>"

           // console.log(arr[i].name ,arr[i].addr, arr[i].tel );
        }
        document.getElementById('result').innerHTML =result;

    }
}