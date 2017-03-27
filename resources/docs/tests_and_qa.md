---
title: Tests & QA
---

## Automated tests

### Creating test data

Write test JSON data in tests folder with filename `component.tests.json`. You can either drop in a single object of data or pass in an array like the following:

```
[{
    "label": "Test case 1",
    "data": {
        "name": "my_component",
        ...
    }
    }, {
    "label": "Test case 2",
    "data": {
        "name": "my_component",
        ...
    }
}]
```

When writing test datasets, think about what all the possible variations there are for this element and consider writing tests that surface those different choices.

### Writing tests

```
// cta.test.js
describe("Call-to-action component", function() {
  before(function() {
    browser.url("/tests/cta");
    return browser;
  });

  it("should look like baseline", function() {
    return browser
      .compareScreen("cta", {
          name: "component",
          elem: ".rh-cta-link",
          screenWidth: [600]
      });
  });

  it("should look like baseline with 2nd test case", function() {
    return browser
      .url("/tests/cta/1")
      .compareScreen("cta", {
          name: "component",
          elem: ".rh-cta-link",
          screenWidth: [600]
      });
  });
});
```

1. Make sure your element has a tests folder with a dummy file in it ending with *.tests.js.
2. Update the `describe` block and URL to point to your the element test rendering.  To preview the URL, visit: localhost:5001/tests/<name_of_element>
3. Create `it` statements for each variation and pass unique string into `compareScreen()` function. i.e. cta_hover, cta_alt, cta_foo.
  - Actual `name` value doesn't have to be unique.
  - `elem` is the selector to test
  - The screenWidth of the visual tests should be determined by the type of element and what the standard size is for that object, but *very generally* speaking:
      - components = 600px
      - subpatterns = 800px
      - patterns / layouts = 1200px
4. Use compareScreen very sparingly because it slows down testing considerably.
  - I recommended 1 visual diff (unless schema choices make the UI apply dramatically different styles) and the rest should use the [WebdriverIO library](http://webdriver.io/v3.4/api/property/getCssProperty.html#) with [Mocha](https://mochajs.org/#getting-started) or [Chai](http://chaijs.com/api/bdd/#method_increase) for logic.
  - There are some inconsistencies with the action-based tests on our selenium grid (i.e., moveToObject or click) so use them sparingly and test them thoroughly before committing them to the repo.

### Generating baselines

1. Open a [merge request](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webrh/merge_requests/new?merge_request) for your branch (target branch should be dev).  Use the Git commit template from the [Contributing to WebRH](contributing_to_webrh) page.
2. After the Jenkins build is finished running, run `npm run test_update "<list of elements>"` to generate new baselines.
  - The double quotes should contain a space-separated list with the name of the component/layout/pattern/subpatterns for which you want to update baselines.
3. Visually confirm that the baselines look as expected and contain any changes/updates made on this branch, then add and commit those changes to the repo.
4. Check that the Jenkins build passes after your new baselines were committed.

## QA

### Code review
Code review involves going through an open merge request and looking for any issues in the code that do not match standard coding conventions or could cause issues later down the road.  Be sure to check out the branch, pull it down locally, and run `grunt watcher` to confirm there are no major issues in compilation.

### Branch testing
Branch testing involves importing the pattern into Drupal and going through the admin interface to ensure the directions are clear and that all the fields function as expected.  Save your page and check that the templates render correctly.  The sandbox build and import can be done by either the branch tester or the code-creator depending on time and should be communicated in the story or the etherpad.

### Cross-browser testing
This is the template we use for cross-browser testing:
https://docs.google.com/a/redhat.com/spreadsheets/d/1luriPYswlGcKdcbKhQfW6kxIgj7tjNjnBVP7yZ4onwA/edit?usp=sharing

Copy this template and add the user story to the name of the new file.  Put the link in the etherpad for this user story and flag any major issues in the etherpad as well to ensure visibility.

Screenshots or it didn't happen! ;)  Don't forget to include browser details as well when reporting issues to make replicating the bug easy on the code-creator.
