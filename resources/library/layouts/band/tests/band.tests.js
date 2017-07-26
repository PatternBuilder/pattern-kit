var expect = require("chai").expect;


describe("Band Layout", function () {
    before(function () {
        browser.url("/tests/band");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("band", {
                name: "layout",
                elem: ".rh-band",
                screenWidth: [400, 600, 1000]
            });
    });
    it("should have custom class, id and uniqueId", function () {
        return browser
            .getAttribute(".rh-band", "class").then(function (attr) {
                expect(attr).to.include("foo bar baz");
            })
            .getAttribute(".rh-band", "id").then(function (attr) {
                expect(attr).to.include("customID");
            })
            .getAttribute(".rh-band", "data-rh-unique-id").then(function (attr) {
                expect(attr).to.include("1234");
            });
    });
});
