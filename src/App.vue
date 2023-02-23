<script setup lang="ts">
import {ref, type Ref} from 'vue';
import Question from "./Model/Question";
import Answer from "./Model/Answer";
import questionJson from "./Questions.json";
import AcesTest from "./Model/AcesTest";
import {Category} from "./Model/Categories";
import {useCounterStore} from "@/stores/counter";
import {useUserDataStore} from "@/stores/userData";
import router from "@/router";
//todo: checkout chart.js for chart representation
//todo: while/for loop over the questions for controlleed ending to the test -> run analysis

const counterStore = useCounterStore();
const userDataStore = useUserDataStore();

let questionData: Question[] = [];

const enabled = ref(true);
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
    acesTest.Questions[index.value].time = elapsedTime;
    console.log(elapsedTime / 1000)

    console.log(selectedNegative.value + " / " + selectedPositive.value);

    acesTest.addPositiveCategory(selectedPositive.value);
    acesTest.addNegativeCategory(selectedNegative.value);


    acesTest.setSelectedAnswer(index.value, selectedPositive.value, selectedNegative.value);


    console.log(acesTest.Questions[index.value].selectedNegative);
    console.log(acesTest.Questions[index.value].selectedPositive);
    index.value += 1;
    // index.value = (index.value + 1) % acesTest.Questions.length;
    if (index.value == acesTest.Questions.length) {
      endTest();
    }
    console.log(index.value + " / " + acesTest.Questions.length)
    lastAnswer = Date.now();
  }
}
</script>

<template>
  <div id="Test" v-if="enabled">
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
      <label :title="acesTest.Questions[index].Answer[0].hover">{{
          acesTest.Questions[index].Answer[0].prompt
        }}</label> <br>
      -<input type="radio" id="cMinus" name="minus" value=1 v-model="selectedNegative"> +<input type="radio" id="cPlus"
                                                                                                name="plus"
                                                                                                :value="Category.C"
                                                                                                v-model="selectedPositive">
      <label :title="acesTest.Questions[index].Answer[1].hover">{{
          acesTest.Questions[index].Answer[1].prompt
        }}</label> <br>
      -<input type="radio" id="eMinus" name="minus" value=2 v-model="selectedNegative"> +<input type="radio" id="ePlus"
                                                                                                name="plus"
                                                                                                :value="Category.E"
                                                                                                v-model="selectedPositive">
      <label :title="acesTest.Questions[index].Answer[2].hover">{{
          acesTest.Questions[index].Answer[2].prompt
        }}</label> <br>
      -<input type="radio" id="sMinus" name="minus" value=3 v-model="selectedNegative"> +<input type="radio" id="sPlus"
                                                                                                name="plus"
                                                                                                :value="Category.S"
                                                                                                v-model="selectedPositive">
      <label :title="acesTest.Questions[index].Answer[3].hover">{{
          acesTest.Questions[index].Answer[3].prompt
        }}</label> <br>
      {{ index + 1 }}/{{ acesTest.Questions.length }}
      <button type="reset" @click="submitQuestion();" id="submit"
              name="submitButton">Next
      </button>
    </form>
  </div>
  <pre>
    {{ questionData }}
  </pre>
<!--  <router-view></router-view>-->
</template>

<style></style>
