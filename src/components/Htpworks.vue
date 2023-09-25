<template>
    <div class=" min-w-[53%] max-w-[52%] flex mt-3">
        <div class="h-full min-w-[100%] flex flex-col">
            <p class="text-3lg text-black font-bold mt-2">Description</p>
            <textarea id="message" rows="4"
                class="mt-4 h-[200px] block p-2.5 w-full text-sm rounded-lg text-gray-900 bg-gray-50  border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
    <p class="text-2xl text-black font-bold mt-4">Program steps</p>
    
</template>




<script>
export default {
    name: "HTPworks",
};
</script>