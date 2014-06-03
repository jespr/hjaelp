/*global jQuery */

/*
 * Hjaelp plugin for jQuery
 * Creator: Jesper Christiansen
 * Project home: https://github.com/jespr/hjaelp
 * Licensed under the Apache license
 *
 * Version: 1.1.0
 */

;(function($) {

  var defaults = {
    icon: "?",
    title: "Title",
    showArrow: true,
    iconWidth: 20,
    offsetMargin: 10
  };

  function Hjaelp(targets, options) {
    var that = this;

    targets.each(function() {
      var element = $(this),
          data = {
            title: element.data('title'),
            icon: element.data('icon'),
            placement: element.data('placement')
          };

      that.options = $.extend({}, defaults, options, data);

      that.setup(element);
      that.registerEventhandlers(element);
    });
  }

  Hjaelp.prototype = {

    setup: function(element) {
      var popoverContainer = "<div class='hjaelp-help-popover'></div>",
          arrow   = "<div class='hjaelp-popover-arrow'></div>",
          title   = "<div class='title'>" + this.options.title + "</div>",
          content = "<p>" + element.html() + "</p>",
          popover = $(popoverContainer),
          margin  = -this.options.offsetMargin;

      if (this.options.width) {
        popover.width(this.options.width);
      }

      if (this.options.showArrow) {
        popover.append(arrow);
      }

      popover.append(title + content);

      element.html("<a class='hjaelp-icon'>" + this.options.icon + "</a>");
      element.append(popover);

      if (this.options.placement === 'left') {
        margin = -(popover.width() - this.options.iconWidth - this.options.offsetMargin);
        popover.addClass('hjaelp-left');
      } else {
        popover.addClass('hjaelp-right');
      }

      popover.css({ 'margin-left': margin + 'px'});
    },

    registerEventhandlers: function(element) {
      element.on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');
        $(this).find('.hjaelp-help-popover').toggleClass('show');
      });
    }

  };

  $.fn.hjaelp = function(options) {
    new Hjaelp(this, options);
  };
}(jQuery));
