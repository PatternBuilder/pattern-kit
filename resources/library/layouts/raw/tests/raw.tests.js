var expect = require("chai").expect;

describe("Raw Layout", function () {
    before(function () {
        browser.url("/tests/raw");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("raw", {
                name: "layout",
                elem: ".rh-raw",
                screenWidth: [600]
            });
    });

    it("should have custom class, id and uniqueId", function () {
        return browser
            .getAttribute(".rh-raw", "class").then(function (attr) {
                expect(attr).to.include("foo bar baz");
            })
            .getAttribute(".rh-raw", "id").then(function (attr) {
                expect(attr).to.include("customID");
            })
            .getAttribute(".rh-raw", "data-rh-unique-id").then(function (attr) {
                expect(attr).to.include("1234");
            });
    });

});
