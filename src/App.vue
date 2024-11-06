<template>
  <AppNav />
  <router-view />
  <AppFooter />
</template>

<script>
import AppFooter from "@/components/global/AppFooter.vue";
import AppNav from "@/components/global/AppNav.vue";

export default {
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style lang="scss">
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #747d88;
  --bs-gray-light: #dee2e6;
  --bs-primary: #81c408;
  --bs-secondary: #ffb524;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f4f6f8;
  --bs-dark: #45595b;
}

ul {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
  transition: 0.3s;
}

nav {
  a {
    font-weight: bold;
    color: #0000008c;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--bs-primary);
    }
  }
}

a {
  text-decoration: none;
}

input,
textarea {
  &:focus {
    outline: none;
  }
}
</style>
