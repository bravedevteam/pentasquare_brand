$(function(){
  //Header
  var section = [];
  var header = $("#header");

  function sectionScroll(){
    section = [];
    $(".section").each(function(){
      var _pos = $(this).position().top;
      section.push(_pos);
    });

    var pos = $(this).scrollTop();

    if(pos < section[1]){
      header.removeClass("is--white");
    }else if(section[4] <= pos){
      header.removeClass("is--white");
    }else if(section[1] <= pos < section[4]){
      header.addClass("is--white");
    }
  }

  $(window).scroll(function(){
    sectionScroll();
  });
  sectionScroll();


  //Gnb
  $("#btnMenu").click(function(e){
    e.preventDefault();
    if($(this).hasClass("close")){
      $("html, body").css("overflow", "auto");
      $(this).removeClass("close");
      $(".boxSelect").show();
      $("#gnb").removeClass("is--open");
      $("#header h1").removeClass("is--white");
    }else{
      $("html, body").css("overflow", "hidden");
      $(this).addClass("close");
      $(".boxSelect").hide();
      $("#gnb").addClass("is--open");
      $("#header h1").addClass("is--white");
    }
  });

  $("#gnb .menu a").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });


  //Select
  var lang = ["KO", "EN"];

  $(".boxSelect .list").slideUp(0);
  $(".boxSelect .selected").click(function(e){
    e.preventDefault();
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      $(this).next(".list").slideUp(300);  
    }else{
      $(this).addClass("on");
      $(this).next(".list").slideDown(300);
    }
  });
  $(".boxSelect .list li").click(function(){
    var target = $(this).html();
    if(target == lang[0]){
      $(".boxSelect .selected").html(lang[0]);
      $(".boxSelect .list li").html(lang[1])
    }else if(target == lang[1]){
      $(".boxSelect .selected").html(lang[1]);
      $(".boxSelect .list li").html(lang[0])
    }
    $(".boxSelect .selected").removeClass("on");
    $(".boxSelect .list").slideUp(300);
  });


  //Service
  $(".boxService dd").slideUp(0);
  $(".boxService dt:eq(1)").addClass("on");
  $(".boxService dd:eq(1)").slideDown(300);
  $(".boxServiceImg div:eq(2)").fadeIn(300);

  $(".boxService dt").click(function(){
    var idx = $(this).attr("data-role");
    var img = Number(idx)+1;
    
    $(this).addClass("on").siblings("dt").removeClass("on")
    $(this).next("dd").slideDown(300).siblings("dd").slideUp(300);
    $(".boxServiceImg div:eq("+img+")").fadeIn(300).siblings().fadeOut(300);
  });

});