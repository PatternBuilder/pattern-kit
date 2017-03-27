var expect = require("chai").expect;

describe("Card header component", function() {
	before(function() {
		browser.url("/tests/card_header");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("card_header", {
			  	name: "component",
			  	elem: ".rh-card-header--component",
			  	screenWidth: [600]
			});
	});

    it("should have correct tags for headline no title", function () {
        return browser
            .url("/tests/card_header/1")
            .getTagName(".rh-card-header-headline").then(function (tagName) {
                expect(tagName).to.equal("h3");
            });
    });

    it("should have correct tags for both headline and title", function () {
        return browser
            .url("/tests/card_header/2")
            .getTagName(".rh-card-header-title").then(function (tagName) {
                expect(tagName).to.equal("h3");
            })
            .getTagName(".rh-card-header-headline").then(function (tagName) {
                expect(tagName).to.equal("h4");
            });
    });

});
