describe("Menu column subpattern", function () {
    before(function () {
        browser.url("/tests/menu_column");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("menu_column", {
                name: "sub_pattern",
                elem: "body",
                screenWidth: [600]
            });
    });
});
