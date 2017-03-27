---
title: Creating a WebRH release
---

<a name="top" class="anchor"></a>
#### Table of Contents

- [Git Overview](#git-overview)
- [Semantic Versioning and Git Flow](#versioning-git-flow)
    - [Major Release](#major-release)
    - [Minor Release](#minor-release)
    - [Patch Release](#patch-release)
- [Create a Tag](#create-a-tag)
- [Release WebRH tag to Webdrupal](#release-tag-to-webdrupal)
- [Testing Patterns in Drupal](#testing-patterns-in-drupal)


<a name="git-overview" class="anchor"></a>
## Git Overview

WebRH is a standalone repository that uses release tags to distribute release code to applications which have WebRH installed. It has two major code branches, Dev and Master.

- **Master** points to the currently released code therefore will have the same version number in `bower.json` and `package.json` as the most recent tag release.
- **Dev** is our development branch and will always have a version number at least one minor version ahead of master. So once Master hits 1.3.0 Dev is bumped to 1.4.0.



<a name="versioning-git-flow" class="anchor"></a>
## Semantic Versioning and Git Flow
<a href="#top">Back to Top</a>


All releases follow [semantic versioning](http://semver.org/) rules. The TL;DR version is:

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards-compatible manner
- PATCH version when you make backwards-compatible bug fixes.

Therefore 1.3.2 means 1st major release, 3rd minor release and 2nd patch.

Major and Minor releases have a different workflow but both of them impliment the Git Flow approach to development, so all features start as branches until complete and then the code is merged back into the branch it forked off of. The branch it returns to is based on the release strategy. Those strategies are described next.



<a name="major-release" class="anchor"></a>
### I. Major release
<a href="#top">Back to Top</a>

Major releases are breaking releases, which are incompatible with the previous releases. We may never get to this.  We could go 1.25.0 and never go to 2.0. Or maybe we do this when we upgrade to Drupal 8.

Major and Minor releases (referred to as major/minor from now on) releases take a bit of a different path as they are usually the culmination of several week's worth of work.


<a name="minor-release" class="anchor"></a>
### II. Minor release
<a href="#top">Back to Top</a>

All Minor releases start in the development branch (remember that dev branch is already ahead of master), and are merged back into dev when they are done. After a few features get merged into dev it might be time to create a new release candidate.

1. `$ git checkout dev && git pull`
    - Start with the latest from the dev branch
2. `$ git checkout -b US#####-1.#.0-release`
    - This will create a new branch based off of dev called 1.4.0-release (never just 1.4.0 though as that'll conflict with the tag name). We fork off of dev at this point to lock in the code we want to merge into master, in case other features branches are subsequently merged into dev.
3. Update the `CHANGELOG-1.x.md`
   - Updates to the CHANGELOG should include date, release number, link to tag and description of the changes in the release.

	    ```
	    ## EXAMPLE 1.#.0 (2016-01-01)
	    - Tag: [1.#.0](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webrh/commits/1.#.0)
	    - Milestone: [1.#.0](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webrh/milestones/6)
	    - [US####](https://rally1.rallydev.com/#/0): Testimonial band
	    ```
4. `$ git add *`
    - Stage the changes
5. `$ git commit -m "update changelog for 1.#.0"`
    - Commit your changes
6. `$ git push`
    - Push to gitlab
7. In gitlab, [open a merge request](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webrh/merge_requests/new) from  1.#.0-release to **master**.
8. Once 1.#.0-release passes AT, you can merge the code into Master.
    - If there are problems with the merge we'll be merging master back into dev after this is all done, so those changes will get back into dev.
9. Don't forget to bump the version numbers in `bower.json` and `package.json` in dev up a minor version:

        ## EXAMPLE, if it was previously 1.4.0, change to:
        "version": "1.5.0",`

10. Once that's done you'll [create a tag](#create-a-tag).


<a name="patch-release" class="anchor"></a>
### III. Patch Release
<a href="#top">Back to Top</a>

To quickly fix bugs, you can create a patch release of WebRH. Since they are meant to modify the currently released code, they are forked off of master and merged back into master once they are done. If multiple bugs are being fixed they might all be merged into a single bugfix branch and then merged into master. Then the patch should also be merged into dev so the bug fix can be seen there too, to avoid multiple defects being opened throughout a sprint.

1. `$ git checkout master && git pull`
    - Start with the latest from the master branch
2. `$ git checkout -b US#####-1.#.1-patch`
    - Create a feature branch with the story number
3. `$ git add *`
    - Stage the changes
4. `$ git commit -m "patches that fix X"`
    - Commit your changes
5. `$ git push`
    - Push to gitlab
6. Bump the release version in `bower.json` and `package.json` (so 1.4.0 to 1.4.1 for patch release)
7. Update the `CHANGELOG-1.x.md` with tag number, the date, a link to where the tag will be and a description of what has changed.
8. In gitlab, [open a merge request](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webrh/merge_requests/new) from  `US#####-1.4.1-patch` to **master**.
9. Once the patch branch passes AT, you can merge the code into Master.
10. In gitlab, [open a merge request](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webrh/merge_requests/new) from  **master** to **dev**. When merging, resolve merge conflicts on release numbers by keep the dev version numbers.
11. Once that's done you'll [create a tag](#create-a-tag) for webdrupal.

<hr>

<a name="create-a-tag" class="anchor"></a>
## Creating a tag
<a href="#top">Back to Top</a>


When the WebRH master branch has these three things (they should all come from one feature branch & merge request), it's time to create a new tag:
 - new code in it
 - an updated version number
 - updated CHANGELOG

Steps:

1. `$ git checkout master && git pull`
2. `$ git checkout -b temp`
    - Create a new branch called temp, because we'll delete it when we're done.
    - Create this branch off of master after the release has been merged in.
3.  `$ grunt`
    - Run grunt once to make sure we have a fresh build of WebRH.
4.  `$ git add dist -f`
   - This will force add the `dist` folder to git.  We need to do this because dist is usually git ignored and we need it to be in this one commit so we can create a tag from it.
5. `$ git commit -m "WebRH 1.#.0 release code"`,
    - Commit the code
6. `$ git tag 1.#.0 && git push origin 1.#.0`
    - Create a new tag and push it to origin.
7. `$ git checkout dev && git pull && git branch -D temp`
    - Checkout the master branch and delete the temp branch
8. After pushing the code switch back to master and delete the temp branch.


<a name="release-tag-to-webdrupal" class="anchor"></a>
## Update Webdrupal with new WebRH release tag
<a href="#top">Back to Top</a>

In the webdrupal repo,

1. `$ git checkout master && git checkout -b US#####-webrh-1.#.0`
    - Create a webdrupal feature branch based off of master.
2. Update `bower.json` to the new version, i.e. `1.#.0`
3. `bower unlink webrh`
    - remove local bower links to ensure all webrh code is only coming from the version specified in bower.json in webdrupal
4. `grunt build`
   - do a fresh compile & build of WebRH assets
5. Add the following code to the bottom of `/profile/rh.install` in webdrupal:

    ```
    /**
     * US###: Pattern re-import for the webrh 1.#.# release.
     */
    function rh_update_7178() {
      patternbuilder_importer_import_schemas();
    }
    ```
    -  The number at the end of the name of the function is an iteration of the last one.  The user story is the same as your webrh feature branch and the release is the webrh release #.
    - Contact a developer team resource to validate your updates
6. `$ git add *; git commit -m "message here"`
    - Git add and commit all the new WebRH files and the updated install file to webdrupal
7.  `$ git push yourname US#####-webrh-1.#.0`
    - Rebuild your sandbox with your webdrupal feature branch and [manually test the features](#testing-patterns-in-drupal)
8. Run [automated tests on your sandbox](http://web-dev-drupal-USERNAME.dev.a1.vary.redhat.com:8080/job/webdrupal-acceptance-tests/build?delay=0sec) and make sure they pass.
9. Open a [merge request in webdrupal](https://gitlab.it-mkt.corpdev.redhat.com/it-marketing/webdrupal/merge_requests/new). The merge request should only contain:
    - the updated bower.json
    - the updated rh.install
    - the html/sites/all/libraries/webrh/dist files which are updated/new schemas, templates and styles. It should not include Mocha tests.
10. Automated tests must pass, code must be reviewed, then the branch can be merged in.




<a name="testing-patterns-in-drupal" class="anchor"></a>
## Testing WebRH Patterns in Drupal
<a href="#top">Back to Top</a>


Sometimes WebRH code needs to be tested in Webdrupal before any code is committed. Because the code lives in 2 separate repos, these are the steps you’ll need to take.

1. Make sure your WebRH branch is up to date with the latest from dev, then do a build
    1. `$ cd webrh`
    2. `$ git status`
    3. `$ git checkout dev && git pull origin dev`
    4. `$ git checkout US#####-branchname `
    5. `$ git merge dev`
    6. `$ grunt `
2. Switch to Webdrupal pull in latest from webrh, push current code to sandbox to build.
    1. `$ cd webdrupal`
    2. `$ bower link webrh`
    3. `$ grunt build`
    4. `$ make rsync2sandbox` (and enter the sandbox name in the prompt)
3. If you are making changes to schemas, you'll also need to SSH into your sandbox and run the Pattern Builder Importer.
    1. `$ ssh root@web-dev-drupal-USERNAME.dev.a1.vary.redhat.com `
    2. `$ cd /usr/share/webdrupal/ `
    3. Use one or more of the following commands to update your schemas
        - `$ drush pbi --all  `
            - Imports all schemas
        - `$ drush pbi-remove --all  `
            - WARNING, THIS IS DESTRUCTIVE. This removes all schemas.
        - `$ drush pbi schema-name `
            - Imports specified schema
        - `$ drush pbi-remove schema-name `
            - WARNING, THIS IS DESTRUCTIVE. This removes the specified schema.
