// var 요소

var changeMain = document.getElementById('mainFrame');
var changeSub1 = document.getElementById('subFrame1');
var changeSub2 = document.getElementById('subFrame2');  
var changeSub3 = document.getElementById('subFrame3');
var changeSub4 = document.getElementById('subFrame4');
var resizeId = "";

$(document).ready(function(){
    $("#menuList li").css("color","white");

	selectImage();
    changeMainSub();
    

});



function selectImage(){
    
    $("#mainHall").click(function(){
        changeImage(1);
    });

    $("#room1").click(function(){
        changeImage(2);
    });

    $("#room2").click(function(){
        changeImage(3);
    });

    $("#room3").click(function(){
        changeImage(4);
    });

    $("#spa").click(function(){
        changeImage(5);
    });

    $("#garden").click(function(){
        changeImage(6);
    });

    $("#balcony").click(function(){
        changeImage(7);
    });

    $("#resturant").click(function(){
        changeImage(8);
    });


}

function changeImage(num){


    switch(num){
        case 1:
            changeMain.src="images/fulls/1_1.jpg";
            changeSub1.src="images/thumbs/1_1.jpg";
            changeSub2.src="images/thumbs/1_2.jpg";
            changeSub3.src="images/thumbs/1_3.jpg";
            changeSub4.src="images/thumbs/1_4.jpg";
          break;
        case 2:
            changeMain.src="images/fulls/2_1.jpg";
            changeSub1.src="images/thumbs/2_1.jpg";
            changeSub2.src="images/thumbs/2_2.jpg";
            changeSub3.src="images/thumbs/2_3.jpg";
            changeSub4.src="images/thumbs/2_4.jpg";
          break;
        case 3:
            changeMain.src="images/fulls/3_1.jpg";
            changeSub1.src="images/thumbs/3_1.jpg";
            changeSub2.src="images/thumbs/3_2.jpg";
            changeSub3.src="images/thumbs/3_3.jpg";
            changeSub4.src="images/thumbs/3_4.jpg";
          break;
        case 4:
            changeMain.src="images/fulls/4_1.jpg";
            changeSub1.src="images/thumbs/4_1.jpg";
            changeSub2.src="images/thumbs/4_2.jpg";
            changeSub3.src="images/thumbs/4_3.jpg";
            changeSub4.src="images/thumbs/4_4.jpg";
          break;
        case 5:
            changeMain.src="images/fulls/5_1.jpg";
            changeSub1.src="images/thumbs/5_1.jpg";
            changeSub2.src="images/thumbs/5_2.jpg";
            changeSub3.src="images/thumbs/5_3.jpg";
            changeSub4.src="images/thumbs/5_4.jpg";
          break;
        case 6:
            changeMain.src="images/fulls/6_1.jpg";
            changeSub1.src="images/thumbs/6_1.jpg";
            changeSub2.src="images/thumbs/6_2.jpg";
            changeSub3.src="images/thumbs/6_3.jpg";
            changeSub4.src="images/thumbs/6_4.jpg";
          break;
        case 7:
            changeMain.src="images/fulls/7_1.jpg";
            changeSub1.src="images/thumbs/7_1.jpg";
            changeSub2.src="images/thumbs/7_2.jpg";
            changeSub3.src="images/thumbs/7_3.jpg";
            changeSub4.src="images/thumbs/7_4.jpg";
          break;
        case 8:
            changeMain.src="images/fulls/8_1.jpg";
            changeSub1.src="images/thumbs/8_1.jpg";
            changeSub2.src="images/thumbs/8_2.jpg";
            changeSub3.src="images/thumbs/8_3.jpg";
            changeSub4.src="images/thumbs/8_4.jpg";
          break;
       
      }
    
    
}

function changeMainSub(){
   
    var flag = true;

    
    $("#mainFrame").click(function(){  
        var $target = $(this); 
        if(flag){
              $target.width($target.width()*1.3);  
             $("#mainFrame").toggleClass("emphasized");
        } else {       
               $target.width($target.width()/1.3);  
             $("#mainFrame").toggleClass("emphasized");
        }
       flag = !flag;
    });
    

    $("#subFrame1").click(function(){
        changeMain.src="images/fulls/1_1.jpg";
    });

    $("#subFrame2").click(function(){
        changeMain.src="images/fulls/1_2.jpg";
    });

    $("#subFrame3").click(function(){
        changeMain.src="images/fulls/1_3.jpg";
    });

    $("#subFrame4").click(function(){
        changeMain.src="images/fulls/1_4.jpg";
    });

}



// function imageSlide(){
//     $('.bxslider').bxSlider({ // 클래스명 주의!
//         auto: true, 
//         speed: 500,  
//         pause: 5000,  // 1초 = 1000
//         mode: 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
//         autoControls: true, // 시작 및 중지버튼 보여짐
//         pager: true, // 페이지 표시 보여짐
//         captions: true, // 이미지 위에 텍스트를 넣을 수 있음
//     });
// }

