<template>
  <div class="relative">
    <Navbar></Navbar>
    <div class="h-[50px]"></div>
    <div class="flex">
      <Drawer CoursescolorClass="black" ProgramscolorClass="black" CourseCatecolorClass="black"
        ProgramCatecolorClass="blue"></Drawer>
        <ProgramCategory></ProgramCategory>
    </div>

  </div>
</template>
  
<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import ProgramCategory from '../components/ProgramCategory.vue'
export default {
  name: 'ProgramCateView',
  components: {
    Navbar,
    Drawer,
    ProgramCategory,
  }
}
</script>