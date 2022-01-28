$(function(){
  //Gnb
  $("#btnMenu").click(function(){
    if($(this).hasClass("close")){
      $(this).removeClass("close");
      $(".boxSelect").show();
      $("#gnb").removeClass("is--open");
    }else{
      $(this).addClass("close");
      $(".boxSelect").hide();
      $("#gnb").addClass("is--open");
    }
  });

  $("#gnb .menu a").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });


  //Select
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
    $(".boxSelect .selected").html(target).removeClass("on");
    $(".boxSelect .list").slideUp(300);
  });


  //Service
  $(".boxService dd").slideUp(0);
  $(".boxService dt:eq(0)").addClass("on");
  $(".boxService dd:eq(0)").slideDown(300);
  $(".boxServiceImg div:eq(0)").fadeIn(300);

  $(".boxService dt").click(function(){
    var idx = $(this).attr("data-role");
    $(this).addClass("on").siblings("dt").removeClass("on")
    $(this).next("dd").slideDown(300).siblings("dd").slideUp(300);
    $(".boxServiceImg div:eq("+idx+")").fadeIn(300).siblings().fadeOut(300);
  });

});