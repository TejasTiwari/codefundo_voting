$(document).ready(function() {
    "use-strict";

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    /*Url jumping*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Owl Carousel
    $(document).ready(function() {

        $("#owl-pilot").owlCarousel({

            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
	    autoPlay: 5000,
	    autoHeight: false

            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

	$("#owl-news").owlCarousel({

            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: 5000,
            autoHeight: false

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

    });

    // Animate and WOW Animation
    var wow = new WOW(
        {
            offset: 50,
            mobile: false,
            live: true
        }
    );
    wow.init();

    // Prettyphoto Installation
    $(document).ready(function(){
        $("a[class^='prettyPhoto']").prettyPhoto();
    });

    // Contact Form
    $("#contactForm").submit(function(event) 
     {
         /* stop form from submitting normally */
         event.preventDefault();

         /* get some values from elements on the page: */
         var $form = $( this ),
             $submit = $form.find( 'button[type="submit"]' ),
             full_name_value = $form.find( 'input[name="full_name"]' ).val(),
             email_value = $form.find( 'input[name="email"]' ).val(),
             telephone_value = $form.find( 'input[name="telephone"]' ).val(),
             subject_value = $form.find( 'input[name="subject"]' ).val(),
             comments_value = $form.find( 'textarea[name="comments"]' ).val(),
             url = $form.attr('action');

         /* Send the data using post */
         var posting = $.post( url, { 
                           full_name: full_name_value, 
                           email: email_value, 
                           telephone: telephone_value, 
                           subject: subject_value, 
                           comments: comments_value 
                       });

         posting.done(function( data )
         {
             /* Put the results in a div */
             $( "#contactResponse" ).html(data);
	
             /* Change the button text. */
             $submit.text('Sent, Thank you');

             /* Disable the button. */
             $submit.attr("disabled", true);

	     /* Reload Page */
	     window.setTimeout('location.reload()', 3000);
         });
    });

});
