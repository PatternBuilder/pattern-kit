describe("Featured Success Story Pattern", function () {
    before(function () {
        browser.url("/tests/featured_success_story");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("featured_success_story", {
                name: "pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
