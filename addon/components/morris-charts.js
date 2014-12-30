import Ember from 'ember';

export
default Ember.Component.extend({
    renderChart: function() {
        var type = this.get('type');

        if(typeof type !== 'string')
        {
        	return false;
        }

        type = type.toLowerCase();

        if (type === 'area') {
            this.renderArea();
        }
        else if (type === 'line') {
            this.renderLine();
        }
        else if (type === 'bar') {
            this.renderBar();
        }
        else if (type === 'donut') {
            this.renderDonut();
        }

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

        Morris.Area(options);
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
        
        Morris.Line(options);
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
        
        Morris.Bar(options);
    },
    renderDonut: function() {
    	var options = {
            element: this.$().attr('id'),
            data: this.get('data'),
            resize: this.get('resize') ? this.get('resize') : false
        };
        
        Morris.Donut(options);
    },
});