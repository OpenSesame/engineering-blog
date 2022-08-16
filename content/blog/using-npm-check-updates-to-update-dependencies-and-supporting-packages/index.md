---
title: Using npm-check-updates to update dependencies with supporting packages
author: Grace Hunter
date: 2022-08-16T20:57:22.980Z
description: How can a dependency and all of its supporting packages be updated efficiently?
---
One of your dependencies needs to be upgraded, but it has several plugins or supporting packages. How can all of these packages be updated efficiently? Using eslint on a sample project, this post will show an easy way to check and update all of these packages.

The package npm-check-updates allows you to check what updates are available for your dependencies.

`npm install npm-check-updates`

We want to check for updates on any packages that have a common word in their name. npm-check-updates accepts as an argument a package name or regex. Execute the following in the root directory of the project, substituting the name of your dependency for ‘eslint’. The regex will match all packages that have that word in the name. 

```npx npm-check-updates ``/.*eslint.*$/`` ```

![An image of the command line after checking for updates. A list of package names that match the regex are displayed with the current and latest versions. ](screen-shot-2022-08-16-at-2.01.25-pm.png "Result of running npm-check-updates")

For each package matching the regex, you will see the current version and the latest version. Check that the list of packages includes all that you want to update. If not, adjust the regex. 

Notice the color-coding of the version numbers. Any versions that are colored red indicate a major version, cyan indicates a minor version, and green means a patch upgrade. To upgrade every package on the list to the latest version, run the same command, but with the -u flag. This will modify package.json to have the latest version numbers.

```npx npm-check-updates ``/.*eslint.*$/`` -u```

![An image of the command line after checking for updates. A list of package names are displayed with the previous and current versions. ](screen-shot-2022-08-16-at-2.39.06-pm.png "Result of running npm-check-updates -u")

Lastly, run `npm install` to install the new versions.

Before finishing, run any tests and linting checks. Changes to code will likely be needed depending on the upgrades done.