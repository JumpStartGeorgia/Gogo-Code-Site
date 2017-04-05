

$(window).resize(function(){
    update_on_devices(false);
});

function update_on_devices(first) {
	var background_change = $('.background-change');
	if(is_touch_device() || $(window).width() < 1800 || $(window).height() < 900){
		if(first || !background_change.hasClass('scroll-background')) {
			background_change.addClass('scroll-background');
			skrollr.init().destroy();
		}
	} else {
		if(first || background_change.hasClass('scroll-background')) {
			skrollr.init({
				forceHeight: false
			});
			background_change.removeClass('scroll-background');
		}
	}
}

update_on_devices(true);

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

