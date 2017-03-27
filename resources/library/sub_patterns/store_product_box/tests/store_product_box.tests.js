describe("Store product card subpattern", function() {
	before(function() {
		browser.url("/tests/store_product_box");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("store_product_box", {
			  	name: "sub_pattern",
			  	elem: "body",
			  	screenWidth: [320]
			});
	});

});
