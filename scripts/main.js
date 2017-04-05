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

