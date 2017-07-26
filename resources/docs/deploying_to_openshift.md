---
title: Deploying to Open Shift
---


##Pushing to Prod/Master

```
// Do this once
$ git remote add pkprod ssh://579790075110e27336001a47@patternkit-itmarketing.itos.redhat.com/~/git/patternkit.git/

$ git checkout master
$ git checkout -b temp
// Make sure bower and composer are up to date
$ bower install && composer install
$ grunt dev

$ git add dist bower_components -f
$ git commit -m "Adding dist"
$ git push pkprod temp:master -f

$ git checkout master && git branch -D temp
```


##Pushing to Dev

```
// Do this once
$ git remote add pkdev ssh://5797905c5110e27336001a5e@patternkitdev-itmarketing.itos.redhat.com/~/git/patternkitdev.git/

$ git checkout dev
$ git checkout -b temp
// Make sure bower and composer are up to date
$ bower install && composer install
$ grunt dev

$ git add dist bower_components -f
$ git commit -m "Adding dist"
$ git push pkdev temp:master -f

$ git checkout dev && git branch -D temp
```
