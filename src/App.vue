<script setup lang="ts">
import {ref} from 'vue';
import Question from "./Model/Question";
import Answer from "./Model/Answer";
import questionJson from "./Questions.json";
import AcesTest from "./Model/AcesTest";
import {Category} from "./Model/Categories";
import {useCounterStore} from "@/stores/counter";
import {useUserDataStore} from "@/stores/userData";
import router from "@/router";
import QuestionView from "@/views/HomeView.vue";
import LabledInput from "@/views/HomeView.vue";
//todo: checkout chart.js for chart representation
//todo: while/for loop over the questions for controlleed ending to the test -> run analysis

const counterStore = useCounterStore();
const userDataStore = useUserDataStore();

let questionData: Question[] = [];

let key = [
  [Category.E, Category.S, Category.A, Category.C], [Category.E, Category.S, Category.A, Category.C], [Category.E, Category.S, Category.A, Category.C], [Category.E, Category.S, Category.A, Category.C],
  [Category.S, Category.A, Category.C, Category.E], [Category.S, Category.A, Category.C, Category.E], [Category.S, Category.A, Category.C, Category.E], [Category.S, Category.A, Category.C, Category.E],
  [Category.A, Category.C, Category.E, Category.S], [Category.A, Category.C, Category.E, Category.S], [Category.A, Category.C, Category.E, Category.S], [Category.A, Category.C, Category.E, Category.S],
  [Category.C, Category.A, Category.S, Category.E], [Category.C, Category.A, Category.S, Category.E], [Category.C, Category.A, Category.S, Category.E], [Category.C, Category.A, Category.S, Category.E],
  [Category.A, Category.S, Category.E, Category.C], [Category.A, Category.S, Category.E, Category.C], [Category.A, Category.S, Category.E, Category.C], [Category.A, Category.S, Category.E, Category.C],
  [Category.S, Category.C, Category.E, Category.A], [Category.S, Category.C, Category.E, Category.A], [Category.S, Category.C, Category.E, Category.A], [Category.S, Category.C, Category.E, Category.A],
  [Category.E, Category.C, Category.A, Category.S], [Category.E, Category.C, Category.A, Category.S], [Category.E, Category.C, Category.A, Category.S], [Category.E, Category.C, Category.A, Category.S],
];

let selectedPositive = ref<null | Category>(null);
let selectedNegative = ref<null | Category>(null);
let index = ref(0);


for (let i = 0; i < questionJson.length; i++) {
  questionData.push(new Question([
    new Answer(questionJson[i]._Answer[0]._prompt, questionJson[i]._Answer[0]._category, "1st Definition will be here"),
    new Answer(questionJson[i]._Answer[1]._prompt, questionJson[i]._Answer[1]._category, "2nd Definition will be here"),
    new Answer(questionJson[i]._Answer[2]._prompt, questionJson[i]._Answer[2]._category, "3rd Definition will be here"),
    new Answer(questionJson[i]._Answer[3]._prompt, questionJson[i]._Answer[3]._category, "4th Definition will be here")
  ]));
}
let acesTest: AcesTest = new AcesTest(questionData);

let currentQuestion = ref(acesTest.getQuestion(index.value));

let lastAnswer: number = Date.now();

function endTest() {
  console.log("Showing Result")
  router.push("/result");
}

function submitQuestion(): void {
  if (selectedPositive.value == null || selectedNegative.value == null) {
    alert("null");
  } else if (selectedPositive.value == selectedNegative.value) {
    alert("gleich");
  } else {
    let elapsedTime = Date.now() - lastAnswer;
    currentQuestion.value.time = elapsedTime;

    console.log(elapsedTime / 1000)

    console.log(selectedNegative.value + " / " + selectedPositive.value);

    acesTest.addPositiveCategory(selectedPositive.value);
    acesTest.addNegativeCategory(selectedNegative.value);

    acesTest.setSelectedAnswer(index.value, selectedPositive.value, selectedNegative.value);

    console.log(currentQuestion.value.selectedNegative);
    console.log(currentQuestion.value.selectedPositive);

    // userDataStore.answeredQuestionsArray.push(currentQuestion.value);
    console.log(acesTest.hasNextQuestion(index.value));
    if (acesTest.hasNextQuestion(index.value)) { // if there is more questions -> continue the test
      index.value++;
      currentQuestion.value = acesTest.getQuestion(index.value);
    } else { // implies there are no more Questions in the Test -> end test

      userDataStore.positiveResultArray = acesTest.positiveResult;
      userDataStore.negativeResultArray = acesTest.negativeResult;
      userDataStore.answeredQuestionsArray = acesTest.QuestionArray;
      endTest();
    }

    console.log(index.value + " / " + (acesTest.length - 1));
    lastAnswer = Date.now();
  }
}
</script>

<template>
  <div id="Test">
    <button @click="counterStore.increment()">{{ counterStore.count }}</button>
    <br>
    <label>{{ userDataStore.userName }} / {{ userDataStore.language }}</label>
    <h1> Headline</h1>
    <br>
    <label id="ResultA">X: {{ selectedNegative }} / {{ selectedPositive }}</label><br>
    <form>
      Pos:
      {{ acesTest.positiveResult }}
      Neg:
      {{ acesTest.negativeResult }}
    </form>
    <br>
    <form name="questions">
      -<input type="radio" id="aMinus" name="minus" value=0 v-model="selectedNegative"> +<input type="radio" id="aPlus"
                                                                                                name="plus"
                                                                                                :value="Category.A"
                                                                                                v-model="selectedPositive">
      <label :title="currentQuestion.AnswerArray[key[index][0]].hover">{{
          currentQuestion.AnswerArray[key[index][0]].prompt
        }}</label> <br>
      -<input type="radio" id="cMinus" name="minus" value=1 v-model="selectedNegative"> +<input type="radio" id="cPlus"
                                                                                                name="plus"
                                                                                                :value="Category.C"
                                                                                                v-model="selectedPositive">
      <label :title="currentQuestion.AnswerArray[key[index][1]].hover">{{
          currentQuestion.AnswerArray[key[index][1]].prompt
        }}</label> <br>
      -<input type="radio" id="eMinus" name="minus" value=2 v-model="selectedNegative"> +<input type="radio" id="ePlus"
                                                                                                name="plus"
                                                                                                :value="Category.E"
                                                                                                v-model="selectedPositive">
      <label :title="currentQuestion.AnswerArray[key[index][2]].hover">{{
          currentQuestion.AnswerArray[key[index][2]].prompt
        }}</label> <br>
      -<input type="radio" id="sMinus" name="minus" value=3 v-model="selectedNegative"> +<input type="radio" id="sPlus"
                                                                                                name="plus"
                                                                                                :value="Category.S"
                                                                                                v-model="selectedPositive">
      <label :title="currentQuestion.AnswerArray[key[index][3]].hover">{{
          currentQuestion.AnswerArray[key[index][3]].prompt
        }}</label> <br>
      {{ index + 1 }}/{{ acesTest.length }}
      <button type="reset" @click="submitQuestion();" id="submit"
              name="submitButton">Next
      </button>
    </form>
  </div>
  <div>
    <QuestionView :word1="acesTest.getQuestionStringArray(index)[0]" :word2="acesTest.getQuestionStringArray(index)[1]"
                  :word3="acesTest.getQuestionStringArray(index)[2]"
                  :word4="acesTest.getQuestionStringArray(index)[3]"></QuestionView>

  </div>
  <pre>
    {{ questionData }}
  </pre>
  <!--  <router-view></router-view>-->
</template>

<style></style>
