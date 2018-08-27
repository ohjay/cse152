;
(function(factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'), window, document);
    } else {
        factory(jQuery, window, document);
    }
})(function($, window, document, undefined) {
    "use strict";
    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.
    // window and document are passed through as local variables rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).
    /**
     * jQuery custom plugin implement the roadmap functionality
     */
    $.fn.roadmap = function(events, opts) {
        if (!events instanceof Array) {
            events = [];
        }
        var defaults = {
            slide: 1,
            eventsPerSlide: 6,
            rootClass: 'roadmap',
            prevArrow: 'prev',
            nextArrow: 'next',
            orientation: 'auto',
            eventTemplate: '<div class="event">' + '<div class="event__date">####DATE###</div>' + '<div class="event__content">####CONTENT###</div>' + '</div>'
        };
        var settings = $.extend({}, defaults, opts);
        var buildEvent = function(event, key) {
            var html = '<li class="' + settings.rootClass + '__events__event">' + settings.eventTemplate + '</li>';
            html = html.replace('####DATE###', event.date);
            html = html.replace('####CONTENT###', event.content);
            var left = 100 / (settings.eventsPerSlide - 1) * key;
            return $(html).css('left', left + '%');
        };
        return this.each(function() {
            var _this = this;
            var $this = $(this);
            var currentSlide = settings.slide - 1;
            /**
             * Store events and settings
             */
            $this.data({
                events: events,
                settings: settings,
                currentSlide: currentSlide
            }).addClass(settings.rootClass);
            var clear = function() {
                $this.removeClass(settings.rootClass + '--initialized');
                $this.find('.' + settings.rootClass + '__events').remove();
                $this.find('.' + settings.rootClass + '__navigation').remove();
            };
            var buildEvents = function() {
                var currentSlide = $this.data('currentSlide');
                var settings = $this.data('settings');
                var events = $this.data('events');
                $('<ol/>', {
                    class: settings.rootClass + '__events'
                }).append(events.slice(currentSlide * settings.eventsPerSlide, (currentSlide + 1) * settings.eventsPerSlide).map(buildEvent)).appendTo(_this);
            };
            var buildNavigation = function() {
                var currentSlide = $this.data('currentSlide');
                var buildNav = function(nav) {
                    switch (nav) {
                        case 'prev':
                            if (currentSlide > 0) {
                                return $('<li><a href="#" class="' + nav + '">' + settings.prevArrow + '</a></li>');
                            }
                            break;
                        case 'next':
                            if ((currentSlide + 1) * settings.eventsPerSlide < events.length) {
                                return $('<li><a href="#" class="' + nav + '">' + settings.nextArrow + '</a></li>');
                            }
                            break;
                    }
                    return $('<li></li>');
                };
                $('<ul/>', {
                    class: settings.rootClass + '__navigation'
                }).append(['prev', 'next'].map(buildNav)).appendTo(_this);
            };
            var setOrientation = function() {
                var getOrientation = function() {
                    switch (settings.orientation) {
                        case 'horizontal':
                        case 'vertical':
                        case 'auto':
                            return settings.orientation;
                            break;
                    }
                    return 'auto';
                };
                $this.addClass(settings.rootClass + '--orientation-' + getOrientation());
            };
            var build = function() {
                clear();
                /**
                 * Init events
                 */
                buildEvents();
                /**
                 * Init navigation
                 */
                buildNavigation();
                /**
                 * Set orientation
                 */
                setOrientation();
                /**
                 * Initialize
                 */
                setTimeout(function() {
                    $this.addClass(settings.rootClass + '--initialized');
                }, 100);
            };
            /**
             * Build roadmap
             */
            build();
            /**
             * Event Listeners
             */
            $('body').on('click', '.' + settings.rootClass + ' .' + settings.rootClass + '__navigation li > *', function(e) {
                e.preventDefault();
            });
            var isMobile = false;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
                isMobile = true;
            }
            if (!isMobile) {
                $(window).on('resize', function() {
                    $this.removeClass(settings.rootClass + '--initialized');
                    build();
                });
            }
        });
    };
});
