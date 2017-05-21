;(function() {
  var query = document.querySelectorAll('[data-toggle]'),
      elements = Array.prototype.slice.call(query),
      whitespace = /\s+/g;

  function toggle(event) {
    var element = event.currentTarget,
        attr = element.getAttribute('data-toggle'),
        classNames = attr.trim().split(whitespace);
    classNames.forEach(function(className) {
      if ( element.classList.contains(className) ) {
        element.classList.remove(className);
      } else {
        element.classList.add(className);
      }
    });
  }

  elements.forEach(function(element) {
    element.addEventListener('click', toggle);
  });
})();
