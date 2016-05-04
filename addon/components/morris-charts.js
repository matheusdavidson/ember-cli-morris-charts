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

        if (this.get('lineColors')) {
            options.lineColors = this.get('lineColors');
        }

        if (this.get('lineWidth')) {
            options.lineWidth = this.get('lineWidth');
        }

        if (this.get('pointSize')) {
            options.pointSize = this.get('pointSize');
        }

        if (this.get('pointFillColors')) {
            options.pointFillColors = this.get('pointFillColors');
        }

        if (this.get('pointStrokeColors')) {
            options.pointStrokeColors = this.get('pointStrokeColors');
        }

        if (this.get('ymax')) {
            options.ymax = this.get('ymax');
        }

        if (this.get('ymin')) {
            options.ymin = this.get('ymin');
        }

        if (this.get('smooth')) {
            options.smooth = this.get('smooth');
        }

        if (this.get('hideHover')) {
            options.hideHover = this.get('hideHover');
        }

        if (this.get('parseTime')) {
            options.parseTime = this.get('parseTime');
        }

        if (this.get('units')) {
            options.units = this.get('units');
        }

        if (this.get('postUnits')) {
            options.postUnits = this.get('postUnits');
        }

        if (this.get('preUnits')) {
            options.preUnits = this.get('preUnits');
        }

        if (this.get('dateFormat')) {
            options.dateFormat = this.get('dateFormat');
        }

        if (this.get('xLabels')) {
            options.xLabels = this.get('xLabels');
        }

        if (this.get('goals')) {
            options.goals = this.get('goals');
        }

        if (this.get('goalStrokeWidth')) {
            options.goalStrokeWidth = this.get('goalStrokeWidth');
        }

        if (this.get('goalLineColors')) {
            options.goalLineColors = this.get('goalLineColors');
        }

        if (this.get('events')) {
            options.events = this.get('events');
        }

        if (this.get('eventStrokeWidth')) {
            options.eventStrokeWidth = this.get('eventStrokeWidth');
        }

        if (this.get('eventLineColors')) {
            options.eventLineColors = this.get('eventLineColors');
        }

        if (this.get('axes')) {
            options.axes = this.get('axes');
        }

        if (this.get('grid')) {
            options.grid = this.get('grid');
        }

        if (this.get('gridTextColor')) {
            options.gridTextColor = this.get('gridTextColor');
        }

        if (this.get('gridTextSize')) {
            options.gridTextSize = this.get('gridTextSize');
        }

        if (this.get('gridTextFamily')) {
            options.gridTextFamily = this.get('gridTextFamily');
        }

        if (this.get('gridTextWeight')) {
            options.gridTextWeight = this.get('gridTextWeight');
        }

        if (this.get('fillOpacity')) {
            options.fillOpacity = this.get('fillOpacity');
        }

        if (this.get('parseTime') === 0) {
            options.parseTime = false;
        }
        
        if (this.get('colors')) {
            options.colors = this.get('colors');
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
