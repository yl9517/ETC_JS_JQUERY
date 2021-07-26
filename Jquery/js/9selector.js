// $('thead tr').css('backgroundColor','yellow');
// $('tbody>tr:odd').css('backgroundColor','silver');
// $('tbody>tr:even').css('color','skyblue');


// $('tbody>tr:first').css('backgroundColor','#eee000');
// $('tbody>tr:eq(2) td').css('color','skyblue'); // eq : tr의 두번째인덱스
// $('tbody>tr:gt(1)').addClass('bg');    // gt : tr 첫번째 인덱스보다 큰 애들

// next() : 다음인덱스  | prev() : 이전 인덱스
// $('tbody>tr:eq(0)').next().addClass('bg'); 
// $('tbody>tr:eq(1)').prev().css('backgroundColor','silver');  
// $('tbody>tr:last td:eq(0)').text('hello'); // text(해당문자)로 변환


// ▶ eq(0),eq(1)...이런식으로 선택자를 찾는것보다
// ▶ 하나를 먼저 선택 후 다음, 다음, 이전 등을 써주는게 속도면에서 더 빠름
// let a = $('tbody>tr:eq(0)').css('backgroundColor','yellow')
//             .next().css('color','green')
//             .next().css('backgroundColor','skyBlue')
//             .prev().css('backgroundColor','pink');

// console.log(a);


// let su = 6;
// // ▶ $('#result').text('hello');   //값 넣기1
// $('#result').text(function(){   //값 넣기2
//     let a =['a1','a2','a3'];

//     return a[su%3];  
// });

// let value= $('#result').text();   //값 가져오기
// console.log(value);


//parent() : 부모  |  siblings() : 형제들
let v = $('td:contains("서울")').siblings();  //'서울'이라는 문자열을 포함한 td.. 의 형제들
console.log(v);

let p = $('td:contains("서울")').parent().css('backgroundColor','yellow')  //부모들 중에
        .find('td:eq(0)').css({   'font-weight' : 'bolder'               //첫번째 인덱스 찾기
                                 , 'color' : 'green'
        });  
console.log(p);