---
title: Contributing to WebRH
---

So you're ready to begin the magical journey of pushing your new elements to the main repository...

1. Before you create a merge request, go through the following list:
    - Does my code look good and render in patternkit?
        - Check the `/schema/element_name` view and the `/tests/element_name` views to ensure everything renders as expected.
    - Does my code pass `grunt lint`?
2.  Create an etherpad with the user story for this project: http://etherpad.corp.redhat.com/USXXX.
    - If you type it into the navigation bar and hit enter, it will prompt you to create a new etherpad at that url.
    - Paste the template from below.
3. Run through the testing documentation next: [Tests and QA](tests_and_qa).
4. Find an open [sandbox] (https://docs.google.com/spreadsheets/d/1aF9Qaoxo6rk4H_FcEKTx0VQAOVPLUXBO64fh18NVrGo/edit#gid=0) and run: `npm run sync "<username for sandbox>"`
    - You only have to provide pass the name of the sandbox into the command if it is different than your $USER variable (find out your $USER variable with `echo $USER`).
    - You must be in the top level of the webrh repo for this command to work properly and your webrh repo must live in the same directory as the webdrupal repo.
5. If you have created new elements or made schema changes to existing elements, run: `npm run import "<username for sandbox> <name of patterns>"`
    - Pattern names should be space-separated
    - If you run `npm run import` without any inputs, it will run a --all import against the $USER sandbox.
6. If you have removed parts of a schema or entire patterns, you need to run the build instead of the import: `npm run build "<username for sandbox> <name of patterns>"`.
    - If you run `npm run build` without any inputs, it will run a --all remove and then an import against the $USER sandbox.
    - To run the remove and import on a different $USER box but using --all, you run either:
        - `npm run build "<username for sandbox>"` or
        - `npm run build "<username for sandbox> --all"`
7. Log onto the sandbox afterward and either build a new page utilizing the patterns you have added or edit an existing page.  Note that if the pattern is flagged as private, it will need to be added to a content type before you can test it.
8.  Share the links to the page you have build for testing in the sandbox prompt of your merge request and tap your QA or branch tester to begin review.

## Templates
### Git commit template
```
- Etherpad: [http://etherpad.corp.redhat.com/USXXX](http://etherpad.corp.redhat.com/USXXX)
- Sandbox: [sandbox url]()

### COMPONENTS
 * UPDATE | name_of_component
   * notes on update

### LAYOUTS
 * NEW | name_of_layout
   * notes on update

### SUBPATTERNS
 * NEW | name_of_subpattern
   * notes on update

### PATTERNS
 * NEW | name_of_pattern
   * notes on update
 * UPDATE | name_of_pattern
   * notes on update
```

### Etherpad template

```
==================
USXXXX - User story description here
==================

COMPONENTS
 * UPDATE | name_of_component
   * notes on update

LAYOUTS
 * NEW | name_of_layout
   * notes on update

SUBPATTERNS
 * NEW | name_of_subpattern
   * notes on update

PATTERNS
 * NEW | name_of_pattern
   * notes on update
 * UPDATE | name_of_pattern
   * notes on update

=================
NOTES FOR FUTURE PATTERNS
=================
* notes

=================
BRANCH TESTING
=================
1) Test-case description

2) Test-case description

=================
CROSS-BROWSER TESTING
https://docs.google.com/a/redhat.com/spreadsheets/d/1luriPYswlGcKdcbKhQfW6kxIgj7tjNjnBVP7yZ4onwA/edit?usp=sharing (copy this template and put your new url here)
=================

1) Test-case description [ screenshots or it didn't happen ]

2) Test-case description

=================
DUMMY CONTENT
=================
```
