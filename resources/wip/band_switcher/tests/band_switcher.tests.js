describe("Band Switcher Layout", function () {
    before(function () {
        browser.url("/tests/band_switcher");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("band_switcher", {
                name: "band_switcher",
                elem: ".rh-band-switcher",
                screenWidth: [600]
            });
    });

    it("should switch tabs on URL change", function () {
        return browser
            .url("/tests/band_switcher#tab.abc.1")
            .compareScreen("band_switcher-second-tab", {
                name: "band_switcher",
                elem: ".rh-band-switcher",
                screenWidth: [600]
            });
    });

});
