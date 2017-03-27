describe("Image Embed Component", function () {
    before(function () {
        browser.url("/tests/image_embed");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("image_embed", {
                name: "component",
                elem: ".rh-image-embed--component",
                screenWidth: [600]
            });
    });


    it("should turn color when hovered", function () {
        return browser
            .url("/tests/image_embed/1")
            .moveToObject(".rh-image-embed-img")
            .timeoutsImplicitWait(250)
            .compareScreen("image_embed_bw-color-hovered", {
                name: "component",
                elem: ".rh-image-embed--component",
                screenWidth: [600]
            });
    });

    it("should shrink when layout changed to reduced", function () {
        return browser
            .execute(function () {
                $(".rh-image-embed--component").attr("data-rh-align", "reduced");
            })
            .compareScreen("image_embed_reduced", {
                name: "component",
                elem: ".rh-image-embed--component",
                screenWidth: [600]
            });
    });

    it("should float left when layout changed to left", function () {
        return browser
            .execute(function () {
                $(".rh-image-embed--component").attr("data-rh-align", "left");
            })
            .compareScreen("image_embed_left", {
                name: "component",
                elem: ".rh-image-embed--component",
                screenWidth: [600]
            });
    });

    it("should float right when layout changed to right", function () {
        return browser
            .execute(function () {
                $(".rh-image-embed--component").attr("data-rh-align", "right");
            })
            .compareScreen("image_embed_right", {
                name: "component",
                elem: ".rh-image-embed--component",
                screenWidth: [600]
            });
    });

});
