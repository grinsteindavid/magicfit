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
        xs: container.attr('height-xs') || this.default,
        sm: container.attr('height-sm') || this.default,
        md: container.attr('height-md') || this.default,
        lg: container.attr('height-lg') || this.default
      };

      if (windowWidth >= 1200) {
        height = height.lg;
      } else if (windowWidth >= 992) {
        height = height.md;
      } else if (windowWidth >= 768) {
        height = height.sm;
      } else if (windowWidth < 768) {
        height = height.xs;
      }

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
          xs: container.attr('height-xs') || this.default,
          sm: container.attr('height-sm') || this.default,
          md: container.attr('height-md') || this.default,
          lg: container.attr('height-lg') || this.default
        };

        if (windowWidth >= 1200) {
          height = height.lg;
        } else if (windowWidth >= 992) {
          height = height.md;
        } else if (windowWidth >= 768) {
          height = height.sm;
        } else if (windowWidth < 768) {
          height = height.xs;
        }

        // Reset container and picture properties.
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
