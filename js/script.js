$(document).ready(function(){
	//recent post slideshow		
    $('.posts_list').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth:370,
        slideMargin : 30,
        pager:false,
        nextSelector: '.recent_posts .controls .next',
        prevSelector :'.recent_posts .controls .prev' 
    });

    //Mobile 메뉴	
    $(".toggle").click(function(){
        $(".main-menu").slideToggle();
    }); 

    //사이즈변경시 메뉴	
    $(window).resize(function(){
        if($(window).width() > 768){
            //참이면 할일
            $(".main-menu").show();
        } else{
            //거짓이면 할일
            $(".main-menu").hide();
        }
    });	

    //상단 메뉴 고정
    var $header = $('header');
    var $services = $('.services');
    var $counters = $('.counters');
    var $counterData = $counters.find('h3');

    var $serviceExecuted = false;
    var $counterExecuted = false;


    $(window).scroll(function(){
        var $currentSct = $(this).scrollTop();
        var $offset = 300;

        if($currentSct > 0){
            $header.addClass('sticky');
        }else{
            $header.removeClass('sticky');
        }
        //service item 나타나기
        var $serviceThreshold = $services.offset().top - $offset;
        
        if(!$serviceExecuted){
            if($currentSct > $serviceThreshold){
                $services.addClass('active');
                $serviceExecuted = true;
            } 
        }


        //숫자 애니메이션
    var $counterThreshold = $counters.offset().top - $offset;
    
        

        if($currentSct > $counterThreshold){

            if(!$counterExecuted){
                $counterData.each(function(){
                    var $current = $(this);
                    var $target = $current.attr('data-rate');
                    //animate, progress, rate 
                    $({rate: 0}).animate({rate :$target },{
                        duration: 2500,
                        progress:function(){
                            var now = this.rate;
                            $current.text(Math.ceil(now));
                        }
                    });
                });
                $counterExecuted = true;   
                console.log($counterExecuted);             
            } //counterExecuted if
        }//scroll if



    });// scroll event

    

    //overlay
    $('.video .icon').click(function(e){
        e.preventDefault();
        $('#overlay').addClass('visible');

        var currentUrl = $('iframe').attr('src');
        var newStr = '?autoplay=1';
        var newUrl =currentUrl.concat(newStr);

        $('iframe').attr('src',newUrl);

    });
    $('.video .close').click(function(e){
        e.preventDefault();
        $('#overlay').removeClass('visible');
    });
    
    
});//ready(function()

