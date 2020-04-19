<template>
  <div class="awful-typewriter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'awful-typewriter',
  props: {
    mode: {
      type: String,
      default: 'standard',
      validator: function (value) {
        return ['standard'].indexOf(value) !== -1;
      },
    },
  },
  mounted() {
    var existingHtml = this.$el.innerHTML.trim().replace(/\s+/g, ' ');
    var newHtml = '';
    var i, length, char, last, snippet, query;

    for (i = 0, length = existingHtml.length; i < length; i++) {
      char = existingHtml.substring(i, i + 1);
      if (char === '<') {
        last = existingHtml.indexOf('>', i);
        if (last === -1) {
          last = length;
        }
        snippet = existingHtml.substring(i, last + 1);
        i = last;
      } else {
        snippet = '<span class="awful-typewriter-char">' + char + '</span>';
      }
      newHtml += snippet;
    }

    this.$el.innerHTML =
      newHtml + '<div class="awful-typewriter-cursor"></div>';

    query = this.$el.querySelectorAll('.awful-typewriter-char');
    this.characters = Array.prototype.slice.call(query);

    this.cursor = this.$el.querySelector('.awful-typewriter-cursor');
    this.$el.classList.add('is-typing');

    this.index = 0;
    this.type();
  },
  methods: {
    type: function () {
      var cursor = this.cursor;
      var characters = this.characters;
      var index = this.index;
      var char = characters[index];

      if (!char) {
        cursor.style.left = null;
        cursor.style.top = null;
        characters[index - 1].appendChild(cursor);
        cursor.classList.add('is-idle');
        return;
      }

      cursor.style.left = char.offsetLeft + char.offsetWidth + 'px';
      cursor.style.top =
        char.offsetTop + char.offsetHeight - cursor.offsetHeight + 'px';
      char.classList.add('is-typed');

      this.index += 1;
      setTimeout(this.type, 10);
    },
  },
};
</script>

<style lang="scss">
@keyframes cursor {
  0% {
    opacity: 0;
  }
  39% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.awful-typewriter {
  opacity: 0.00001;
}

.awful-typewriter.is-typing {
  opacity: 1;
}

.awful-typewriter-char {
  opacity: 0.00001;
  position: relative;
  transition: opacity 0.1s;
}

.awful-typewriter-char.is-typed {
  opacity: 1;
}

.awful-typewriter-cursor {
  background-color: currentColor;
  bottom: 0;
  display: block;
  height: 2px;
  left: 100%;
  position: absolute;
  width: 8px;
}

.awful-typewriter-cursor.is-idle {
  animation: cursor 1s infinite;
}
</style>
