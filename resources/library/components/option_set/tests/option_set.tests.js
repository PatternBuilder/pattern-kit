var expect = require("chai").expect;

describe("Option set component", function() {
	before(function() {
		browser.url("/tests/option_set");
		return browser;
	});

	it("should look like baseline", function() {
		return browser
			.compareScreen("option_set", {
			  	name: "component",
			  	elem: ".rh-option-set--component",
			  	screenWidth: [600]
			});
	});

	it("should have disabled attribute on input", function() {
		return browser
			.url("/tests/option_set/1")
			.getAttribute("#resilient", "disabled").then(function(attr) {
				expect(attr).to.equal("true");
			});
	});

    it("should have checkboxes when multi-select is chosen", function() {
        return browser
            .getAttribute("#smart", "type").then(function(attr) {
                expect(attr).to.equal("checkbox");
            });
    });

    it("should have custom name on inputs", function() {
        return browser
            .url("/tests/option_set/2")
            .getAttribute("#resilient", "name").then(function(attr) {
                expect(attr).to.equal("custom-id");
            });
    });

});
