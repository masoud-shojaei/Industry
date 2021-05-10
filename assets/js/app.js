
$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      nav:true,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
  });
  
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  });
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  });


  var owl1 = $('.owl-carousel1');
  owl1.owlCarousel({
      dots:false,
      items:5,
      nav:true,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      responsive : {
        // breakpoint from 0 up
        0 : {
          dots: false
         
        },
        // breakpoint from 480 up
        480 : {
          dots: false
            
        },
        // breakpoint from 768 up
        768 : {
          dots: true
           
        }
    }
  });

})


  




