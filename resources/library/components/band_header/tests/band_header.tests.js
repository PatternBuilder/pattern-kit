var expect = require("chai").expect;

describe("Band Header Component", function () {
    before(function () {
        browser.url("/tests/band_header");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("band_header", {
                name: "component",
                elem: ".rh-band-header--component",
                screenWidth: [600]
            });
    });

    it("should look like baseline on hover", function () {
        return browser
            .moveToObject(".rh-band-header-hash")
            .compareScreen("band_header_hash", {
                name: "component",
                elem: ".rh-band-header--component",
                screenWidth: [600]
            });
    });

    it("should look like hero baseline", function () {
        return browser
            .url("/tests/band_header/7")
            .compareScreen("band_header", {
                name: "component",
                elem: ".rh-band-header--component",
                screenWidth: [600]
            });
    });

    it("should have correct tags for primary-standard", function () {
        return browser
            .url("/tests/band_header/1")
            .getTagName(".rh-band-header-title").then(function (tagName) {
                expect(tagName).to.equal("h1");
            })
            .getTagName(".rh-band-header-headline").then(function (tagName) {
                expect(tagName).to.equal("h2");
            });
    });

    it("should have correct tags for primary-title", function () {
        return browser
            .url("/tests/band_header/2")
            .getTagName(".rh-band-header-title").then(function (tagName) {
                expect(tagName).to.equal("h1");
            })
            .getTagName(".rh-band-header-headline").then(function (tagName) {
                expect(tagName).to.equal("p");
            });
    });

    it("should have correct tags for primary-headline", function () {
        return browser
            .url("/tests/band_header/3")
            .getTagName(".rh-band-header-title").then(function (tagName) {
                expect(tagName).to.equal("p");
            })
            .getTagName(".rh-band-header-headline").then(function (tagName) {
                expect(tagName).to.equal("h1");
            });
    });

    it("should have correct tags for secondary-standard", function () {
        return browser
            .url("/tests/band_header/4")
            .getTagName(".rh-band-header-title").then(function (tagName) {
                expect(tagName).to.equal("h2");
            })
            .getTagName(".rh-band-header-headline").then(function (tagName) {
                expect(tagName).to.equal("h3");
            });
    });

    it("should have correct tags for secondary-title", function () {
        return browser
            .url("/tests/band_header/5")
            .getTagName(".rh-band-header-title").then(function (tagName) {
                expect(tagName).to.equal("h2");
            })
            .getTagName(".rh-band-header-headline").then(function (tagName) {
                expect(tagName).to.equal("p");
            });
    });

    it("should have correct tags for secondary-headline", function () {
        return browser
            .url("/tests/band_header/6")
            .getTagName(".rh-band-header-title").then(function (tagName) {
                expect(tagName).to.equal("p");
            })
            .getTagName(".rh-band-header-headline").then(function (tagName) {
                expect(tagName).to.equal("h2");
            });
    });


});
