;(function() {
  var query = document.querySelectorAll('[data-prevent-default]'),
      elements = Array.prototype.slice.call(query),
      whitespace = /\s+/g;

  function preventDefault(event) {
    event.preventDefault();
  }

  elements.forEach(function(element) {
    var attr = element.getAttribute('data-prevent-default'),
        eventNames = attr.trim().split(whitespace);
    eventNames.forEach(function(eventName) {
      element.addEventListener(eventName, preventDefault);
    });
  });
})();
