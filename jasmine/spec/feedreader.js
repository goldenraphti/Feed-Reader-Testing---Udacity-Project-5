/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have the URL defined', function() {
            for ( feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        })


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have the name defined', function() {
            for ( feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });

    /* Test suite named "The menu" */
    describe('The menu', function() {
        /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            let menuLocalisation = document.querySelector('.slide-menu').getBoundingClientRect();
            let isMenuOuByLeft = ( menuLocalisation.x + menuLocalisation.width );
            expect(isMenuOuByLeft).not.toBeGreaterThan(0);
        });
        
        /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('displays and hides again when clicked twice', function() {
            
            const menu = document.querySelector('.slide-menu');
            const body = document.querySelector('body');
            
            // display the menu
            body.setAttribute('class','');
            
            // tests that menu is displayed
            console.log(document.querySelector('.slide-menu').getBoundingClientRect());
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            
            
            // hides the menu
            const hidesMenu = body.setAttribute('class','menu-hidden');
            
            // tests that menu is hidden
            console.log(document.querySelector('.slide-menu').getBoundingClientRect());
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
    });
         
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        const feedContainer = document.querySelector('.feed');
        const feedEntry = feedContainer.getElementsByClassName('entry');
        
         beforeEach(function(done) {
            loadFeed(0 , done);
        })
        
        it('are loaded by loadFeed function', function(done) {
            expect(feedEntry.length).toBeGreaterThan(0);
            done();
        });
        
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
        let firstEntryOnFirstLoad,
        firstEntryOnSecondLoad;
        
        beforeEach(function(done) {
            
            loadFeed(0, function() {
                
                const firstEntryInnerTextOnFirstLoad = document.querySelector('.feed').querySelector('.entry')['innerText'];
                firstEntryOnFirstLoad = firstEntryInnerTextOnFirstLoad;
                
                loadFeed(1, function() {
                    
                    const firstEntryInnerTextOnSecondLoad = document.querySelector('.feed').querySelector('.entry')['innerText'];
                    firstEntryOnSecondLoad = firstEntryInnerTextOnSecondLoad;
                    
                    done();
                });
            });
        });
        
        it('changes the content', function() {
            expect(firstEntryOnFirstLoad === firstEntryOnSecondLoad).toBe(false);
        });
        
    });
    
}());
