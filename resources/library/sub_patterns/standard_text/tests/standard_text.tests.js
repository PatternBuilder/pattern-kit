describe("Standard Text pattern", function () {
    before(function () {
        browser.url("/tests/standard_text");
        return browser;
    });

    it("should look like baseline card", function () {
        return browser
            .compareScreen("standard_text", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });
    it("should look like baseline centered group", function () {
        return browser
            .url("/tests/standard_text/1")
            .compareScreen("standard_text_group", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });
    it("should look like baseline right aligned dark card", function () {
        return browser
            .url("/tests/standard_text/2")
            .compareScreen("standard_text_card_right", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });


});
