## versioning in expressjs

# 4.18.2

## 1st part --> 4 
- major release/ breaking Update, you have to be very cautious if you are changing this first part, it can also break your code.
Don't change it for a project half done, do it for a new project, see the changes and apply it carefully.

## 2nd Part --> 18
 - Recommended Bug fix(Security) or a new feature was added which was recommended.

## 3rd part --> 2 
- changing the 3rd part means doing some minor updates(optional)

npm i express --> for installing the latest version.
npm i express@4.19.2---> particular version.

### express= "^4.18.2"
4th version, bug fix and minor release.
carat means that 4 should remain same(even if you update major release won't change.)

### express = "4.18.2";
Everything locked, you have to change/update this manually.

### express = "~4.18.2";
Only the minor release will be updated by itself.

### express = "latest";
do not do this in your project(update to latest time whenever new version updated.)