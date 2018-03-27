<template>
  <div>
    <!-- <div class="homepage-spotlight"></div> -->
    <awful-typewriter>
      <div class="homepage-intro">
        <h1 class="homepage-intro-heading homepage-intro-line">Hi, I'm Michael.</h1>
        <p class="homepage-intro-text">I'm a lead web architect by day and chronic tinkerer by night. Visit my <a href="/projects" class="link">projects</a> to see things that I love to work on.</p>
        <p class="homepage-intro-text">Want to get in touch? Contact me at <a href="mailto:michaeldrotar@gmail.com" class="link">michaeldrotar@gmail.com</a></p>
        <p class="homepage-intro-text">Thanks for stopping by!</p>
      </div>
    </awful-typewriter>
  </div>
</template>

<script>
  import AwfulTypewriter from '@/components/awful-typewriter'

  export default {
    name: 'homepage-intro',
    components: { AwfulTypewriter } //,
    // mounted: function () {
    //   var query = document.querySelectorAll('[data-typewriter]')
    //   var elements = Array.prototype.slice.call(query)
    //
    //   function type(typewriter, characters, cursor, index) {
    //     index = index || 0
    //     var char = characters[index]
    //     if ( !char ) {
    //       cursor.style.left = null
    //       cursor.style.top = null
    //       characters[index - 1].appendChild(cursor)
    //       cursor.classList.add('is-idle')
    //       return
    //     }
    //     cursor.style.left = (char.offsetLeft + char.offsetWidth) + 'px'
    //     cursor.style.top = (char.offsetTop + char.offsetHeight - cursor.offsetHeight) + 'px'
    //     char.classList.add('is-typed')
    //     setTimeout(function () { type(typewriter, characters, cursor, index + 1) }, 10)
    //   }
    //
    //   elements.forEach(function (element) {
    //     var existingHtml = element.innerHTML.trim().replace(/\s+/g, ' ')
    //     var newHtml = ''
    //     var i, length, char, last, snippet
    //     var query, characters, cursor
    //     for (i = 0, length = existingHtml.length; i < length; i++) {
    //       char = existingHtml.substring(i, i + 1)
    //       if (char === '<') {
    //         last = existingHtml.indexOf('>', i)
    //         if (last === -1) {
    //           last = length
    //         }
    //         snippet = existingHtml.substring(i, last + 1)
    //         i = last
    //       } else {
    //         snippet = '<span class="typewriter-char">' + char + '</span>'
    //       }
    //       newHtml += snippet
    //     }
    //     element.innerHTML = newHtml + '<div class="typewriter-cursor"></div>'
    //
    //     query = element.querySelectorAll('.typewriter-char')
    //     characters = Array.prototype.slice.call(query)
    //
    //     cursor = element.querySelector('.typewriter-cursor')
    //
    //     element.classList.add('is-typing')
    //
    //     type(element, characters, cursor)
    //   })
    // }
  }
</script>

<style>
  @import '../stylesheets/application/config';

  .homepage-intro {
    @apply --fullscreen;

    /* background-image: linear-gradient(90deg, rgba(28, 28, 28, 0) 10%, rgba(28, 28, 28, 1) 10%); */
    background-size: 10px 10px;
    box-shadow: inset 0 0 20px 5px darken(var(--body-bg), 10%);
    display: flex;
    flex-flow: column;
    justify-content: center;
    line-height: 1.8;
    padding: var(--grid-gutter-width);
    text-align: center;
  }

  .homepage-intro-heading {
    color: var(--color-lighter);
    font-size: var(--font-size-lg);
    font-weight: bold;
    line-height: var(--line-height-lg);
    margin-bottom: var(--space-md);
  }

  .homepage-intro-text {
    font-size: var(--font-size-md);
    line-height: var(--line-height-md);
    margin-left: auto;
    margin-right: auto;
    max-width: 27em;
  }

  .homepage-spotlight {
    background-image: radial-gradient(rgba(255, 255, 200, 1), rgba(255, 255, 200, 0) 50%);
    border-radius: 100%;
    left: 0;
    position: absolute;
    height: 50px;
    top: 0;
    width: 50px;
  }
</style>
