describe("Option set group sub_pattern", function() {
	before(function() {
		browser.url("/tests/option_group");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("option_group", {
			  	name: "sub_pattern",
			  	elem: "body",
			  	screenWidth: [800]
			});
	});

});
