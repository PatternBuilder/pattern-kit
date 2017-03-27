var expect = require("chai").expect;

describe("Testimonial Band pattern", function () {
    before(function () {
        browser.url("/tests/testimonial_band");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("testimonial_band", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

    it("should be left-aligned when left is passed into layout", function () {
        return browser
            .url("/tests/testimonial_band/1")
            .getCssProperty(".rh-quote--component", "float").then(function (float) {
                expect(float.value).to.equal("left");
            });
    });

    it("should be light theme when light is passed into theme", function () {
        return browser
            .getCssProperty(".rh-quote-quotation", "color").then(function (color) {
                expect(color.value).to.equal("rgba(37,37,39,1)");
            });
    });

    it("should have a cta primary when cta type primary is selected", function () {
        return browser
            .getAttribute(".rh-cta-link", "data-rh-cta-type").then(function (attr) {
                expect(attr).to.equal("primary");
            });
    });

});
