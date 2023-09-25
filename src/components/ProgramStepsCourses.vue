<template>
    <div class="min-h-[20%] max-h-[20%] w-full  flex flex-col p-2">
        <p class="text-3lg text-black font-semibold mt-2">Title {{ index+1 }}</p>
        <div class="">
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter title" />
        </div>
        <p class="text-3lg text-black font-semibold mt-2">Select courses</p>
        <div class="">
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter name" />
        </div>
    </div>
</template>


<script>
export default {
    name: "ProgramStCou",
    props:{
        index:String,
    }
};
</script>