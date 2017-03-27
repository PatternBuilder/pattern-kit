describe("Logo Wall Pattern", function () {
    before(function () {
        browser.url("/tests/logo_wall");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("logo_wall", {
                name: "pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
