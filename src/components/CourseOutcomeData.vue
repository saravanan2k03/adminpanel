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
    <div class="  min-w-[51%] max-w-[51%] flex justify-end mt-3">
        <button class="text-3lg text-black font-semibold" @click="addOutcome">Add another</button>
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
    },


};
</script>