$(function(){
  // skip menu
  $('.skip_menu>a').focus(function(){
    $('.skip_menu').css('top',0);
  });
  $('.skip_menu>a').blur(function(){
    $('.skip_menu').css('top','-100%');
  });

  // toggle menu
  $('.nav_btn').click(function(){
    if($(this).parent().hasClass('active')){
      $('.nav_btn').parent().removeClass('active');
    }else{
      $('.nav_btn').parent().removeClass('active');
      $(this).parent().addClass('active');
      $('.nav_btn').next().removeClass('active');
    }
    $(this).next().toggleClass('active');
  });

  // radio car
  $('.car_list p').click(function(){
    $('.car_list p').removeClass('active');
    $(this).addClass('active');
  });

  // car rotate
  var rotateItem=$('.car_list>li:last-child>p');
  for(var cnt=0;cnt<rotateItem.length;cnt++){
    rotateItem.eq(cnt).css('animation-delay',cnt*40+'ms')
  };

  // burger 
  $('#tgl_nav_btn').click(function(){
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    if($(this).attr('class')!='active'){
      $('.sub_nav,.car_list,.large_nav>.content>ul>li').removeClass('active');
    }
  });

  // EN hover
  $('.search').before('<li class="en"><a href="#">EN</a></li>');
    // window resize
  $(window).resize(function(){
    $('.nav_btn').parent().removeClass('active');
    $('.nav_btn').next().removeClass('active');
    var winWidth=$(window).width();
    if(winWidth>=770){
      $('.en').hide();
    }else{
      $('.en').show();
    }  
  });

  // main slider
  var mySwiper= new Swiper('.swiper-container',{
    speed:1000,
    effect:'fade',
    loop:true,
    pagination:{
      el:'.swiper-pagination',
      type:'bullets',
      // dynamicBullets:true,
    },
    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay:{
      delay:5000,
    },
  });

  // start stop btn
  $('#start_btn').click(function(){
    $('.start_stop_btn>button').hide();
    $('#stop_btn').show();
    mySwiper.autoplay.start();
  });
  $('#stop_btn').click(function(){
    $('.start_stop_btn>button').hide();
    $('#start_btn').show();
    mySwiper.autoplay.stop();
  });
  
  
});