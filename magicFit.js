/*! MagicFit - v1.0.0
 * https://github.com/grinsteindavid
 * Copyright (c) 2017 Licensed MIT
 */

window.MagicFit = {
  run: function() {
    var windowWidth = window.innerWidth;
    var containers = $('.magicfit');

    containers.each(function() {
      var container = $(this);
      var src = container.attr('src');
      var height = {
        default: container.css('height'),
        xs: container.attr('h-xs') || this.default,
        sm: container.attr('h-sm') || this.default,
        md: container.attr('h-md') || this.default,
        lg: container.attr('h-lg') || this.default
      };

      if (windowWidth >= 1200) {
        height = height.lg;
      } else if (windowWidth >= 992) {
        height = height.md;
      } else if (windowWidth >= 600) {
        height = height.sm;
      } else if (windowWidth < 600) {
        height = height.xs;
      }

      // set responsive height and start to download each picture.
      container.css({
        // Picture properties.
        'background': 'transparent url(' + src + ')',
        'backgroundSize': '100% ' + height,
        'backgroundRepeat': 'no-repeat',
        // Container properties.
        'height': height
      });
    });
  },
  resize: function() {
    $(window).on('resize', function(event) {
      var windowWidth = window.innerWidth;
      var containers = $('.magicfit');

      containers.each(function() {
        var container = $(this);
        var src = container.attr('src');
        var height = {
          default: container.css('height'),
          xs: container.attr('h-xs') || this.default,
          sm: container.attr('h-sm') || this.default,
          md: container.attr('h-md') || this.default,
          lg: container.attr('h-lg') || this.default
        };

        if (windowWidth >= 1200) {
          height = height.lg;
        } else if (windowWidth >= 992) {
          height = height.md;
        } else if (windowWidth >= 600) {
          height = height.sm;
        } else if (windowWidth < 600) {
          height = height.xs;
        }

        // Reset container and picture size properties.
        container.css({
          'backgroundSize': '', 
          'height': ''
        });
        container.css({
          // Picture properties.
          'backgroundSize': '100% ' + height,
          // Container properties.
          'height': height
        });
      });
    });
  }
};
