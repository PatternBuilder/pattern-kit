describe("Generic Header Pattern", function () {
    before(function () {
        browser.url("/tests/hero_header");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("hero_header", {
                name: "pattern",
                elem: "body"
            });
    });

});
