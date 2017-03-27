describe("Pagination Component", function () {
    before(function () {
        browser.url("/tests/pagination");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("pagination", {
                name: "component",
                elem: ".rh-pagination--component",
                screenWidth: [800]
            });
    });

    it("button should change color on hover ", function () {
        return browser
            .moveToObject(".rh-pagination-btn-next")
            .compareScreen("pagination_button-hover", {
                name: "component",
                elem: ".rh-pagination--component",
                screenWidth: [800]
            });
    });

    it("should be left aligned", function () {
        return browser
            .execute(function () {
                $(".rh-pagination--component").attr("data-rh-align", "left");
            })
            .compareScreen("pagination-left-aligned", {
                name: "component",
                elem: ".rh-pagination--component",
                screenWidth: [800]
            });
    });

    it("should be right aligned", function () {
        return browser
            .execute(function () {
                $(".rh-pagination--component").attr("data-rh-align", "right");
            })
            .compareScreen("pagination-right-aligned", {
                name: "component",
                elem: ".rh-pagination--component",
                screenWidth: [800]
            });
    });

    it("should be center aligned", function () {
        return browser
            .execute(function () {
                $(".rh-pagination--component").attr("data-rh-align", "center");
            })
            .compareScreen("pagination-center-aligned", {
                name: "component",
                elem: ".rh-pagination--component",
                screenWidth: [800]
            });
    });


});
