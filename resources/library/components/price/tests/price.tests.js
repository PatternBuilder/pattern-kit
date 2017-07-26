describe("Price component", function() {
	before(function() {
		browser.url("/tests/price");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("price", {
			  	name: "component",
			  	elem: ".rh-price",
			  	screenWidth: [250]
			});
	});

});
