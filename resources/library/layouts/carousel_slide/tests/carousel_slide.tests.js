describe("Carousel Slide layout", function () {
    before(function () {
        browser.url("/tests/carousel_slide");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("carousel_slide", {
                name: "layout",
                elem: ".rh-carousel-slide",
                screenWidth: [500, 1000]
            });
    });

    it("should look like alternate", function () {
        return browser
            .url("/tests/carousel_slide/1")
            .compareScreen("carousel_slide_alt", {
                name: "layout",
                elem: ".rh-carousel-slide",
                screenWidth: [1000]
            });
    });

});
