describe("Generic Component", function () {
    before(function () {
        browser.url("/tests/generic");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("generic", {
                name: "component",
                elem: ".rh-default--component",
                screenWidth: [600]
            });
    });

});
