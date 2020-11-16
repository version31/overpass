(function ($) {
    "use strict";

    var fn = {
        // Launch Functions
        Launch: function () {
            fn.Test();
            fn.Slider();
        },
        Test: function () {},
        Slider: function () {
            var title = ["Marcus A.", "Marcus B.", "Marcus C."];
            var subtitle = ["Top Rated Sales Expert", "Top Rated Customer Support Rep", "Top Rated Customer Support Rep"];
            var mySwiper = new Swiper(".el-swiper-hero-1", {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                slidesPerView: 1,
                pagination: {
                    el: ".el-slider-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<div class="el-slider-dots-item ' + className + '"><p class="title"><span>' + title[index] + "</span><span>" + subtitle[index] + '</span></p><span class="icon"><svg data-index="' + index + '" viewBox="0 0 14 14" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="2.5" class="chip"></circle><circle fill="none" stroke-width="2" stroke-miterlimit="10" cx="7" cy="7" r="6" class="progress-1"></circle><circle fill="none" stroke-width="2" stroke-miterlimit="10" cx="7" cy="7" r="6" class="progress-2"></circle></svg></span></div>';
                    },
                },
                navigation: {
                    prevEl: ".el-slider-prev",
                    nextEl: ".el-slider-next",
                },
            });

            var mySwiper = new Swiper(".el-swiper-quotes", {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                slidesPerView: 1,
                navigation: {
                    prevEl: ".el-slider-prev",
                    nextEl: ".el-slider-next",
                },
                pagination: {
                    el: ".el-slider-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<div class="el-slider-dots-item ' + className + '"><div className="author-avatar"><img src="assets/images/people/1-' + (index + 1) + '.jpg"></div><span class="icon"><svg data-index="' + index + '" viewBox="0 0 14 14" width="105" height="105" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="2.5" class="chip"></circle><circle fill="none" stroke-width=".3" stroke-miterlimit="10" cx="7" cy="7" r="6" class="progress-1"></circle><circle fill="none" stroke-width=".3" stroke-miterlimit="10" cx="7" cy="7" r="6" class="progress-2"></circle></svg></span></div>';
                    },
                },
            });
            var mySwiper = new Swiper(".el-swiper-portfolio-3", {
                loop: false,
                navigation: {
                    nextEl: ".el-slider-next",
                    prevEl: ".el-slider-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 12,
                    },
                    576: {
                        slidesPerView: 1.5,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 18,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                    },
                    1200: {
                        loop: true,
                        spaceBetween: 20,
                        slidesPerView: 2.01,
                        // centeredSlides: true,
                    },
                },
            });
        },
    };

    // Windows.On.Load
    $(window).on("load", function () {});

    // Document.Ready
    $(document).ready(function () {
        fn.Launch();
    });
})(jQuery);
