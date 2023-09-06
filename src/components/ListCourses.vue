<template>
    <div class="flex items-stretch justify-between items-end min-h-[9.2%] pt-3 border-b-2 border-gray-300">
        <div class="h-full min-w-[40%] flex items-center">
            <p class="text-3lg text-gray-600 ml-4 font-medium">{{ Name }}</p>
        </div>
        <div class="h-full min-w-[60%] flex items-center justify-between">
            <p class="text-3lg text-gray-600 ml-7 font-medium min-w-[50%]">{{ ProgramCategory }}</p>
            <div>
                <div class="flex">
                    <p class="text-3lg text-blue-500  font-medium mr-3">Edit</p>
                    <div class="pr-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_178_4256" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                            height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_178_4256)">
                            <path
                                d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z"
                                fill="#1C1B1F" />
                        </g>
                    </svg>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>



<script>
export default {
    name: 'ListCourses',
    props:{
        Name:String,
        ProgramCategory:String,
    }
}
</script>