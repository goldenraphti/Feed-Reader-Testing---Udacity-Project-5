Feedreader - frontend-nanodegree
===============================

## Table of Contents

* [Instructions for the user](#instructions-for-the-users)
* [Setting up the application](#Setup)
* [Technical Instructions for Developers](#technical-instructions-for-developers)
* [Credits](#credits)

## Instructions for the user

Feedreader

The goal point of this web-based application is to read the RSS feed of a selection of website.
The list of feeds can be modified.
It displays only one weebsite feed at a time.
To modify the displayed feed, click the menu and select the feed you want to check out.

## Setup

The application comes ready to be used.
Nevertheless the list of website feeds can be modified to stick to your interests. You can modify the RSS followed, delete, add, ...
To do so, simply open app.js, and go to the part declaring "var allFeeds". Then, you can change your feeds by adding(or modifying) the name of the new website you want to follow by typing it after "name :" , and add the full url of the feed after the "url :". Remember the names and url must be typed inside quotes. As follows:

    var allFeeds = [
         {
            name: 'Name Website number 1',
            url: 'https://www.website_i_follow.com/articles/feed'
        }, {
            name: 'Udacity Blog',
            url: 'http://blog.udacity.com/feed'
        }, {
            name: 'CSS Tricks',
            url: 'http://feeds.feedburner.com/CssTricks'
        }, {
            name: 'HTML5 Rocks',
            url: 'http://feeds.feedburner.com/html5rocks'
        }, {
            name: 'Korben',
            url: 'https://korben.info/feed'
        }
    ];

## Technical Instructions for Developers

The matser branch is production ready.
A suite of tests using Jasmine.js is used, and coded using partially ES6.
The app.js was pre-built, by other people at Udacity, using JQuery.

## Credits

This feedreader was designed and coded by Udacity, and the test suite by Raphaël Ferrand, for the Google Scholarship - Front End Web Development Nanodegree of Udacity.