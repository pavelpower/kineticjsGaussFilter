KineticJS Gauss Filter
====================

The filter of Gausse for library KineticJS (adaptation)

Program is taken from the site http://www.quasimondo.com/StackBlurForCanvas

Development: Mario Klingeman

Adapting under KineticJS: Pavel Akhmetchanov

```javascript

filteredGaussYoda.applyFilter( Kinetic.Filters.Gauss, {
    radius: 20
}, function() {
    layer.draw();
});

```


Color to color filter
=====================

The filter allows you to change the color on the other. And it can be made transparent indicating the color, if you set the alpha channel.

```javascript

filteredImage.applyFilter( Kinetic.Filters.ColorToColor, {
    color: '#ff0000',
    toColor: '#ff0000bb',
    interval: 60
}, function(img) {
    layer.draw();
});


```