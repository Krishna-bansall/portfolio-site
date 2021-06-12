var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows : true
    },
    loop: true
  });


  $(window).on('scroll',function() {
    var hT = $('#skills').offset().top,
    hH = $('#skills').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > ((hT+hH-wH)-100)){
        console.log('comment box section arrived! eh');
        // This detaches the scroll so doStuff() won't run more than once
        $(window).off('scroll');
        scrollAnimation();
        
    }
});

 function scrollAnimation(){
   
   $('.skill-per').each(function(){
     var $this = $(this);
     var per = $this.attr('per');
     $this.css("width",per+'%');
     $({animatedValue: 0}).animate({animatedValue: per},{
       duration: 1000,
       step: function(){
         $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
      });
    });
  };

//  Type Js init


var typed = new Typed('.heading-animate', {
  strings:[
    "Developer",
    "Designer",
    "Student"
  ], 
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

