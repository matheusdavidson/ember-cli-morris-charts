import Ember from 'ember';

export
default Ember.Component.extend({
    instance: false,
    options: {},
    renderChart: function() {
        var type = this.get('type');

        if (typeof type !== 'string') {
            return false;
        }

        type = type.toLowerCase();

        // Options
        this.setOptions();

        // Render chart
        if (type === 'area') {
            this.renderArea();
        } else if (type === 'line') {
            this.renderLine();
        } else if (type === 'bar') {
            this.renderBar();
        } else if (type === 'donut') {
            this.renderDonut();
        }
    }.on('didInsertElement'),
    setOptions: function() {
        var options = this.get('options');

        options.element = this.$().attr('id');
        options.data = this.get('data');
        options.ykeys = this.get('resize') ? this.get('resize') : false;

        if (this.get('xKey')) {
            options.xkey = this.get('xKey');
        }

        if (this.get('yKeys')) {
            options.ykeys = this.get('yKeys');
        }

        if (this.get('labels')) {
            options.labels = this.get('labels');
        }

        if (this.get('xLabelFormat')) {
            options.xLabelFormat = this.get('xLabelFormat');
        }

        if (this.get('parseTime') === 0) {
            options.parseTime = false;
        }

        this.set('options', options);
        return options;
    },
    renderArea: function() {
        var instance = window.Morris.Area(this.get('options'));
        this.set('instance', instance);
    },
    renderLine: function() {
        var instance = window.Morris.Line(this.get('options'));
        this.set('instance', instance);
    },
    renderBar: function() {
        var instance = window.Morris.Bar(this.get('options'));
        this.set('instance', instance);
    },
    renderDonut: function() {
        var instance = window.Morris.Donut(this.get('options'));
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