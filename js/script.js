$(document).ready(()=>{
    // 스와이퍼 스크립트
    const swiper = new Swiper('.swiper', {
        observer: true,
        observeParents: true,
        
        // Optional parameters
        loop: true,
          slidesPerView: 1,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    // 언어
    $('.lang').find('.lang-list').hide();
    $('.lang').mouseover(function(){
        $(this).find('.lang-list').stop().fadeIn();
    }).mouseout(function(){
        $(this).find('.lang-list').stop().fadeOut();
    })


    // 문의사항
    $('.quest a').click(function(){
        if($(this).find('i.fa-chevron-down').length){
            $(this).find('.questBtn>i').removeClass('fa-chevron-down')
            $(this).find('.questBtn>i').addClass('fa-chevron-up')
        }else{
            $(this).find('.questBtn>i').removeClass('fa-chevron-up')
            $(this).find('.questBtn>i').addClass('fa-chevron-down')
        }
        if($(this).find('i.fa-chevron-up').length){
            $(this).parents().siblings().find('.answer').stop().slideUp();
            $(this).parents('.quest>li').siblings().stop().slideUp();
            $('.answer').stop().slideUp();
            $(this).parents('li').next().stop().slideDown();
        }else{
            $('.quest>li').slideDown();
            $(this).parents('li').next().stop().slideUp();
        }
    })

    // 슬라이드
    let currentNum=0;
    let slideList=$('.slide ul>li');
    let slideNum=slideList.length;
    console.log(slideNum);

    setInterval(autoFade, 5000)

    function autoFade(){
        let nextNum=(currentNum+1)%slideNum;
        slideList.eq(currentNum).fadeOut();
        slideList.eq(nextNum).fadeIn();
        currentNum=nextNum;
    }

    

    // 컨텐츠 표지(섬네일)
    $('.contents>article').mouseover(function(){
        $(this).siblings().find('.conText').stop().css('opacity','1');
        $(this).find('.conText').stop().css('opacity','0');
        if($(this).find('.conText').css('opacity')==0){
            $(this).find('.conText').animate({zIndex:'-1'},0)
        }else($(this).find('.conText').animate({zIndex:'10'},0))
    })
    $('.contents>article').mouseleave(function(){
        $('.adout-pop').fadeOut(0).find('li').fadeOut(0, function(){
            $(this).find('.back').removeClass('acitve')
        });
        $('.contents>article .conText').css('opacity','1');
        if($(this).find('.conText').css('opacity')==1){
            $(this).find('.conText').animate({zIndex:'10'},0);
        }
    })


    // 타슈 정보 컨텐츠
    $('.adoutTashu .contentForm>a').click(function(){
        let formNum=$(this).index();
        $('.adout-pop').show();
        $('.adout-pop').find('li').eq(formNum).fadeIn(200, function(){
            $(this).find('.back').addClass('active');
        });
    })
    $('.back>button').click(function(){
        $('.adout-pop').fadeOut(200);
        $('.adout-pop').find('li').fadeOut(200, function(){
            $('.back').removeClass('active');
        });
    })


    // 이용/반납 방법
    $('.using .conTitle>li>a').click(function(){
        let idx=$(this).parents().index();
        
        $('.conTitle>li').removeAttr('class');
        $(this).parents().addClass('active');

        // 방법 컨텐츠 박스
        $('.conBox>li').removeAttr('class');
        $('.conBox>li').eq(idx).addClass('active');
    });

    /* ─── 반응형 적용 시 발생할 이벤트 스크립트 ─── */
    // 모바일 언어
    $('.mo-lang .lang-btn>a').click(function(){
        $('.lang-list').slideToggle();
    });
    // 모바일 컨텐츠 버튼
    $('#logo button').click(function(){
        let offset=$('.appDown').offset();
        $('html,body').animate({scrollTop : offset.top}, 500);
    });
    
})