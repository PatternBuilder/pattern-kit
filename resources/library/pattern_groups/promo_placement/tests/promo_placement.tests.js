describe("Promo Placement pattern", function () {
    before(function () {
        browser.url("/tests/promo_placement")
            .moveToObject(".rh-carousel")
            .timeoutsImplicitWait(250);
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("promo_placement", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

});
