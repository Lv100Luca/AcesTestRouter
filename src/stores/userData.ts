import {ref, computed, reactive} from "vue";
import {defineStore} from "pinia";
import type Question from "@/Model/Question";

export const useUserDataStore = defineStore('userData', () => {
    const userName = ref("");
    const language = ref("");

    const positiveResultArray = ref([0,0,0,0]); // group into acesTest
    const negativeResultArray = ref([0,0,0,0]);

    const answeredQuestionsArray = reactive<Question[]>([]); //reative


    return {userName, language, positiveResultArray, negativeResultArray, answeredQuestionsArray}
})