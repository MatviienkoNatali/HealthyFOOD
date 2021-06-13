document.getElementById("burger").onclick = function() {
  open()
};

function open() {
	document.getElementById("trigger").classList.toggle("active");
 	document.getElementById("menu").classList.toggle("show")
  document.getElementById("body").classList.toggle("body__active");
}




$(document).ready(function($){
  $('.item-first').click(function(){
    $('.categories__context').removeClass('active');
    $('.item-first').addClass('active');
  });
  $('.item-second').click(function(){
    $('.categories__context').removeClass('active');
    $('.item-second').addClass('active');
  });
  $('.item-third').click(function(){
    $('.categories__context').removeClass('active');
    $('.item-third').addClass('active');
  });
  $('.item-fourth').click(function(){
    $('.categories__context').removeClass('active');
    $('.item-fourth').addClass('active');
  });
  $('.item-fifth').click(function(){
    $('.categories__context').removeClass('active');
    $('.item-fifth').addClass('active');
  });


  $('.list-menu__view_square').click(function(){
    $('.list-menu__view').removeClass('active');
    $(this).addClass('active');
    $(".list-menu__square").addClass('active');
  });
  $('.list-menu__view_line').click(function(){
    $('.list-menu__view_square').removeClass('active');
    $('.list-menu__square').removeClass('active');
    $(this).addClass('active');
  });
});




$(document).ready(function($) {
	$('.popup__open').click(function() {
		$('.popup__fade').fadeIn();
		return false;
	});	
	
	$('.popup__close').click(function() {
		$(this).parents('.popup__fade').fadeOut();
		return false;
	});		

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup__fade').fadeOut();
		}
	});
	
	$('.popup__fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

