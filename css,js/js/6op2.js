function fn(){  //onclick으로 받았을때
    console.log('test');
    let name=document.frm.name.value; //document.form이름.input이름.value
    let kor=parseInt(document.frm.kor.value); //int형으로 형변환
    let eng=parseInt(document.frm.eng.value);
    let math=parseInt(document.frm.math.value);
    let tot=kor+eng+math; //int형으로 형변환
    let avg = tot/3.0;
    
    document.write(`name :${name}<br>`)
    document.write(`kor :${kor}<br>`)
    document.write(`eng :${eng}<br>`)
    document.write(`math :${math}<br>`)
    document.write(`tot :${tot}<br>`)
    document.write(`avg :${avg}<br>`)
}