describe("Page pattern", function () {
    before(function () {
        browser.url("/tests/page");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("page", {
                name: "pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
