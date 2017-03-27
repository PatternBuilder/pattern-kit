var expect = require("chai").expect;

describe("Custom Band pattern", function () {
    before(function () {
        browser.url("/tests/custom_band");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("custom_band", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

    it("should look like baseline with no sidebar", function () {
        return browser
            .url("/tests/custom_band/1")
            .compareScreen("custom_band_no_sidebar", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

    it("should have headline when no title present", function () {
        return browser
            .isExisting(".rh-band-header-headline").then(function (isExisting) {
                expect(isExisting).to.equal(true);
            });
    });

    it("should have title when no headline present", function () {
        return browser
            .url("/tests/custom_band/2")
            .isExisting(".rh-band-header-title").then(function (isExisting) {
                expect(isExisting).to.equal(true);
            });
    });

    it("should have two asides", function () {
        return browser
            .url("/tests/custom_band/3")
            .elements(".rh-band-aside > *", function (err, res) {
                expect(res.value.length).to.equal(2);
            });
    });

});
