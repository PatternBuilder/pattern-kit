describe("Customer Success Component", function () {
    before(function () {
        browser.url("/tests/customer_success");
        return browser;
    });

    it("should look like baseline", function () {
        return browser
            .compareScreen("customer_success", {
                name: "component",
                elem: ".rh-customer-success--component",
                screenWidth: [600]
            });
    });

});
