var expect = require("chai").expect;

describe("Header band pattern", function() {
	before(function() {
		browser.url("/tests/store_header");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("store_header", {
			  	name: "pattern",
			  	elem: "body"
			});
	});

	it("should have an image", function () {
        return browser
            .isExisting(".rh-image-embed-img").then(function (isExisting) {
                expect(isExisting).to.equal(true);
            });
    });

    it("should have no image", function () {
        return browser
            .url("/tests/store_header/1")
            .isExisting(".rh-image-embed-img").then(function (isExisting) {
                expect(isExisting).to.not.equal(true);
            });
    });

});
