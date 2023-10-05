<template>
    <div class="relative">
        <Navbar></Navbar>
        <div class="h-[50px]"></div>
        <div class="flex">
            
            <Drawer CoursescolorClass="black" ProgramscolorClass="black" CourseCatecolorClass="blue"
                ProgramCatecolorClass="black"></Drawer>
            <AddCourseCategory></AddCourseCategory>
        </div>

    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import AddCourseCategory from '../views/AddCourseCategory.vue'
export default {
    name: 'AddNewCourseCategory',
    components: {
        Navbar,
        Drawer,
        AddCourseCategory,
    }
}
</script>