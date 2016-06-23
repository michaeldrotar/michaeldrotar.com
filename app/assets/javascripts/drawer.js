;(function() {
  var $ = jQuery;

  var initialized = [],
      seen = {},
      lib;

  lib = {
    getDrawerByName: function(name) {
      return $('[data-drawer="'+name+'"]');
    },
    /*
      Returns the drawer related to the given drawer opener.
      opener should be an element being used to open/close a drawer
      attr should be the attribute to check, one of: data-drawer-open,
        data-drawer-close, or data-drawer-toggle
      If the opener doesn't have the given attribute, it's assumed the opener
        resides within the drawer that it opens.
    */
    getDrawerByOpener: function(opener, attr) {
      opener = $(opener);
      var drawerName = attr && opener.attr(attr);
      return drawerName ? lib.getDrawerByName(drawerName) : opener.closest('[data-drawer]')
    },
    /*
      Returns all the triggers pertaining to a given drawer.
      If the drawer has a name, triggers may reside anywhere on the page and
        reference it by name.
      Whether it has a name or not, triggers may also reside within the drawer
        itself and reference it inherently.
    */
    getTriggers: function(drawer) {
      drawer = $(drawer);
      var drawerName = drawer.attr('data-drawer'),
          triggers = [];
      if ( drawerName ) {
        triggers = triggers.concat($(
          '[data-drawer-open="'+drawerName+'"],'+
          '[data-drawer-close="'+drawerName+'"],'+
          '[data-drawer-toggle="'+drawerName+'"]'
        ).toArray());
      }
      triggers = triggers.concat(drawer.find(
        '[data-drawer-open=""],'+
        '[data-drawer-close=""],'+
        '[data-drawer-toggle=""]'
      ).toArray());
      triggers = triggers.concat(
        drawer.find('[data-drawer=""]')
        .filter(function(trigger) {
          return getDrawerByOpener(trigger)[0] === drawer[0];
        })
        .toArray()
      );
      return $(triggers);
    },
    /*
      Open a drawer by assigning the 'is-open' class to itself and its triggers
      If the drawer has a key, simultaneously close any drawers that share
        the key
    */
    open: function(drawer) {
      drawer = $(drawer);
      drawer.addClass('is-open');
      lib.getTriggers(drawer).addClass('is-open');

      var key = drawer.attr('data-drawer-key');
      if ( key ) {
        $('[data-drawer][data-drawer-key="'+key+'"].is-open')
          .not(drawer)
          .each(function(i, drawer) {
            lib.close(drawer);
          });
      }
    },
    /*
      Close a drawer by removing the 'is-open' class from itself and
        its triggers
    */
    close: function(drawer) {
      drawer = $(drawer);
      drawer.removeClass('is-open');
      lib.getTriggers(drawer).removeClass('is-open');
    },
    /*
      Toggle a drawer open/close based on current state
    */
    toggle: function(drawer) {
      drawer = $(drawer);
      if ( drawer.hasClass('is-open') ) {
        lib.close(drawer);
      } else {
        lib.open(drawer);
      }
    },
    init: function(parent) {
      // Grab all drawer elements within the parent that need initialization
      var elements = $(parent || document.body).find(
            '[data-drawer-open],[data-drawer-close],'
            +'[data-drawer-toggle],[data-drawer-key],'
            +'[data-drawer-select]'
          ).not(initialized);

      if ( !elements.length ) {
        return;
      }

      initialized = initialized.concat(elements.toArray());

      elements.filter('[data-drawer-open]').on('click', lib.on.open);
      elements.filter('[data-drawer-close]').on('click', lib.on.close);
      elements.filter('[data-drawer-toggle]').on('click', lib.on.toggle);
      elements.filter('[data-drawer-select]')
        .on('change mousedown keydown', lib.on.select)
        .each(lib.on.select);

      elements.filter('[data-drawer-key]').each(function() {
        var drawer = $(this),
            key = drawer.attr('data-drawer-key');
        if ( key ) {
          if ( !seen[key] ) {
            seen[key] = true;
            lib.open(drawer);
          }
        }
      });

      elements.filter('[data-drawer-toggle][type="checkbox"]').each(function() {
        var input = $(this),
            drawer = lib.getDrawerByOpener(input, 'data-drawer-toggle');
        if ( input.prop('checked') ) {
          lib.open(drawer);
        } else {
          lib.close(drawer);
        }
      });
    },
    on: {
      open: function() {
        lib.open(lib.getDrawerByOpener(this, 'data-drawer-open'));
      },
      close: function() {
        lib.close(lib.getDrawerByOpener(this, 'data-drawer-close'));
      },
      toggle: function() {
        lib.toggle(lib.getDrawerByOpener(this, 'data-drawer-toggle'));
      },
      select: function() {
        var input = $(this),
            old = input.data('drawer-last-value') || null,
            value = input.val() || '',
            names;
        if ( value !== old ) {
          input.data('drawer-last-value', value);

          input.find('option').each(function() {
            var drawer = lib.getDrawerByName(this.value);
            if ( !drawer ) return;

            if ( this.value === value ) {
              lib.open(drawer);
            } else {
              lib.close(drawer);
            }
          });
        }
      }
    }
  };

  // Setup event handlers for various event-driven attributes
  $(document)
    .on('click focusin', function(e) {
      // Close any auto-close drawers when the user clicks or tabs
      //   off of them
      $('[data-drawer][data-drawer--auto-close].is-open')
        .not(e.target)
        .not($(e.target).parents())
        .each(function() {
          lib.close(this);
        });
    });

  $(function() {
    lib.init();
  });

  window.drawer = window.drawer || lib;

})();
