describe("Quote Box Subpattern", function () {
    before(function () {
        browser.url("/tests/quote_box");
        return browser;
    });

    it("should look like card baseline", function () {
        return browser
            .compareScreen("quote_box", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

    it("should look like card baseline with dark background", function () {
        return browser
            .url("/tests/quote_box/1")
            .compareScreen("quote_box_dark_card", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

    it("should look like group baseline", function () {
        return browser
            .url("/tests/quote_box/2")
            .compareScreen("quote_box_group", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

});
