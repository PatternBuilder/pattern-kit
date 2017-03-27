describe("Video Embed Component", function () {
    before(function () {
        browser.url("/tests/video_embed");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("video_embed", {
                name: "component",
                elem: ".rh-video-embed--component",
                screenWidth: [250, 600]
            });
    });

});
