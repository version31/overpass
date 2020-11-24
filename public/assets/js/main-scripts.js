(function ($) {
    "use strict";

    var fn = {
        // Launch Functions
        Launch: function () {
            fn.Test();
            fn.Slider();
            fn.Sidenav();
            fn.Paroller();
            fn.DataFilter();
        },
        Test: function () {},
        Slider: function () {
            var title = ["Marcus A.", "Marcus B.", "Marcus C."];
            var subtitle = ["Top Rated Sales Expert", "Top Rated Sales Expert", "Top Rated Sales Expert"];
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
                        return '<div class="el-slider-dots-item ' + className + '"><div class="author-avatar"><img src="assets/images/people/1-' + (index + 1) + '.jpg"></div><span class="icon"><svg data-index="' + index + '" viewBox="0 0 14 14" width="120" height="120" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="2.5" class="chip"></circle><circle fill="none" stroke-width=".3" stroke-miterlimit="10" cx="7" cy="7" r="6" class="progress-1"></circle><circle fill="none" stroke-width=".3" stroke-miterlimit="10" cx="7" cy="7" r="6" class="progress-2"></circle></svg></span></div>';
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
            var mySwiper = new Swiper(".el-swiper-portfolio-4", {
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
                        loop: false,
                        spaceBetween: 20,
                        slidesPerView: 3.3,
                        // centeredSlides: true,
                    },
                },
            });
            var mySwiper = new Swiper(".el-swiper-portfolio-5", {
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
                        loop: false,
                        spaceBetween: 20,
                        slidesPerView: 3.3,
                        // centeredSlides: true,
                    },
                },
            });
        },
        Sidenav: function () {
            var button = $(".button-display-sidenav");
            var sidenav = $(".app-sidenav");
            button.on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("active");
                sidenav.toggleClass("active");
            });
            sidenav.on("click", ".button-close-sidenav, .sidenav-close", function () {
                sidenav.removeClass("active");
            });
        },
        Paroller: function () {
            $(".el-heading-2 .el-big-title").paroller({ factor: 0.5, factorXs: 0.2, type: "foreground", direction: "horizontal" });
            $(".section-hero .el-item-image").paroller({ factor: -0.1, factorXs: 0, type: "foreground" });
        },
        DataFilter: function () {
            var className = "active";
            var link = $(".el-data-filters .el-data-filters-links ul");

            link.on("click", "li", function () {
                var links = $(this).siblings("li");
                var filter = $(this).attr("data-filter");
                var items = $(this).parent().parent().siblings(".el-data-filters-content").children("ul").children("li");

                console.log($(this).parent().parent());

                links.removeClass(className);
                $(this).addClass(className);

                if (filter == "all") {
                    items.show(600);
                } else {
                    items.hide();
                    $("li[data-filter=" + filter + "]").show(600);
                }
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
