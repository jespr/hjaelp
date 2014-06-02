/*global jQuery */

/*
 * Hjaelp plugin for jQuery
 * Creator: Jesper Christiansen
 * Project home: https://github.com/jespr/hjaelp
 * Licensed under the Apache license
 *
 * Version: 1.0
 */

;(function($) {

  var defaults = {
    icon: "?",
    title: "Title",
    showArrow: true
  };

  function Hjaelp(targets, options) {
    var that = this;

    targets.each(function() {
      var element = $(this),
          text = {
            title: element.data('title')
          };

      that.options = $.extend({}, defaults, options, text);

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
          popover = $(popoverContainer);

      if (this.options.width) {
        popover.width(this.options.width);
      }

      if (this.options.showArrow) {
        popover.append(arrow);
      }

      popover.append(title + content);

      element.html("<a class='hjaelp-icon'>" + this.options.icon + "</a>");
      element.append(popover);
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
