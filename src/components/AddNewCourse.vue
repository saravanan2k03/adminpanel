<template>
    <div class="min-w-[15%]"></div>
    <div class="h-screen min-w-[85%] max-w-[85%] flex flex-col p-2">
        <div class="flex items-stretch justify-between min-h-[11%] p-3 border-b-2 border-gray-300 items-center">
            <p class="text-2xl text-black font-semibold mt-4">New Course</p>
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
            <p class="text-3lg text-black font-semibold mt-4">Course Category</p>
            <dropdown></dropdown>
            <p class="text-3lg text-black font-bold mt-4">Course header</p>
            <div class="min-h-[20%] max-h-[20%] min-w-[52%] max-w-[52%] mt-2 flex">
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
            <div class="min-h-[20%] max-h-[20%] min-w-[55%] max-w-[55%] flex">
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
            <div class="min-h-[25%] max-h-[25%] min-w-[53%] max-w-[52%] flex mt-4">
                <div class="h-full min-w-[100%] flex flex-col">
                    <p class="text-3lg text-black font-bold mt-2">Upload Syllabus</p>
                    <form class="mt-3 border-2 border-gray-300">
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input"
                            class="block w-full shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400" />
                    </form>
                </div>
            </div>
            <div class="min-h-[25%] max-h-[25%] min-w-[53%] max-w-[52%] flex mt-4">
                <div class="h-full min-w-[100%] flex flex-col">
                    <p class="text-3lg text-black font-bold mt-2">Upload Thumbnail Image</p>
                    <form class="mt-3 border-2 border-gray-300">
                        <label for="file-input" class="sr-only">Choose file</label>
                        <input type="file" name="file-input" id="file-input"
                            class="block w-full shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdown from "../components/dropdown.vue";
export default {
    name: "AddNewCourse",
    components: {
        dropdown,
    },
};
</script>
