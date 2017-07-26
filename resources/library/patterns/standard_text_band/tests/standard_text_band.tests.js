var expect = require("chai").expect;

describe("Standard text band pattern", function () {
    before(function () {
        browser.url("/tests/standard_text_band");
        return browser;
    });

    it("should look like standard text pattern baseline #1", function () {
        return browser
            .compareScreen("standard_text_band", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

    it("should have gray background when gray is passed into background config", function () {
        return browser
            .url("/tests/standard_text_band/1")
            .getCssProperty(".rh-band", "background-color").then(function (bg) {
                expect(bg.value).to.equal("rgba(240,240,240,1)");
            });
    });

    it("should have cta secondary when secondary is passed into type", function () {
        return browser
            .getAttribute(".rh-cta-link", "data-rh-cta-type").then(function (content) {
                expect(content).to.equal("secondary");
            });
    });

});
