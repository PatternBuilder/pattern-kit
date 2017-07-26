describe("Social links subpattern", function() {
	before(function() {
		browser.url("/tests/social_links");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("social_links", {
			  	name: "sub_pattern",
			  	elem: "body",
			  	screenWidth: [600]
			});
	});

});
