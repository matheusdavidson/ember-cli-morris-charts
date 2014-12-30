# Ember-cli-morris-charts 

This is an ember cli addon to easily create awesome charts using [morris charts jquery plugin](https://github.com/morrisjs/morris.js). 

The plugin has been wrapped in this ember addon so you can use it with your controller or model properties, whenever data is updated, the chart will also update.

## Demo
https://matheusdavidson.github.io/ember-cli-morris-charts

## Installation
**jQuery must be loaded in your project, in next releases this will be done automatically**

```npm install --save-dev ember-cli-morris-charts```

## Usage
For now, only the basic options are working, but i will implement everything very soon!<br />
There are 4 types of charts available(Area, Line, Bar, Donut), acording to [morris charts docs](http://morrisjs.github.io/morris.js/#what-next):

**Area**<br />
```{{morris-charts type="Area" data=DATA xKey=XKEY yKeys=YKEYS labels=LABELS resize=RESIZE}}```

**Line**<br />
```{{morris-charts type="Line" data=DATA xKey=XKEY yKeys=YKEYS labels=LABELS resize=RESIZE}}```

**Bar**<br />
```{{morris-charts type="Bar" data=DATA xKey=XKEY yKeys=YKEYS labels=LABELS resize=RESIZE}}```

**Donut**<br />
```{{morris-charts type="Donut" data=DATA resize=RESIZE}}```

You can use the tags above in your templates and provide extra properties (like data, xKey, yKeys, Labels and resize)in your *model* or *controllers*.

## Available options<br />
**TYPE**<br />
String(Area, Line, Bar, Donut)<br />
**DATA**<br />
Array, *refer to morris chart docs according to TYPE*<br />
**XKEY**<br />
String, *should be one of your DATA array key, refer to morris chart docs*<br />
**yKEYS**<br />
Array, *should be an array with your DATA keys that you want displayed on y series, refer to morris chart docs*<br />
**LABELS**<br />
Array, *Label for each key in your y series, refer to morris chart docs*<br />
**RESIZE**<br />
Bool, *True will make the chart responsive, defaults to false(not responsive)*<br />

**Questions?**

This is a new project, but many people are already using it successfully. If you have any trouble, open an issue, and you should get help quickly.
