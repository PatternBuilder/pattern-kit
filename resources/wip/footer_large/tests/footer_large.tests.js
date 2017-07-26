describe("footer_large pattern", function() {
	before(function() {
		browser.url("/tests/footer_large");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("footer_large", {
			  	name: "pattern",
			  	elem: "body",
			  	screenWidth: [320, 800, 1024]
			});
	});

});
