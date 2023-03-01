<script setup lang="ts">

import router from "../router/index";
import {ref} from "vue";
import {useCounterStore} from "@/stores/counter";
import {useUserDataStore} from "@/stores/userData";
import BarChart from "./chart.vue";
import LabledInput from "@/components/labledInput.vue";
import Questions from "@/components/questions.vue";
import ExampleProp from "@/components/exampleProp.vue";
import QuestionView from "@/components/QuestionView.vue";
import {Category} from "@/Model/Categories";
import Question from "@/Model/Question";


const enabled = ref(true);
const username = ref('Luca');
const lang = ref('German');

const counterStore = useCounterStore();
const userDataStore = useUserDataStore();

function moveIt() {
  enabled.value = false;
  router.push("/app");
  console.log(enabled.value)
}

function onNextButton() {
  if (username.value === ('')) {
    alert("Enter a Name");
  } else {
    if (lang.value === '') {
      lang.value = 'English';
    }
    userDataStore.userName = username.value;
    userDataStore.language = lang.value;
    moveIt();
  }
}

const text = ref("");
const hmNeg = ref("Neg");
const hmPos = ref("Pos");
const i = ref(0);
// applyKey([Category.E, Category.S, Category.A, Category.C], ["A", "B", "C", "D"])
//
// function applyKey(key: Category[], questions: Question[]) {
//
//   return [questions[key[0]],];
// }
</script>


<template>
  <div id="Login" v-if="enabled" v-show="enabled">
    <!--    <QuestionView :question-array="QA" @update:selectedNegative="newValue => hmNeg = newValue"-->
    <!--                  @update:selectedPositive="newValue => hmPos = newValue" @submit="i++"/>-->
    <label>{{ i }}</label>
    <br><br><br>

    <questions></questions>
    <div class="example radioButtonSelect">
      <h4>Select Color</h4>
      <label class="radio red">
        <input type="radio" name="group1"/>
        <span>Red</span>
      </label>
      <label class="radio blue">
        <input type="radio" name="group1"/>
        <span>Blue</span>
      </label>
      <label class="radio orange">
        <input type="radio" name="group1"/>
        <span>Orange</span>
      </label>
    </div>
    <labled-input v-model="text" placeholder="HHM"/>
    {{ text }}

    <br>

    <br>

    <button @click="counterStore.increment()">add 1</button>
    <br>
    <label> {{ counterStore.count }}</label>

  </div>
  <div v-if="enabled" v-show="enabled">
    <h1>Trenz AcesTest</h1>
    <br>
    <label>Name: <br><input v-model="username"></label>
    <br>
    <select v-model="lang">
      <option disabled value=""> Choose Language:</option>
      <option>German</option>
      <option>English</option>
      <option>Other lol</option>
    </select>
    <span>Selected: '{{ lang }}'</span>
    <br>
    <input type="button" @click="onNextButton" value="Next">
  </div>
  <div>
    lol
    <RouterView/>
  </div>


</template>

<style>

.radioButtonSelect .red input:checked + span {
  color: red;
  border-color: red;
  background: red;
}

.radioButtonSelect .blue input:checked + span {
  color: blue;
  border-color: blue;
}


.radioButtonSelect .orange input:checked + span {
  color: orange;
  border-color: orange;
}

</style>
