import {ref, computed} from "vue";
import {defineStore} from "pinia";

export const useUserDataStore = defineStore('userData', () => {
    const userName = ref("");
    const language = ref("");

    const positiveResultArray = ref([0,0,0,0]);
    const negativeResultArray = ref([0,0,0,0]);

    const answeredQuestionsArray = ref([]);

    return {userName, language, positiveResultArray, negativeResultArray, answeredQuestionsArray}
})