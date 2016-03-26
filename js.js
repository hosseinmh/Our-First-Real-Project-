$('.navBar').on('mouseenter',function()
{
  $(this).animate({
    width:'21vw'
  },300,'swing',function(){});
});
$('.navBar').on('mouseleave',function()
{
  $(this).animate({
    width:'4vw'
  },200,'swing',function(){});
});
$('.navBarIcons').on('mouseover',function()
  {
    $(this).children().children().css('fill','#FCA311');
    $(this).children(":last").css('color','#FCA311');
  }
);
$('.navBarIcons').on('mouseout',function()
  {
    $(this).children().children().css('fill','white');
    $(this).children(":last").css('color','white');
  }
);
$(window).on('scroll',function()
  {
    if (document.body.scrollTop == 0)
    {
      $('#new').stop(true, true).animate({top:'35%'},300,'swing');
      $('#filter').stop(true, true).animate({top:'50%'},300,'swing');
      $('#contact').stop(true, true).animate({top:'65%'},300,'swing');
      $('#arrow').stop(true, true).animate({top:'100%'},300,'swing');
      console.log("top");
    }
    else
    {
      $('#new').animate({top:'20%'},300,'swing');
      $('#filter').animate({top:'40%'},300,'swing');
      $('#contact').animate({top:'60%'},300,'swing');
      $('#arrow').animate({top:'80%'},300,'swing');
      console.log("not top");
    }
  }
);
$('#arrow').on('click',function()
  {
    $('html ,body').animate({scrollTop : 0},500,'swing');
  }
);
