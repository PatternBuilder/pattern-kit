
describe("Pricing set subpattern", function() {
	before(function() {
		browser.url("/tests/pricing_set");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("pricing_set", {
                name: "sub_pattern",
                elem: "body",
                screenWidth: [320]
			});
	});

});
