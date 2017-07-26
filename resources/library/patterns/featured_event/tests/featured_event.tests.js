describe("Featured Event Pattern", function () {
    before(function () {
        browser.url("/tests/featured_event");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("featured_event", {
                name: "pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
