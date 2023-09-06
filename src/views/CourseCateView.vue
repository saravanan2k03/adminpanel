<template>
    <div class="relative">
        <Navbar></Navbar>
        <div class="h-[50px]"></div>
        <div class="flex">
            
            <Drawer CoursescolorClass="black" ProgramscolorClass="black" CourseCatecolorClass="blue"
                ProgramCatecolorClass="black"></Drawer>
                <CourseCategory></CourseCategory>
        </div>

    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import CourseCategory from '../components/CourseCategory.vue'
export default {
    name: 'CourseCateView',
    components: {
        Navbar,
        Drawer,
        CourseCategory,
    }
}
</script>