<template>
  <nav class="menu" :class="{'is-open': isOpen}">
    <button type="button" class="menu-toggle" @click="toggle">
      <app-icon type="hamburger" text="Toggle navigation"></app-icon>
    </button>
    <div class="menu-items">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/resume">Resume</router-link>
      <a href="https://github.com/michaeldrotar" target="_blank" data-drawer-close>Github</a>
    </div>
  </nav>
</template>

<script>
import AppIcon from "@/components/app-icon";

export default {
  name: "app-navigation",
  components: {
    AppIcon
  },
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function(_event) {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss">
@import "../stylesheets/application/config";

.menu {
  position: relative;
  z-index: 3;
}

.menu-items {
  @apply --fullscreen;

  background-color: color($body-bg alpha(95%));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $space-xl $grid-gutter-width;
  transform: translateY(-100%);
  transition: transform 0.45s cubic-bezier(0.45, 0, 0, 1), visibility 0.45s;
  visibility: hidden;
  z-index: 1;

  @nest .is-open & {
    transform: translateY(0);
    visibility: visible;
  }

  & > a {
    display: block;
    font-size: $font-size-lg;
    margin: 0 auto;
    max-width: 600px;
    padding: $space-lg 0;
    text-align: center;
    text-decoration: none;
    text-transform: lowercase;
    transform: translateY(-100%);
    width: 100%;

    &:nth-child(1) {
      transition: color 0.15s ease-out 0.1s,
        transform 0.7s cubic-bezier(0.33, 0.98, 0.46, 1.68);
    }

    &:nth-child(2) {
      transition: color 0.15s ease-out 0.1s,
        transform 0.6s cubic-bezier(0.33, 0.98, 0.46, 1.68);
    }

    &:nth-child(3) {
      transition: color 0.15s ease-out 0.1s,
        transform 0.5s cubic-bezier(0.33, 0.98, 0.46, 1.68);
    }

    &:nth-child(4) {
      transition: color 0.15s ease-out 0.1s,
        transform 0.4s cubic-bezier(0.33, 0.98, 0.46, 1.68);
    }

    &,
    &:link,
    &:visited {
      color: $color-light;
    }

    &:hover,
    &:focus {
      color: $color-lighter;
    }

    &:active {
      color: $color-dark;
    }

    @nest .is-open & {
      transform: translateY(0);
    }
  }
}

.menu-toggle {
  background-color: transparentize($color-darker, 0.05);
  border: 0;
  border-radius: 100%;
  bottom: $space-lg;
  box-shadow: 0 0 10px 1px $color-darker;
  cursor: pointer;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  right: $space-md;
  z-index: 2;

  @media (--sm-up) {
    background-color: transparent;
    bottom: auto;
    box-shadow: none;
    right: $space-lg;
    top: $space-lg;
  }
}
</style>
