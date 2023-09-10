<template>
    <div class="w-full items-center flex mt-4">
        <p class="text-3lg text-black font-bold ">{{ index }}*</p>
        <input type="text"
            class="py-3 px-4 block w-full ml-2 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="enter outcome" />

    </div>
</template>

<script>
export default {
    name: "OutComes",
    props: {
        index: String,
    }
};
</script>