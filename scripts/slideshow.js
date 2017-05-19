
var auto_slideshow;
var slideshow_time = 5000;
var higlight_height;
var slideshow_change;
var allowed_height_diff = 60;

(function() {

	$(document).ready(function() {
		slideshow_button_functions();
		set_slideshow_height();
		show_first_slide();
		auto_slideshow  = window.setTimeout(change_slideshow, slideshow_time);
	});

	$(window).resize(function(){
		var $active = $(".slideshow-item.active");
		set_slideshow_height();
		$active.addClass("active");
	});

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
	$(".slideshow-item").addClass("active");
	var $images = $(".slideshow .slideshow-image");
	var h;
	var highest = 0;
	$images.each(function(){
		h = $(this).height();
		highest = highest < h ? h : highest;
	});

	$(".slideshow-items-wrapper").css('height',  highest + "px");
	$(".slideshow-item").removeClass("active");
}

function change_slideshow_height() {
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
}