jQuery(document).ready(function() {

	var mainMenu = jQuery('.header-container .main-menu').html();
	jQuery('.header-container .main-menu').append('<div class="mobMenu">'+ mainMenu +'</div>');

	
	jQuery('.main-menu ul li').click(function(){
		var tab_id = jQuery(this).attr('data-tab');

		jQuery('.main-menu ul li').removeClass('current');
		jQuery('.tab-content').removeClass('current');

		jQuery(this).addClass('current');
		jQuery("#"+tab_id).addClass('current');
	});


});