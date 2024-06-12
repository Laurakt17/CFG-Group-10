
var pages = [
    '../belfast/belfast.html',
    '../birmingham/bham.html',
    '../glasgow/glasgow.html',
    '../london/london.html',
    '../manchester/manchester.html',
    '../brighton/brighton.html'
    ];

function randomPage() {
        var i = parseInt(Math.random()*pages.length);
        location.href = pages[i];
        console.log(location.href);
    }

var pages2 = [
    'belfast/belfast.html',
    'birmingham/bham.html',
    'glasgow/glasgow.html',
    'london/london.html',
    'manchester/manchester.html',
    'brighton/brighton.html'
    ];

function randomPage2() {
        var i = parseInt(Math.random()*pages2.length);
        location.href = pages2[i];
        console.log(location.href);
    }
