(function ($) {

  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
		
		$('.dropdown-toggle').toggle(function(){
			$('.dropdown-menu').show(300);
		}, function(){
			$('.dropdown-menu').hide(300);
		})
		
    }
  };

})(jQuery);