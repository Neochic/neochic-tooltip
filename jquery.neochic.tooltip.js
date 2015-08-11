/*
 * Simple tooltip plugin for jQuery
 * Author:  Christoph Stickel <christoph@neochic.de>
 * License: Released under MIT License
 *
 */

(function (factory) {
    /*
     * AMD module definition from UMD (Universal Module Definition) patterns
     * https://github.com/umdjs/umd/
     */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function($) {

var $document = $(document);
var $window = $(window);

$.neochicTooltip = function(options) {
    if(options == "destroy") {
        $document.off(".neochicTooltip");
    } else {
        var timeout;
        var pos;
        var settings = $.extend({}, $.neochicTooltip.defaults, options);
        var $tooltip = $('<div class="'+settings.class+'"></div>');

        if(settings.id) {
      		$tooltip.attr('id', settings.id);
    	}

        $document.on({
            "mousemove.neochicTooltip": function(e) {
              pos = [e.pageX, e.pageY];
            },
            "mousedown.neochicTooltip": function() {
                window.clearTimeout(timeout);
                $tooltip.detach();
            },
            "mouseenter.neochicTooltip": function() {
                $tooltip.detach();
                var el = $(this);

                timeout = window.setTimeout(function() {
                    $tooltip.html(el.data(settings.attribute));
                    $tooltip.appendTo('body');

                    var left = pos[0]+10;
                    var top = pos[1]+10;

                    var viewPortHorizontalLimit = $document.scrollLeft()+$window.width();
                    var viewPortVerticalLimit = $document.scrollTop()+$window.height();

                    if($tooltip.outerWidth()+left > viewPortHorizontalLimit-settings.horizontalMargin) {
                        left = viewPortHorizontalLimit-$tooltip.outerWidth()-settings.horizontalMargin;
                    }
                    if($tooltip.outerHeight()+top > viewPortVerticalLimit-settings.horizontalMargin) {
                        top = viewPortVerticalLimit-$tooltip.outerHeight()-settings.verticalMargin;
                    }

                    $tooltip.css({
                        'left': left,
                        'top': top
                    });
                }, settings.delay);
            },
            "mouseleave.neochicTooltip": function() {
                window.clearTimeout(timeout);
                $tooltip.detach();
          }
        },'[data-'+settings.attribute+']');

        return this;
    }
};

$.neochicTooltip.defaults = {
    "class": "neochic-tooltip",
    "id": null,
    "attribute":"neochic-tooltip",
    "delay": 500,
    "horizontalMargin": 10,
    "verticalMargin": 10
};

});