<template>
    <div class="min-w-[15%]"></div>
    <div class="h-screen min-w-[85%] max-w-[85%] flex flex-col p-2">
        <div class="flex justify-between  min-h-[12%] p-3 border-b-2 border-gray-300 items-center">
            <p class="text-2xl text-black font-semibold mt-4 ">Courses</p>
            <div class="min-h-[7%] mt-3">
                <router-link to="/AddNewPages"> <button type="button"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
                    Add new
                </button></router-link>
            </div>
        </div>
        <div class="flex justify-between items-end min-h-[9.2%] pt-3">
            <div class="h-full min-w-[40%]  border-b-2 border-gray-300 flex items-center">
                <p class="text-3lg text-gray-600 ml-4 font-semibold">Name</p>
            </div>
            <div class="h-full min-w-[59%]  border-b-2 border-gray-300 flex items-center">
                <p class="text-3lg text-gray-600 ml-4 font-semibold">Course Category</p>

            </div>

        </div>
        <ListCourses Name="Ux Bootcamp" ProgramCategory="UX Design"></ListCourses>
        <ListCourses Name="Penetration testing" ProgramCategory="Testing"></ListCourses>
        <ListCourses Name="Penetration testing" ProgramCategory="Testing"></ListCourses>
        <ListCourses Name="Penetration testing" ProgramCategory="Testing"></ListCourses>
        <ListCourses Name="Penetration testing" ProgramCategory="Testing"></ListCourses>
    </div>
</template>


<script>
import ListCourses from './ListCourses.vue';
export default {
    name: 'CoursesPage',
    components: {
        ListCourses,
    }
}
</script>