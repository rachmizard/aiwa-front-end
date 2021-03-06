/**
* Theme: Velonic Admin Template
* Author: Coderthemes
* Module/App: Dashboard Application
*/

!function($) {
    "use strict";

    var Dashboard = function() {
        this.$body = $("body")
    };

    //initializing various charts and components
    Dashboard.prototype.init = function() {
        /**
        * Morris charts
        */

        //Line chart
        Morris.Line({
            element: 'morris-line-example',
            data: [
                { y: '2012', a: 75,  b: 65},
                { y: '2013', a: 50,  b: 40},
                { y: '2014', a: 75,  b: 65},
                { y: '2015', a: 100, b: 90}
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            resize: true,
            lineColors: ['#1a2942', '#3bc0c3']
        });

        //Bar chart
        Morris.Bar({
            element: 'morris-bar-example',
            data: [
                    { y: 'Asep', a: 75,  b: 65 },
                    { y: 'Monday', a: 50,  b: 40 },
                    { y: 'Kertayasa', a: 75,  b: 65 },
                    { y: 'Wednesday', a: 50,  b: 40 },
                    { y: 'John', a: 75,  b: 65 },
                    { y: 'Friday', a: 100, b: 90 },
                    { y: 'Imam Sodik', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Jamaah', 'Prospek'],
            barColors: ['#3bc0c3', '#1a2942']
        });


        //Chat application -> You can initialize/add chat application in any page.
        $.ChatApp.init();
    },
    //init dashboard
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
    
}(window.jQuery),

//initializing dashboad
function($) {
    "use strict";
    $.Dashboard.init()
}(window.jQuery);



