(function(Kinetic) {

    Kinetic = Kinetic || {};
    Kinetic.Filters = Kinetic.Filters || {};

    function colorToRGBS(color) {
        return /^rgba/.test(color) ? rgbToRGBA(color) : hexToRGBA(color);
    }

    function rgbToRGBA(color) {
        var result = color.replace(/\s+/g, '').match(/(rgba?)|(\d+(\.\d+)?%?)|(\.\d+)/g);
        return {
            r: parseInt(result[1], 10),
            g: parseInt(result[2], 10),
            b: parseInt(result[3], 10),
            a: parseInt(result[4] || 255, 10)
        };
    }

    function hexToRGBA(color) {
        var result = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})*$/i);
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: parseInt(result[4], 16) || 255
        };
    }

    /**
     * Color to Color Filter
     * @function
     * @memberOf Kinetic.Filters
     * @param {Object} imageData
     * @param {Object} config
     * @param {String} config.color sample "#rrggbbaa" or "rgb(num, num, num, num)"; default "#ffffff"
     * @param {String} config.toColor sample "#rrggbbaa" or "rgb(num, num, num, num)"  default "#ffffff00"
     * @param {Integer} config.interval interval for color default 10
     */
    Kinetic.Filters.ColorToColor = function(imageData, config) {
        var data = imageData.data,
            color = (config.color || 'ffffff'),
            toColor = (config.toColor || 'ffffff00'),
            interval = parseInt( config.interval || 10, 10),
            rgb, toRGB;

        rgb = colorToRGBS(color);
        toRGB = colorToRGBS(toColor);

        for(var i = 0; i < data.length; i += 4) {
            if (
                ( Math.abs(rgb.r - data[i]) <= interval )
                    && ( Math.abs(rgb.g - data[i + 1]) <= interval )
                    && ( Math.abs(rgb.b - data[i + 2]) <= interval )
                    && ( !rgb.a || ( Math.abs(rgb.a - data[i + 3]) <= interval) )
                ) {
                data[i] = toRGB.r;
                data[i + 1] = toRGB.g;
                data[i + 2] = toRGB.b;
                data[i + 3] = toRGB.a; // alpha
            }

        }
    };

    window.Kinetic = Kinetic;

})(window.Kinetic);