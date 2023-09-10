<template>
    <div class="min-w-[15%]"></div>
    <div class="h-screen min-w-[85%] max-w-[85%] flex flex-col p-2">
        <div class="flex items-stretch justify-between min-h-[11%] p-3 border-b-2 border-gray-300 ">
            <p class="text-2xl text-black font-semibold mt-4">New Program</p>
            <div class="h-full min-w-[15%] max-w-[10%] flex">
                <button type="button"
                    class="py-2 px-4 mr-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
                    Cancel
                </button>
                <button type="button"
                    class="py-2 px-6 ml-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
                    Save
                </button>
            </div>
        </div>
        <div class="flex flex-col ml-3 items-start">
            <ProgramData></ProgramData>
            <div class="h-[2px] w-full border-b-2 border-black mt-4"></div>
            <p class="text-2xl text-black font-bold mt-4">Program Outcome</p>
            <Programoutcome></Programoutcome>
            <div class="h-[2px] w-full border-b-2 border-black mt-2"></div>
            <p class="text-2xl text-black font-bold mt-4">How This Program Works</p>
            <div class="h-[2px] w-full border-b-2 border-black mt-2"></div>
            <p class="text-2xl text-black font-bold mt-4">FAQ</p>
            <ProgramFaq></ProgramFaq>
            <div class="h-[10px] w-full mt-2"></div>
        </div>
    </div>
</template>

<script>
import dropdown from "../components/dropdown.vue";
import ProgramData from "../components/ProgramData.vue"
import Programoutcome from "../components/ProgramOutcomeData.vue"
import ProgramFaq from "../components/ProgramFaq.vue"
export default {
    name: "AddNewprogram",
    components: {
        dropdown,
        ProgramData,
        Programoutcome,
        ProgramFaq,
    },
};
</script>
