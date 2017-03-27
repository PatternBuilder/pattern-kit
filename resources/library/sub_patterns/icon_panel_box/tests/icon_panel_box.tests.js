describe("Icon Panel Box sub_pattern", function () {
    before(function () {
        browser.url("/tests/icon_panel_box");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("icon_panel_box", {
                name: "sub_pattern",
                elem: "body",
                screenWidth: [320, 800, 1024]
            });
    });

});
