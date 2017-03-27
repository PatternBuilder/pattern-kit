describe("Card Layout", function () {
    before(function () {
        browser.url("/tests/card");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("card", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [250, 600]
            });
    });


    it("should look like baseline with light theme", function () {
        return browser
            .execute(function () {
                $(".rh-card--layout").attr("data-rh-theme", "light");
            })
            .compareScreen("card_light", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [600]
            });
    });

    it("should look like baseline with dark theme", function () {
        return browser
            .execute(function () {
                $(".rh-card--layout").attr("data-rh-theme", "dark");
            })
            .compareScreen("card_dark", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [600]
            });
    });

    it("should look like baseline with gray theme", function () {
        return browser
            .execute(function () {
                $(".rh-card--layout").attr("data-rh-theme", "gray");
            })
            .compareScreen("card_gray", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [600]
            });
    });

    it("should look like baseline with tall card", function () {
        return browser
            .execute(function () {
                $(".rh-card--layout").css("min-height", "700px");
            })
            .compareScreen("card_tall", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [600]
            });
    });

    it("should look like baseline with justified card", function () {
        return browser
            .execute(function () {
                $(".rh-card--layout").attr("data-rh-justify", "justify");
            })
            .compareScreen("card_justify", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [600]
            });
    });

    it("should look like baseline with centered card", function () {
        return browser
            .execute(function () {
                $(".rh-card--layout").attr("data-rh-justify", "center");
            })
            .compareScreen("card_center", {
                name: "layout",
                elem: ".rh-card--layout",
                screenWidth: [600]
            });
    });
});
