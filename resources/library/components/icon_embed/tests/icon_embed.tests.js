describe("Icon Embed component", function () {
    before(function () {
        browser.url("/tests/icon_embed");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("icon_embed", {
                name: "component",
                elem: ".rh-icon-embed",
                screenWidth: [600]
            });
    });

});
