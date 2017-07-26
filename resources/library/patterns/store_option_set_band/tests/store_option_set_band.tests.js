describe("Option set band pattern", function() {
	before(function() {
		browser.url("/tests/store_option_set_band");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("store_option_set_band", {
			  	name: "pattern",
			  	elem: "body",
			  	screenWidth: [1024]
			});
	});

});
