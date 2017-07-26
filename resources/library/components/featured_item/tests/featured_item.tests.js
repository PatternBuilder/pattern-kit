describe("Featured Item Component", function () {
    before(function () {
        browser.url("/tests/featured_item");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("featured_item", {
                name: "component",
                elem: ".rh-featured-item--component",
                screenWidth: [400, 1200]
            });
    });

});
