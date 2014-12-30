import Ember from 'ember';
export
default Ember.Controller.extend({
    xKeySel: ['y', 'a', 'b'],
    areaXKey: 'y',
    lineXKey: 'y',
    barXKey: 'y',
    yKeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    areaData: [{
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
    }],
    lineData: [{
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
    }],
    barData: [{
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
    }],
    donutData: [{
        label: "Download Sales",
        value: 12
    }, {
        label: "In-Store Sales",
        value: 30
    }, {
        label: "Mail-Order Sales",
        value: 20
    }],
    actions: {
        addData: function(type) {       
            var new_data;
            if (type !== 'donutData') {
                new_data = {
                    y: (Math.floor(Math.random() * (2050 - 2000 + 1)) + 2000).toString(),
                    a: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
                    b: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
                };
            } else {
                new_data = {
                    label: "New sequence" + (Math.floor(Math.random() * (2050 - 2000 + 1)) + 2000).toString() + '',
                    value: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
                };
            }

            var current_data = this.get(type);
            current_data.pushObject(new_data);
        }
    }
});