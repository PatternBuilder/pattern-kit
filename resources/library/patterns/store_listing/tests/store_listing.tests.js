describe("Store listing pattern", function() {
	before(function() {
		browser.url("/tests/store_listing");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("store_listing", {
			  	name: "pattern",
			  	elem: "body",
			  	screenWidth: [1024]
			});
	});

});
