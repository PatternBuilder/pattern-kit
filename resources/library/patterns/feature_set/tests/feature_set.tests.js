describe("Feature Set pattern", function () {
    before(function () {
        browser.url("/tests/feature_set");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("feature_set", {
                name: "pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
