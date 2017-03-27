describe("Image Box Subpattern", function () {
    before(function () {
        browser.url("/tests/video_box");
        return browser;
    });

    it("should look like Card with copy and cta", function () {
        return browser
            .compareScreen("video_box_0", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

    it("should look like Dark Card with copy", function () {
        return browser
            .url("/tests/video_box/1")
            .compareScreen("video_box_1", {
                name: "pattern",
                elem: "body",
                screenWidth: [500]
            });
    });

    it("Group with cta", function () {
        return browser
            .url("/tests/video_box/2")
            .compareScreen("video_box_2", {
                name: "pattern",
                elem: "body",
                screenWidth: [300]
            });
    });

});
