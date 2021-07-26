window.onload=function()
{
   document.getElementById('btn').onclick=function()
   {
      let txt= document.getElementsByName('txtname')[0];
       let opt=document.createElement('option');
       opt.setAttribute('value', txt.value);
       let txtnode=document.createTextNode(txt.value);
       opt.appendChild(txtnode);
       document.getElementById('sel1').appendChild(opt);
      txt.value="";

   }

    document.getElementById('right').onclick=function()
    {
        let sel1=document.getElementById('sel1');
       
        let items=[];
        //console.log(sel1.options);
        for(let i=0; i<sel1.options.length; i++)
        {
            if(sel1.options[i].selected)
                items.push(sel1.options[i]);
        }

      // console.log(items);
     while(items.length>0)
         document.getElementById('sel2').appendChild(items.pop());
    }
  
    document.getElementById('left').onclick=function()
    {
         let sel2=document.getElementById('sel2');
         let items=[];
         for(let i=0; i<sel2.options.length; i++)
         {
             if(sel2.options[i].selected==true)
             {
                   items.push(sel2.options[i]);
             }
         }//for

         while(items.length>0)
         {
             document.getElementById('sel1').appendChild(items.pop());
         }


    }

   let opt= document.getElementById('sel1');
      opt.ondblclick=function()
      {
         //console.log(opt.selectedIndex, opt[opt.selectedIndex]);
         opt.removeChild(opt[opt.selectedIndex]);
      }


}