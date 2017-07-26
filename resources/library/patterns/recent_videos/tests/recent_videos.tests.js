describe("Recent Videos Pattern", function () {
    before(function () {
        browser.url("/tests/recent_videos");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("recent_videos", {
                name: "pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
