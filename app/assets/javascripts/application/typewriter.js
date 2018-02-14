(function() {
  var query = document.querySelectorAll('[data-typewriter]')
  var elements = Array.prototype.slice.call(query)

  function type(typewriter, characters, cursor, index) {
    index = index || 0
    var char = characters[index]
    if ( !char ) {
      cursor.style.left = null
      cursor.style.top = null
      characters[index - 1].appendChild(cursor)
      cursor.classList.add('is-idle')
      return
    }
    cursor.style.left = (char.offsetLeft + char.offsetWidth) + 'px'
    cursor.style.top = (char.offsetTop + char.offsetHeight - cursor.offsetHeight) + 'px'
    char.classList.add('is-typed')
    setTimeout(function () { type(typewriter, characters, cursor, index + 1) }, 10)
  }

  elements.forEach(function (element) {
    var existingHtml = element.innerHTML.trim().replace(/\s+/g, ' ')
    var newHtml = ''
    var i, length, char, last, snippet
    var query, characters, cursor
    for (i = 0, length = existingHtml.length; i < length; i++) {
      char = existingHtml.substring(i, i + 1)
      if (char === '<') {
        last = existingHtml.indexOf('>', i)
        if (last === -1) {
          last = length
        }
        snippet = existingHtml.substring(i, last + 1)
        i = last
      } else {
        snippet = '<span class="typewriter-char">' + char + '</span>'
      }
      newHtml += snippet
    }
    element.innerHTML = newHtml + '<div class="typewriter-cursor"></div>'

    query = element.querySelectorAll('.typewriter-char')
    characters = Array.prototype.slice.call(query)

    cursor = element.querySelector('.typewriter-cursor')

    element.classList.add('is-typing')

    type(element, characters, cursor)
  })
})()
