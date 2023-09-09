<template>
    <div class="relative">
        <Navbar></Navbar>
        <div class="h-[50px]"></div>
        <div class="flex">
            <Drawer CoursescolorClass="black" ProgramscolorClass="blue" CourseCatecolorClass="black"
                ProgramCatecolorClass="black"></Drawer>
                <AddNewprogram></AddNewprogram>

    </div>
</div></template>


<script>
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer.vue'
import AddNewprogram from '../components/AddNewPrograme.vue'
export default {
    name: 'AddNewProgramsPage',
    components: {
        Navbar,
        Drawer,
        AddNewprogram,
    }
}
</script>