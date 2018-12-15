(function ($) {
    'use strict';
    $(document).ready(function () {
        //logo-slider
        var swiper = new Swiper('.logo-slider', {
            slidesPerView: 4,
            spaceBetween: 40,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        });

        //our team slider
        var swiper = new Swiper('.swiper-our-team', {
            slidesPerView: 3,
            spaceBetween: 0,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        });


        //global slider
        var swiper = new Swiper('.global-slider', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        //catogry-filter

        // Params
        var sliderSelector = '.swiper-bzniss_analysis',
            options = {
                init: false,
                loop: true,
                speed: 800,
                slidesPerView: 3,
                // spaceBetween: 10,
                centeredSlides: true,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 330,
                    modifier: 1,
                    slideShadows: true,
                },
                grabCursor: true,
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1180: {
                        slidesPerView: 2
                    },
                    1023: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                },
                // Events
                on: {
                    imagesReady: function () {
                        this.el.classList.remove('loading');
                    }
                }
            };
        var mySwiper = new Swiper(sliderSelector, options);
		try {
				// Initialize slider
        mySwiper.init();
		} catch(e) {}

		//Scroll to Top =
		$(window).on("scroll", function() {
            if ($(this).scrollTop() >= 50) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
		

        $('#return-to-top').on("click", function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });

		//our-team 2	
        var swiper = new Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            // autoHeight: true,
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            }
        });

        // page-loader js
		$('#page-anim-preloader').delay('10').fadeOut(2000);
		setTimeout(page_anim_remove_preloader, '11000');

		function page_anim_remove_preloader() {
			$('#page-anim-preloader').remove();
		}

        //gallery-animate-grid
		/*isotop-script*/
		$(window).on("load", function() {
			var $container = $('.gallary-thumbs');
			try {
				$container.isotope({
					filter: '*',
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
			} catch(e) {}
			$('.categories').on("click", 'a', function() {
				$('.categories .active').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 750,
							easing: 'linear',
							queue: false
						}
					});
				} catch(e) {}
				return false;
			});
		});
		/*Scroll to Top*/

		// progress-bar
        var delay = 500;
        $(".progress-bar").each(function (i) {
            $(this).delay(delay * i).animate({width: $(this).attr('aria-valuenow') + '%'}, delay);

            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: delay,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + '%');
                }
            });
        });

        // testimonials
        var swiper = new Swiper('.swiper-testimonials', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

		// home-slider
        var mainSliderSelector = '.main-slider',
            navSliderSelector = '.nav-slider',
            interleaveOffset = 0.5;

        var mainSliderOptions = {
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000
            },
            loopAdditionalSlides: 10,
            grabCursor: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init: function () {
                    this.autoplay.stop();
                },
                imagesReady: function () {
                    this.el.classList.remove('loading');
                    this.autoplay.start();
                },
                slideChangeTransitionEnd: function () {
                    var swiper = this,
                        captions = swiper.el.querySelectorAll('.caption');
                    for (var i = 0; i < captions.length; ++i) {
                        captions[i].classList.remove('show');
                    }
                    swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
                },
                progress: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress,
                            innerOffset = swiper.width * interleaveOffset,
                            innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                    }
                },
                touchStart: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function (speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                            speed + "ms";
                    }
                }
            }
        };
        var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

		// Navigation Slider
        var navSliderOptions = {
            loop: true,
            loopAdditionalSlides: 10,
            speed: 1000,
            spaceBetween: 0,
            slidesPerView: 3,
            centeredSlides: true,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            direction: 'horizontal',
            on: {
                imagesReady: function () {
                    this.el.classList.remove('loading');
                },
                click: function () {
                    mainSlider.autoplay.stop();
                }
            }
        };
        var navSlider = new Swiper(navSliderSelector, navSliderOptions);

		// Matching sliders
        try {
            mainSlider.controller.control = navSlider;
            navSlider.controller.control = mainSlider;
        }
        catch (err) {
        }

        $('.counter-count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

		$('[data-toggle="tooltip"]').tooltip();
		$('[data-toggle="popover"]').popover();

    });
}(jQuery));