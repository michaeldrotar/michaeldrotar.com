;(function() {
  var query = document.querySelectorAll('[data-typewriter]'),
      elements = Array.prototype.slice.call(query);

  function type(typewriter, characters, cursor, index) {
    index = index || 0;
    var char = characters[index];
    if ( !char ) {
      cursor.style.left = null;
      cursor.style.top = null;
      characters[index - 1].appendChild(cursor);
      cursor.classList.add('is-idle');
      return;
    }
    cursor.style.left = (char.offsetLeft + char.offsetWidth) + 'px';
    cursor.style.top = (char.offsetTop + char.offsetHeight - cursor.offsetHeight) + 'px';
    char.classList.add('is-typed');
    setTimeout(function() { type(typewriter, characters, cursor, index + 1); }, 10);
  }

  elements.forEach(function(element) {
    var existing_html = element.innerHTML.trim().replace(/\s+/g, ' '),
        new_html = '',
        i, length, char, end_i, snippet,
        query, characters, cursor;
    for ( i = 0, length = existing_html.length; i < length; i++ ) {
      char = existing_html.substring(i, i + 1);
      if ( char == '<' ) {
        end_i = existing_html.indexOf('>', i);
        if ( end_i == -1 ) {
          end_i = length;
        }
        snippet = existing_html.substring(i, end_i + 1);
        i = end_i;
      } else {
        snippet = '<span class="typewriter-char">' + char + '</span>';
      }
      new_html += snippet;
    }
    element.innerHTML = new_html + '<div class="typewriter-cursor"></div>';

    query = element.querySelectorAll('.typewriter-char');
    characters = Array.prototype.slice.call(query);

    cursor = element.querySelector('.typewriter-cursor');

    element.classList.add('is-typing');

    type(element, characters, cursor);
  });
})();
