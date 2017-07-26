describe("Quantity group sub_pattern", function() {
	before(function() {
		browser.url("/tests/quantity_group");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("quantity_group", {
			  	name: "sub_pattern",
			  	elem: "body",
			  	screenWidth: [800]
			});
	});

});
