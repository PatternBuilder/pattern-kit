describe("Image Box Subpattern", function () {
    before(function () {
        browser.url("/tests/image_box");
        return browser;
    });

    it("should look like Card with copy and cta", function () {
        return browser
            .compareScreen("image_box_0", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

    it("should look like Card with only copy", function () {
        return browser
            .url("/tests/image_box/1")
            .compareScreen("image_box_1", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

    it("should look like Test bleed in group", function () {
        return browser
            .url("/tests/image_box/2")
            .compareScreen("image_box_2", {
                name: "pattern",
                elem: "body",
                screenWidth: [300]
            });
    });

    it("should look like Group with left Aligned Image", function () {
        return browser
            .url("/tests/image_box/3")
            .compareScreen("image_box_3", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

});
