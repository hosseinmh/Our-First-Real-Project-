$('.navBar').on('mouseenter',function()
{
  $(this).animate({
    width:'21vw'
  },200,'easeInExpo',function(){});
});
$('.navBar').on('mouseleave',function()
{
  $(this).animate({
    width:'4vw'
  },400,'easeOutExpo',function(){});
});
$('.navBarIcons').on('mouseenter',function()
  {
    $(this).children().children().css('fill','#FCA311');
    $(this).children(":last").css('color','#FCA311');
  }
);
$('.navBarIcons').on('mouseleave',function()
  {
    $(this).children().children().css('fill','white');
    $(this).children(":last").css('color','white');
  }
);
$(window).on('scroll',function()
  {
    if (document.body.scrollTop == 0)
    {
      $('#new').stop(true, true).animate({top:'35%'},300,'easeInOutQuint');
      $('#filter').stop(true, true).animate({top:'50%'},300,'easeInOutQuint');
      $('#contact').stop(true, true).animate({top:'65%'},300,'easeInOutQuint');
      $('#arrow').stop(true, true).animate({top:'100%'},300,'easeInOutExpo');
    }
    else
    {
      $('#new').animate({top:'20%'},300,'easeInOutQuint');
      $('#filter').animate({top:'40%'},300,'easeInOutQuint');
      $('#contact').animate({top:'60%'},300,'easeInOutQuint');
      $('#arrow').animate({top:'80%'},300,'easeInOutExpo');
    }
  }
);
$('#arrow').on('click',function()
  {
    $('html ,body').animate({scrollTop : 0},500,'easeInBack');
  }
);
