<template>
  <div class="relative">
    <Navbar></Navbar>
    <div class="h-[50px]"></div>
    <div class="flex">
      <Drawer CoursescolorClass="blue" ProgramscolorClass="black" CourseCatecolorClass="black"
        ProgramCatecolorClass="black"></Drawer>
      <CoursePage></CoursePage>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import CoursePage from '../components/CoursesPage.vue'
export default {
  name: 'CoursesView',
  components: {
    Navbar,
    Drawer,
    CoursePage
  }
  
}
</script>
