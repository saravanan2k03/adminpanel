<template>
    <div class="relative">
        <Navbar></Navbar>
        <div class="h-[50px]"></div>
        <div class="flex">
            <Drawer CoursescolorClass="black" ProgramscolorClass="blue" CourseCatecolorClass="black"
                ProgramCatecolorClass="black"></Drawer>
         <ProgramsPage></ProgramsPage>
        </div>

    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import ProgramsPage from '../components/ProgramsPage.vue'
export default {
    name: 'ProgramesView',
    components: {
        Navbar,
        Drawer,
        ProgramsPage,
    }
}
</script>