$(document).ready(function(){
  //스크롤시 헤더메뉴 상단 고정
    $(window).scroll(function(){
      scrollGnb();
    });
    
    //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
    $(document).on('click','#gnb a',function(event){
    var headerHeight = $('header').outerHeight();
    event.preventDefault();
      $("html,body").animate({
        scrollTop : $(this.hash).offset().top - headerHeight
      },300)
    });
  });
  
  
  //헤더메뉴 상단고정 함수
  function scrollGnb(){
    var windowTop = $(window).scrollTop();
    if(windowTop > 0) {
      $("header").addClass('scroll');
    } else {
      $("header").removeClass('scroll');
    }
  }
  
  scrollGnb();//새로고침, 최초 접속시에 확인