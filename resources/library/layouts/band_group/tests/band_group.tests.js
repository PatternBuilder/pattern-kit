var expect = require("chai").expect;

describe("Band Group Layout", function () {
    before(function () {
        browser.url("/tests/band_group");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("band_group", {
                name: "layout",
                elem: ".rh-band-group",
                screenWidth: [600]
            });
    });

    it("should have custom class, id and uniqueId", function () {
        return browser
            .getAttribute(".rh-band-group", "class").then(function (attr) {
                expect(attr).to.include("foo bar baz");
            })
            .getAttribute(".rh-band-group", "id").then(function (attr) {
                expect(attr).to.include("customID");
            })
            .getAttribute(".rh-band-group", "data-rh-unique-id").then(function (attr) {
                expect(attr).to.include("1234");
            });
    });

});
