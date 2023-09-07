<template>
    <div class="relative">
        <Navbar></Navbar>
        <div class="h-[50px]"></div>
        <div class="flex">
            <Drawer CoursescolorClass="blue" ProgramscolorClass="black" CourseCatecolorClass="black"
                ProgramCatecolorClass="black"></Drawer>
                <AddNewCourse></AddNewCourse>
    </div>
</div></template>


<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import AddNewCourse from '../components/AddNewCourse.vue'
export default {
    name: 'AddNewPageView',
    components: {
        Navbar,
        Drawer,
        AddNewCourse,
    }
}
</script>