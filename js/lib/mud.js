$(document).ready(function(){

  /*
	=-=-=-=
	  System Messages
	=-=-=-=
  */
  
  $('div.close').click(function(){
    $(this).parent().fadeOut(500);
  });
  
  /*
	=-=-=-=
	  Smooth Scroll to Anchor
	=-=-=-=
  */
  
  $('a[href^="#"]').on('click',function(e){

	e.preventDefault();
	var target = this.hash,
	$target = $(target);
	$('html, body').stop().animate({
	  'scrollTop': $target.offset().top
	}, 1200, 'swing', function(){
	  window.location.hash = target;
	});
	
  });

  /*
	=-=-=-=
	  Code It for Printing HTML without Rendering
	=-=-=-=
  */

  $('.codeIt').each(function(i){
    $(this).text($(this).html()).fadeIn(2000);
  });

});