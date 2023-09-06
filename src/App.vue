<template>
  <router-view />
</template>

<style></style>

<script>
import Navbar from '../src/components/Navbar.vue'
import Drawer from './components/Drawer.vue';
export default {
  components: {
    Navbar,
    Drawer,
  }
}
</script>
