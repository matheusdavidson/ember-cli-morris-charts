import Ember from 'ember';
export
default Ember.Controller.extend({
    yKeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    data: [{
        y: '2006',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10
    }, {
        y: '2007',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    }, {
        y: '2008',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    }, {
        y: '2009',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    }, {
        y: '2010',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    }, {
        y: '2011',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    }, {
        y: '2012',
        a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    }],
    dataDonut: [{
        label: "Download Sales",
        value: 12
    }, {
        label: "In-Store Sales",
        value: 30
    }, {
        label: "Mail-Order Sales",
        value: 20
    }]
});