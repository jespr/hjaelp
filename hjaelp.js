/*global jQuery */

;(function($) {

  var defaults = {
    icon: "?",
    title: "Title",
    content: "Content..."
  };

  function Hilfe(targets, options) {
    var that = this;

    targets.each(function() {
      var element = $(this),
          text = {
            title: element.data('title'),
            content: element.data('content')
          };

      that.options = $.extend({}, defaults, options, text);

      that.setup(element);
      that.registerEventhandlers(element);
    });
  }

  Hilfe.prototype = {

    setup: function(element) {
      var popoverContainer = "<div class='hjaelp-help-popover'></div>",
          arrow   = "<div class='hjaelp-popover-arrow'></div>",
          title   = "<strong>" + this.options.title + "</strong>",
          content = "<p>" + this.options.content + "</p>",
          popover = $(popoverContainer).html(arrow + title + content);

      element.html(this.options.icon);
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

  $.fn.hilfe = function(options) {
    new Hilfe(this, options);
  };
}(jQuery));
