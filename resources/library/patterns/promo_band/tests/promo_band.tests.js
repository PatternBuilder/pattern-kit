describe("Promo Band pattern", function () {
    before(function () {
        browser.url("/tests/promo_band");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("promo_band", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

});
