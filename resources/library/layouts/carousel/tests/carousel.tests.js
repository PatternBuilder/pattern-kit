var expect = require("chai").expect;

describe("Carousel layout", function () {
    before(function () {
        browser.url("/tests/carousel");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("carousel", {
                name: "layout",
                elem: ".rh-carousel",
                screenWidth: [1000]
            })
            .click(".rh-carousel-next")
            .compareScreen("carousel_2", {
                name: "layout",
                elem: ".rh-carousel",
                screenWidth: [1000]
            });
    });

    it("should not have navigation when there is only 1 slide", function () {
        return browser
            .url("/tests/carousel/1")
            .isVisible(".rh-carousel-prev").then(function (isVisible) {
                expect(isVisible).to.be.false;
            });
    });

    it("should not have slide padding when there is only 1 slide", function () {
        return browser
            .getCssProperty(".rh-carousel-slide-body", "padding-left").then(function (padding) {
                expect(padding.value).to.equal("0px");
            });
    });

});
