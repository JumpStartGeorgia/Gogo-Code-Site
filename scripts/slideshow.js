
var auto_slideshow;
var slideshow_time = 5000;
var higlight_height;
var slideshow_change;
var allowed_height_diff = 60;

(function() {

  $(document).ready(function() {
  	slideshow_button_functions();
  	show_first_slide();
  	auto_slideshow  = window.setTimeout(change_slideshow, slideshow_time);
  });

  if(is_touch_device()){
	$(document).ready(function() {
	  	set_slideshow_height();
	});

  	$(window).resize(function(){
  		change_slideshow_height();
 	});
  }

})();

function slideshow_button_functions() {

	$(".slideshow-next-prev-button.prev").click(function(){
		change_slideshow(null, -1);
	});
	$(".slideshow-next-prev-button.next").click(function(){
		change_slideshow(null, 1);
	});
}


function show_first_slide() {
	$(".slideshow-item").first().addClass("active");
}

function change_slideshow(index, direction) {
	var slideshows_num = $(".slideshow-item").length;
	var curr_slideshow = $(".slideshow-item.active");
	var curr_slideshow_index = parseInt(curr_slideshow.attr("data-index"));
	var next_slideshow_index = 0;
	curr_slideshow.removeClass("active");
	$(".slideshow-item").stop(true, true);
	manual_change = false;
	clearTimeout(auto_slideshow);		


	if( typeof index === "undefined" ){
		direction = 1;
	} else {
		manual_change = !manual_change;
	}

	if(direction != null){
		if(curr_slideshow_index + direction == slideshows_num ) {
			next_slideshow_index = 0;
		} else if(curr_slideshow_index + direction == -1) {
			next_slideshow_index = slideshows_num - 1;
		} else {
			next_slideshow_index = curr_slideshow_index + direction;
		}
	} else {
		next_slideshow_index = index;
	}

	var next_item = $(".slideshow").find('.slideshow-item:eq('+ (next_slideshow_index) +')');
	next_item.addClass('active');


	auto_slideshow = window.setTimeout(change_slideshow, slideshow_time);
}

function set_slideshow_height() {
	var image = $(".slideshow .slideshow-image");
	image.css('height', '');
	image.css('height', image.height());
	slideshow_height_change = $(window).height();
}

function change_slideshow_height() {
	if(Math.abs($(window).height() - slideshow_height_change) > allowed_height_diff) {
		set_slideshow_height();
	}
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
}