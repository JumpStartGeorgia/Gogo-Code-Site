// turbolinks addthis
var initAdthis;
var addthis_id = "ra-58b804debf61ac35";

initAdthis = function(){
    $.getScript("https://s7.addthis.com/js/300/addthis_widget.js#pubid=" + addthis_id, function(){
      addthis.toolbox(".addthis_toolbox");
    });
  
};

(function(){
    $(document).ready( function() {
      initAdthis();
    });
})();