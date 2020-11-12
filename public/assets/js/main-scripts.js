(function ($) {
    "use strict";

    var fn = {
        // Launch Functions
        Launch: function () {
            fn.Test();
        },
        Test: function () {
            
        },
    };

    // Windows.On.Load
    $(window).on("load", function () {});

    // Document.Ready
    $(document).ready(function () {
        fn.Launch();
    });
})(jQuery);
