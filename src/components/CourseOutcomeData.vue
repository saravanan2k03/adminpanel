<template>
    <p class="text-3lg text-black font-semibold mt-4">Course Outcome Description</p>
    <div class="min-w-[53%] max-w-[53%]">
        <input type="text"
            class="py-3 px-4 block w-full  border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="enter short description" />
    </div>
    <p class="text-3lg text-black font-semibold mt-3">Outcomes</p>
    <div class="min-w-[53%] max-w-[53%] flex">
        <div class="w-full flex flex-col">
            <OutComes v-for="(outcome, index) in outcomes" :key="index" :index="index" />
        </div>
    </div>
    <div class="min-w-[53%] max-w-[53%] flex justify-end mt-4" @click="removeOutcome()">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_192_5679)">
                <path
                    d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
                    fill="#1F2937" />
                <path
                    d="M4 8C4 7.86739 4.05268 7.74021 4.14645 7.64645C4.24021 7.55268 4.36739 7.5 4.5 7.5H11.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H4.5C4.36739 8.5 4.24021 8.44732 4.14645 8.35355C4.05268 8.25979 4 8.13261 4 8Z"
                    fill="#1F2937" />
            </g>
            <defs>
                <clipPath id="clip0_192_5679">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>

    </div>
    <div class="  min-w-[51%] max-w-[51%] flex justify-end">

        <button class="text-3lg text-black font-semibold mt-4" @click="addOutcome">Add another</button>
    </div>
</template>



<script>
import OutComes from "../components/OutComes.vue"
export default {
    name: "Courseoutcome",
    components: {
        OutComes,
    },
    data() {
        return {
            outcomes: [""],
        };
    },
    methods: {
        addOutcome() {
            this.outcomes.push("");
        },
        removeOutcome() {
            if (this.outcomes.length > 0) {
                this.outcomes.pop();
            }
        },
    },


};
</script>