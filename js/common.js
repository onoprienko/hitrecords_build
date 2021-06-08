$(function () {
	var owl = $('.head-slider');
	owl.owlCarousel({
	    margin:20,
	    nav:true,
	    items: 1,
	    loop: true,
	    autoplay: true,
	    autoplayTimeout:10000,
	    onInitialized: startProgressBar,
	    onTranslate: resetProgressBar,
	    onTranslated: startProgressBar
	});

	var color;

	function startProgressBar() {
	  // apply keyframe animation
	  $(".head-slider .loader").css({
	    width: "100%",
	    transition: "width 10000ms"
	  });
	  $('#next').addClass('load');

	  color = $('.owl-item.active .head-img').css('background');
	}

	function resetProgressBar() {
	  $(".head-slider .loader").css({
	    width: 0,
	    transition: "width 0s"
	  });
	  $('#next').removeClass('load');

	  owl.trigger('stop.owl.autoplay');
      owl.trigger('play.owl.autoplay');

	}

	$('.slider-nav .next-slide').click(function() {
    	$('.owl-carousel .owl-nav button.owl-next').click();
	});
	// Or to go to a previous slide
	$('.slider-nav .prev-slide').click(function() {
	    $('.owl-carousel .owl-nav button.owl-prev').click();
	});


	//color = "red";

	$( ".slider-nav>div" ).mouseover(function() {
	  $(this).css({background: color});
	});
	$( ".slider-nav>div" ).mouseleave(function() {
	  $(this).css({background: "#fff"});
	});


});

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});


$(document).ready(function() {
	var cleave = new Cleave('.phone-input', {
	  		prefix: '+38 (',
            delimiters: [')', '-', '-'],
            blocks: [8, 3, 2, 2],
            uppercase: true
	});
});


$(document).ready(function() {
	$('.buy-button').click(function() {
    	audio_title = $(this).parent().find('.audio-title').html();
    	//console.log(audio_title);
    	$('.song-name').html(audio_title);
    	$('.song-name-field').val(audio_title);
    	
	});
});


$(document).ready(function() {


	$('.tag-holder .audio-style a').click(function(event) {
		event.preventDefault();
    	audio_tag = $(this).html();
    	$('.tag-holder .audio-style a').removeClass('active');
    	$(this).addClass('active');
    	 addclass_tag(audio_tag);
	});
	function addclass_tag(audio_tag){
		$( ".audio-holder .audio-item" ).each(function() {
			if($(this).attr('audio-tag').search(audio_tag)=='-1'){
				$(this).removeClass('curent');
			}
			if($(this).attr('audio-tag').search(audio_tag)!='-1'){
				$(this).addClass('curent');
			}
		});
		shiwhide();
	}



	$('.tag-holder .lang-switch__js a').click(function(event) {
		event.preventDefault();
    	audio_lang = $(this).attr('audio_lang');
    	$('.tag-holder .lang-switch__js a').removeClass('active');
    	$(this).addClass('active');
    	addclass_lang(audio_lang);
	});
	function addclass_lang(audio_lang){
		$( ".audio-holder .audio-item" ).each(function() {
			if($(this).attr('audio_lang')!=audio_lang){
				$(this).removeClass('curent_lang');
			}
			if($(this).attr('audio_lang')==audio_lang){
				$(this).addClass('curent_lang');
			}
		});
		shiwhide();
	}



	function shiwhide(){
		$( ".audio-holder .audio-item" ).each(function() {
			if($(this).hasClass('curent') && $(this).hasClass('curent_lang')){
				$(this).slideDown(300);
			}else{
				$(this).slideUp(300);
			}
			
		});
	}



});