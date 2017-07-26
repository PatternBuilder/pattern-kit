/*
 The test scenario
 */

describe("Promo component", function () {
    before(function () {
        browser.url("/tests/promo");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("promo", {
                name: "component",
                elem: ".rh-promo",
                screenWidth: [320, 1000]
            });
    });

});
