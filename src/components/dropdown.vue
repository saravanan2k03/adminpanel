<template>
    <div class="hs-dropdown   inline-flex mt-2 ">
        <button id="hs-dropdown-basic" type="button"
            class="hs-dropdown-toggle py-3 px-4 w-[650px] inline-flex justify-between items-center gap-2  border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            {{ dropvalue }}
            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" />
            </svg>
        </button>

        <div class="hs-dropdown-menu w-[650px] transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            aria-labelledby="hs-dropdown-basic">
            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            v-for="(title, index) in DropDownData" :key="index" @click="ChangeDropdown(title)" >
            {{title}}
            </a>
        </div>
    </div>
</template>



<script>
export default {
    name: "dropdown",
    data() {
        return {
            dropvalue:"Select Category",
            DropDownData: ["Newsletter","Purchases","Downloads","Team Account"],
        };
    },
    methods:{
        ChangeDropdown(value){
            console.log(value);
            this.dropvalue = value
        }
    }
};
</script>