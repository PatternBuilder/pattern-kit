//var expect = require("chai").expect;

describe("Footnote component", function () {
    before(function () {
        browser.url("/tests/footnote");
        return browser;
    });

    it("should look like footnote baseline #1", function () {
        return browser
            .compareScreen("footnote", {
                name: "component",
                elem: ".rh-footnote--component",
                screenWidth: [250, 600]
            });
    });

});
