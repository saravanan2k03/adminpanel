<template>
    <div class="relative">
      <Navbar></Navbar>
      <div class="h-[50px]"></div>
      <div class="flex">
        <Drawer CoursescolorClass="black" ProgramscolorClass="black" CourseCatecolorClass="black"
          ProgramCatecolorClass="blue"></Drawer>
      </div>
  
    </div>
  </template>
    
  <script>
  import Navbar from '../components/Navbar.vue'
  import Drawer from '../components/Drawer.vue'
  export default {
    name: 'AddNewProgramCategory',
    components: {
      Navbar,
      Drawer,
    }
  }
  </script>