// Modal.js
// Thomas Flyvholm

jQuery(document).ready(function($){
	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_forgot_password = $form_modal.find('#cd-reset-password'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
		$back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
		$main_nav = $('.loginmodal');
		$modal_activator = $('.loginButton');
		$(".forgottenform").hide();

	$modal_activator.on('click', function(event){

		if( $(event.target).is($main_nav) ) {
			$(this).children('ul').toggleClass('is-visible');
		} else {
			$main_nav.children('ul').removeClass('is-visible');
			$form_modal.addClass('is-visible');	
			( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
		}
	});

	$('.cd-user-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
			$form_modal.removeClass('is-visible');
		}	
	});

	// Hide/Show aspects of the loginmodal
	$( ".a" ).click(function() {
		$( ".loginform" ).fadeOut( "slow", function() {
	    	 $(".forgottenform").fadeIn("slow", function(){
	    	 	$( ".b" ).click(function() {
	    	 		$(".forgottenform").fadeOut("slow", function(){
	    	 			$(".loginform").fadeIn("slow");
	    	 		});
	    	 	});
	    	 });
	  	});
	});
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });

	function login_selected(){
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}

	function forgot_password_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.addClass('is-selected');
	}

	//IE9 placeholder fallback
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});

// Scrolls cursor to end
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	if (this.setSelectionRange) {
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
      		$(this).val($(this).val());
    	}
	});
};