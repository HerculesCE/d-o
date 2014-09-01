// Modal.js for DOE Site
// Thomas Flyvholm, 2014

jQuery(document).ready(function($) {
    // USABLE VARIABLES
    var $form_modal = $('.cd-user-modal'),
        $reply_modal = $('.cd-reply-modal'),
        $new_post_modal = $('.cd-new-post-modal'),
        $new_news_modal = $('.cd-news-modal'),
        $file_link_modal = $('.cd-file-link-modal');
    $new_fucking_modal = $('.cd-category-modal');
    $form_login = $form_modal.find('#cd-login'),
    $form_signup = $form_modal.find('#cd-signup'),
    $form_forgot_password = $form_modal.find('#cd-reset-password'),
    $form_modal_tab = $('.cd-switcher'),
    $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
    $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
    $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
    $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
    $main_nav = $('.loginmodal');
    $login_modal = $('.loginButton');
    $reply_modal_button = $('.replyComment');
    $file_link_button = $('.fileLink');
    $new_post_button = $('.new-post');
    $new_news_button = $('.new-post-news');
    $new_fucking_button = $('.catAdd');
    $(".forgottenform").hide();
    // ENABLED ONCLICK FUNCTIONS
    // TODO: 	@optimization: Fix a better cancellation of windows
    // TODO: 	@addition: Complete remaining modals (css/js/html)
    // TODO: 	@optimization: Fix a better shift between modal-pages			
    $login_modal.on('click', function(event) {
        if ($(event.target).is($main_nav)) {
            $(this).children('ul').toggleClass('is-visible');
            event.preventDefault();
        } else {
            $main_nav.children('ul').removeClass('is-visible');
            $form_modal.addClass('is-visible');
            event.preventDefault();
            ($(event.target).is('.cd-signup')) ? signup_selected() : login_selected();
        }
    });

    // MIDLERTIDIG MODAL FOR FILER




    // MIDLERTIDIG DONE


    $('.cd-file-link-modal').on('click', function(event) {
        if ($(event.target).is($file_link_modal) || $(event.target).is('.cd-close-form')) {
            $file_link_modal.removeClass('is-visible');
            event.preventDefault();
        }
    });

    $reply_modal_button.on('click', function(event) {
        $reply_modal.addClass('is-visible');
        event.preventDefault();
    });

    $('.cd-reply-modal').on('click', function(event) {
        if ($(event.target).is($reply_modal) || $(event.target).is('.cd-close-form')) {
            $reply_modal.removeClass('is-visible');
            event.preventDefault();
        }
    });

    $new_news_button.on('click', function(event) {
        $new_news_modal.addClass('is-visible');
        event.preventDefault();
    });

    $('.cd-news-modal').on('click', function(event) {
        if ($(event.target).is($new_news_modal) || $(event.target).is('.cd-close-form')) {
            $new_news_modal.removeClass('is-visible');
            event.preventDefault();
        }
    });

    $new_fucking_button.on('click', function(event) {
        $new_fucking_modal.addClass('is-visible');
        event.preventDefault();
    });

    $('.cd-category-modal').on('click', function(event) {
        if ($(event.target).is($new_fucking_modal) || $(event.target).is('.cd-close-form')) {
            $new_fucking_modal.removeClass('is-visible');
            event.preventDefault();
        }
    });

    $new_post_button.on('click', function(event) {
        $new_post_modal.addClass('is-visible');
        event.preventDefault();
    });

    $('.cd-new-post-modal').on('click', function(event) {
        if ($(event.target).is($new_post_modal) || $(event.target).is('.cd-close-form')) {
            $new_post_modal.removeClass('is-visible');
            event.preventDefault();
        }
    });

    $('.cd-user-modal').on('click', function(event) {
        if ($(event.target).is($form_modal) || $(event.target).is('.cd-close-form')) {
            $form_modal.removeClass('is-visible');
            event.preventDefault();
        }
    });
    // HIDE/SHOW SECTIONS (TEMPORARILY DEPRECATED)
    $(".a").click(function() {
        $(".loginform").fadeOut("slow", function() {
            $(".forgottenform").fadeIn("slow", function() {
                $(".b").click(function() {
                    $(".forgottenform").fadeOut("slow", function() {
                        $(".loginform").fadeIn("slow");
                    });
                });
            });
        });
    });
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $form_modal.removeClass('is-visible');
        }
    });

    function login_selected() {
        $form_login.addClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.addClass('selected');
        $tab_signup.removeClass('selected');
    }

    function signup_selected() {
        $form_login.removeClass('is-selected');
        $form_signup.addClass('is-selected');
        $form_forgot_password.removeClass('is-selected');
        $tab_login.removeClass('selected');
        $tab_signup.addClass('selected');
    }

    function forgot_password_selected() {
        $form_login.removeClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_forgot_password.addClass('is-selected');
    }
    //IE9 PLACEHOLDER FALLBACK
    if (!Modernizr.input.placeholder) {
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
// SCROLL CURSOR TO END OF LINE
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