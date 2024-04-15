/* 버튼을 클릭하면 전체 메뉴가 보이게 */
$(document).ready(function () {

    $(".tit .btn").click(function(e){
        e.preventDefault();
        //$(".cont_nav").css("display" , "block");
        $(".cont_nav").slideToggle();
        $(".tit .btn").toggleClass("on");
    });

    /* 배너 슬라이드 */
    const main_swiper = new Swiper('.cont_ban .main_swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 70,
          depth: 100,
          modifier: 3,
          slideShadows: true
      },
      slidesPerView: "auto",
      centeredSlides: true,

       autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        loop:true,
      },

    });

    /* 갤러리 슬라이드 */
    const gallery_swiper = new Swiper('.gallery .gallery_swiper', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      slidesPerView: "auto",
      centeredSlides: true,

       autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        loop:true,
        stop: '.gb_icon2.pause',
      },

      navigation: {
        nextEl:'.gb_icon4.next',
        prevEl:'.gb_icon3.prev',
      }
  });

  $(".gb_icon1.play").click(function() {
    gallery_swiper.autoplay.start();
  });

  $(".gb_icon2.pause").click(function() {
    gallery_swiper.autoplay.stop();
  });


  /* 탭 메뉴 */
  var $tab_list = $(".tab_menu");

  $tab_list.find("ul ul").hide();
  $tab_list.find("li.active >  ul").show();

  function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
  }
  $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

  /* 레이어팝업 */
  $(".layer").click(function(e){
    e.preventDefault();
    $("#layer").slideDown();
  });

  $(".close").click(function(e){
    e.preventDefault();
    $("#layer").slideUp();
  });

 /* 윈도우 팝업 */
  $(".window").click(function(e){
    e.preventDefault();
    window.open("popup.html", "pouup01", "width=800, height=500, left=50, top=50, scrollbar=0, toolbar=0 menubar=0");
  });

}); //end
