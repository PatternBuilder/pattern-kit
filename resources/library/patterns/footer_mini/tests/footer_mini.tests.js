var expect = require("chai").expect;

describe("Universal footer pattern", function () {
    before(function () {
        browser.url("/tests/footer_mini");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("footer_mini", {
                name: "pattern",
                elem: "body",
                screenWidth: [1024]
            });
    });

    it("should have no legal links if missing href", function () {
        return browser
            .url("/tests/footer_mini/1")
            .elements(".rh-footnote-item > *").then(function (footnotes) {
                expect(footnotes.value).to.have.lengthOf(1);
            });
    });

    it("Image containers should not have a link for events without href", function () {
        return browser
            .url("/tests/footer_mini/2")
            .isExisting(".rh-band-footer > *:last-child .rh-image-embed-link").then(function (isExisting) {
                expect(isExisting).to.equal(false);
        });
    });
});
