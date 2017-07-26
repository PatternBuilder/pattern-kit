describe("CTA Band pattern", function () {
    before(function () {
        browser.url("/tests/cta_band");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("cta_band", {
                name: "pattern",
                elem: ".rh-band",
                screenWidth: [320, 1024]
            });
    });

});
