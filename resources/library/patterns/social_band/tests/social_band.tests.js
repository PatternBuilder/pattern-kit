describe("Social Band pattern", function () {
    before(function () {
        browser.url("/tests/social_band");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("social_band", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

});
