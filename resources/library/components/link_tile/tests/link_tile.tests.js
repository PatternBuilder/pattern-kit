describe("Link Tile Component", function () {
    before(function () {
        browser.url("/tests/link_tile");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("link_tile", {
                name: "component",
                elem: ".rh-link-tile--component",
                screenWidth: [190, 600]
            });
    });

    it("should be left aligned", function () {
        return browser
            .execute(function () {
                $(".rh-link-tile--component").attr("data-rh-align", "left");
            })
            .compareScreen("link_tile-left-aligned", {
                name: "component",
                elem: ".rh-link-tile--component",
                screenWidth: [600]
            });
    });

    it("should be right aligned", function () {
        return browser
            .execute(function () {
                $(".rh-link-tile--component").attr("data-rh-align", "right");
            })
            .compareScreen("link_tile-right-aligned", {
                name: "component",
                elem: ".rh-link-tile--component",
                screenWidth: [600]
            });
    });

    it("should be center aligned", function () {
        return browser
            .execute(function () {
                $(".rh-link-tile--component").attr("data-rh-align", "center");
            })
            .compareScreen("link_tile-center-aligned", {
                name: "component",
                elem: ".rh-link-tile--component",
                screenWidth: [600]
            });
    });

});
