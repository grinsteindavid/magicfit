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
        xs: container.attr('height-xs') || container.css('height'),
        sm: container.attr('height-sm') || container.css('height'),
        md: container.attr('height-md') || container.css('height'),
        lg: container.attr('height-lg') || container.css('height')
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

      container.attr('src-cache', 'true');
      container.css({
        'background': 'transparent url(' + src + ')',
        'backgroundSize': '100% ' + height + '',
        'backgroundRepeat': 'no-repeat',
        'height': '' + height
      });
    });
  },
  reload: function() {
    var windowWidth = window.innerWidth;
    var containers = $('.magicfit');

    containers.each(function() {
      var container = $(this);
      var src = container.attr('src');
      var height = {
        xs: container.attr('height-xs') || container.css('height'),
        sm: container.attr('height-sm') || container.css('height'),
        md: container.attr('height-md') || container.css('height'),
        lg: container.attr('height-lg') || container.css('height')
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

      if (!container.attr('src-cache')) {
        container.css({
          'height': '' + height,
          'background': 'transparent url(' + src + ')',
          'backgroundSize': '100% ' + height + '',
          'backgroundRepeat': 'no-repeat'
        });
      };
    });
  },
  resize: function() {
    $(window).on('resize', function(event) {
      var windowWidth = window.innerWidth;
      var containers = $('.magicfit');

      containers.each(function() {
        var container = $(this);
        var height = {
          xs: container.attr('height-xs') || container.css('height'),
          sm: container.attr('height-sm') || container.css('height'),
          md: container.attr('height-md') || container.css('height'),
          lg: container.attr('height-lg') || container.css('height')
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

        container.css({'backgroundSize': '', 'height': ''});
        container.css({
          'backgroundSize': '100% ' + height,
          'height': '' + height
        });
      });
    });
  }
};
