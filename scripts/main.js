// Vanilla JavaScript solution based on this article:
// https://www.jamestease.co.uk/blether/add-remove-or-toggle-classes-using-vanilla-javascript

var gogoCode = (function() {
  gogoCode = {};

  gogoCode.setupMobileNavButton = function() {
    document.querySelector('.js-toggle-navigation').addEventListener('click', function(e) {
      e.preventDefault();

      [].map.call(document.querySelectorAll('.js-act-as-navigation'), function(el) {
        el.classList.toggle('is-hidden-on-mobile');
      });
    });
  }

  return gogoCode;
  
})();

gogoCode.setupMobileNavButton();

(function() {
  if($('.popup').length > 0) {
    $('.popup').fancybox({
          openEffect  : 'none',
          closeEffect : 'none',
          helpers : {
              media : {}
          }
    });
  }
})();


var update_on_scrolled = function() {
  var scrolled_class = 'scrolled';
  var header = $(".header");
  var header_height = header.height();
  var has_scrolled_class = header.hasClass(scrolled_class);
  var scrolled_height = $(window).scrollTop();

  if( scrolled_height > header_height && !has_scrolled_class) {
    header.addClass(scrolled_class);
  }
  else if (scrolled_height <= header_height && has_scrolled_class) {
    header.removeClass(scrolled_class);
  }

}

var check_scrolled = function() {
  $(document).ready(function(){
    update_on_scrolled();
  });

  $(window).scroll(function(){
    update_on_scrolled();
  });
}

check_scrolled();
