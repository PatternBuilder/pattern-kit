describe("Group Layout", function () {
    before(function () {
        browser.url("/tests/group");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("group", {
                name: "layout",
                elem: ".rh-group--layout",
                screenWidth: [800]
            });
    });
});
