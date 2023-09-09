<template>
    <p class="text-3lg text-black font-semibold mt-4">Program Category</p>
    <ProgramDropdown></ProgramDropdown>
    <p class="text-3lg text-black font-bold mt-4">Program header</p>
    <div class=" min-w-[52%] max-w-[52%] mt-2 flex">
        <div class="h-full min-w-[50%] flex flex-col">
            <p class="text-3lg text-black font-semibold mt-2">
                Grey course title
            </p>
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter title" />
        </div>
        <div class="h-full min-w-[50%] flex flex-col ml-2">
            <p class="text-3lg text-black font-semibold mt-2">
                Black course title
            </p>
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter title" />
        </div>
    </div>
    <div class=" min-w-[55%] max-w-[55%] flex">
        <div class="h-full min-w-[33%] flex flex-col p-1">
            <p class="text-3lg text-black font-semibold mt-2">Format</p>
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter format" />
        </div>
        <div class="h-full min-w-[32%] flex flex-col p-1">
            <p class="text-3lg text-black font-semibold mt-2">Price</p>
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter price" />
        </div>
        <div class="h-full min-w-[32%] flex flex-col p-1">
            <p class="text-3lg text-black font-semibold mt-2">Duration</p>
            <input type="text"
                class="py-3 px-4 block w-full mt-4 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="enter duration" />
        </div>
    </div>
    <div class=" min-w-[53%] max-w-[52%] flex mt-3">
        <div class="h-full min-w-[100%] flex flex-col">
            <p class="text-3lg text-black font-bold mt-2">Upload Syllabus</p>
            <form class="mt-3 border-2 border-gray-300">
                <label for="file-input" class="sr-only">Choose file</label>
                <input type="file" name="file-input" id="file-input"
                    class="block w-full shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400" />
            </form>
        </div>
    </div>
    <div class=" min-w-[53%] max-w-[52%] flex mt-3">
        <div class="h-full min-w-[100%] flex flex-col">
            <p class="text-3lg text-black font-bold mt-2">Upload Thumbnail Image</p>
            <form class="mt-3 border-2 border-gray-300">
                <label for="file-input" class="sr-only">Choose file</label>
                <input type="file" name="file-input" id="file-input"
                    class="block w-full shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400" />
            </form>
        </div>
    </div>
    <div class=" min-w-[53%] max-w-[52%] flex mt-3">
        <div class="h-full min-w-[100%] flex flex-col">
            <p class="text-3lg text-black font-bold mt-2">Description after thumbnail</p>
            <textarea id="message" rows="4"
                class="mt-4 h-[200px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>
</template>




<script>
import ProgramDropdown from "../components/ProgrameDropdown.vue"
export default {
    name: "ProgramData",
    components: {
        ProgramDropdown,
    },

};
</script>