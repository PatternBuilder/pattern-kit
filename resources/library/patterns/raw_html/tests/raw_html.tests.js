describe("Raw HTML Pattern", function () {
    before(function () {
        browser.url("/tests/raw_html");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("raw_html", {
                name: "pattern",
                elem: "body",
                screenWidth: [800]
            });
    });

});
