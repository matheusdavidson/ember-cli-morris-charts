import Ember from 'ember';

export
default Ember.Component.extend({
    instance: false,
    renderChart: function() {
        var type = this.get('type');

        if (typeof type !== 'string') {
            return false;
        }

        type = type.toLowerCase();

        if (type === 'area') {
            this.renderArea();
        } else if (type === 'line') {
            this.renderLine();
        } else if (type === 'bar') {
            this.renderBar();
        } else if (type === 'donut') {
            this.renderDonut();
        }

        console.debug(this.get('instance'));

    }.on('didInsertElement'),
    renderArea: function() {
        var options = {
            element: this.$().attr('id'),
            data: this.get('data'),
            xkey: this.get('xKey'),
            ykeys: this.get('yKeys'),
            labels: this.get('labels'),
            resize: this.get('resize') ? this.get('resize') : false
        };

        var instance = window.Morris.Area(options);
        this.set('instance', instance);
    },
    renderLine: function() {
        var options = {
            element: this.$().attr('id'),
            data: this.get('data'),
            xkey: this.get('xKey'),
            ykeys: this.get('yKeys'),
            labels: this.get('labels'),
            resize: this.get('resize') ? this.get('resize') : false
        };

        var instance = window.Morris.Line(options);
        this.set('instance', instance);
    },
    renderBar: function() {
        var options = {
            element: this.$().attr('id'),
            data: this.get('data'),
            xkey: this.get('xKey'),
            ykeys: this.get('yKeys'),
            labels: this.get('labels'),
            resize: this.get('resize') ? this.get('resize') : false
        };

        var instance = window.Morris.Bar(options);
        this.set('instance', instance);
    },
    renderDonut: function() {
        var options = {
            element: this.$().attr('id'),
            data: this.get('data'),
            resize: this.get('resize') ? this.get('resize') : false
        };

        var instance = window.Morris.Donut(options);
        this.set('instance', instance);
    },
    listenChanges: function() {
        this.$().html('').prop('style', false);
        this.renderChart();
    }.observes('xKey', 'labels', 'resize'),
    listenDataChanges: function() {
        var instance = this.get('instance');
        instance.setData(this.get('data'));
    }.observes('data.length'),
});