<template>
    <p class="text-3lg text-black font-semibold mt-4">Course Outcome Description</p>
    <div class="min-w-[53%] max-w-[53%]">
        <input type="text"
            class="py-3 px-4 block w-full  border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="enter short description" />
    </div>
    <p class="text-3lg text-black font-semibold mt-3">Outcomes</p>
    <OutComes index="1"></OutComes>
    <OutComes index="2"></OutComes>
    <OutComes index="3"></OutComes>
    <OutComes index="4"></OutComes>
    <div class="  min-w-[51%] max-w-[51%] flex justify-end">
    <p class="text-3lg text-black font-semibold mt-2">Add another</p>
    </div>
</template>



<script>
import OutComes from "../components/OutComes.vue"
export default {
    name: "Programoutcome",
    components:{
        OutComes,
    }

};
</script>