/*! MagicFit - v1.0.0
 * https://github.com/grinsteindavid
 * Copyright (c) 2017 Licensed MIT
 */

window.MagicFit = {
  run: function() {
    var containers = $('.magicfit');

    containers.each(function() {
      var container = $(this);
      var height = container.css('height');
      var src = container.attr('src');

      container.attr('src-cache', 'true');
      container.css({
        'background': 'transparent url(' + src + ')',
        'backgroundSize': '100% ' + height + '',
        'backgroundRepeat': 'no-repeat'
      });
    });
  },
  reload: function() {
    var containers = $('.magicfit');

    containers.each(function() {
      var container = $(this);
      var height = container.css('height');
      var src = container.attr('src');

      if (!container.attr('src-cache')) {
        container.css({
          'background': 'transparent url(' + src + ')',
          'backgroundSize': '100% ' + height + '',
          'backgroundRepeat': 'no-repeat'
        });
      };
    });
  }
};
