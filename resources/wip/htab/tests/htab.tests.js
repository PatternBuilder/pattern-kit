describe("Htab Pattern", function () {
    before(function () {
        browser.url("/tests/htab");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("htab", {
                name: "pattern",
                elem: "body",
                screenWidth: [800]
            });
    });

});
