(function($) {
	$(document).on('facetwp-loaded', function() {
		$('.facetwp-facet').each(function() {			
			var $facet = $(this);
			if(!$facet.hasClass('facetwp-type-pager')) {
				var facet_name = $facet.attr('data-name');
				if(FWP.settings.num_choices[facet_name] > 0) {
					var facet_label = FWP.settings.labels[facet_name];
					if ($facet.closest('.facet-wrap').length < 1 && $facet.closest('.facetwp-flyout').length < 1) {
						$facet.wrap('<div class="facet-wrap"></div>');
						$facet.before('<h3 class="facet-label">' + facet_label + '</h3>');
					}
				}
			}
		});
	});
})(jQuery);