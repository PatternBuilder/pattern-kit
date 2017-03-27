describe("Htab Nav Component", function () {
    before(function () {
        browser.url("/tests/htab_nav");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("htab_nav", {
                name: "component",
                elem: ".rh-htab-nav",
                screenWidth: [450, 900]
            });
    });

    it("should look like baseline when clicked", function () {
        return browser
            .click("[href='#tab.abc.3']")
            .compareScreen("htab_nav_click", {
                name: "component",
                elem: ".rh-htab-nav",
                screenWidth: [450, 900]
            });
    });

    it("should look like baseline when hovered", function () {
        return browser
            .moveToObject(".rh-htab-nav-tab")
            .compareScreen("htab_nav_hover", {
                name: "component",
                elem: ".rh-htab-nav",
                screenWidth: [900]
            });
    });

});
