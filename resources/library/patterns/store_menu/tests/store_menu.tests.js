describe("Store menu pattern", function() {
	before(function() {
		browser.url("/tests/store_menu");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("store_menu", {
			  	name: "pattern",
			  	elem: "body",
			  	screenWidth: [1024]
			});
	});

});
