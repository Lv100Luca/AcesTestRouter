<script setup lang="ts">

import {useCounterStore} from "@/stores/counter";
import {useUserDataStore} from "@/stores/userData";
import {Line} from "vue-chartjs";
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import BarChart from "./chart.vue";
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const counterStore = useCounterStore();
const userDataStore = useUserDataStore();

const posArray = userDataStore.positiveResultArray;
const negArray = userDataStore.negativeResultArray;

const labelsForQuestions = ["A", "C", "E", "S"];
const labelsForTimes = [];
for (let i = 1; i <= 28; i++) {
  labelsForTimes.push(i);
}

const datapointsQuestionsPos = posArray;
const datapointsQuestionsNeg = negArray;
const datapointsTimes = getTimesFromQuestions();

const dataTimes = {
  labels: labelsForTimes,
  datasets: [
    {
      label: "Time for Each Question",
      data: datapointsTimes,
      borderColor: "rgb(25,156,184)",
      tension: 0,

    }
  ]
}


function getTimesFromQuestions(): any[] {
  let outArray: number[] = [];
  // for (let i = 0; i < userDataStore.answeredQuestionsArray.length - 1; i++) {
  //   outArray.push(userDataStore.answeredQuestionsArray[i].time);
  // }
  for (let i = 1; i <= 28; i++) {
    outArray.push(i);
  }
  return outArray;
}

console.log(userDataStore.userName);
</script>

<template>
  <div>
    <label>
      Name: {{ userDataStore.userName }} / Lang: {{ userDataStore.language }}
    </label>
    <br>
    <label>
      pos: {{ userDataStore.positiveResultArray }} / neg: {{ userDataStore.negativeResultArray }}
    </label>
    <br>
    <label for="">
      times: <br>{{ getTimesFromQuestions() }}
    </label>
    <br>
    <BarChart/>
    <br>
    <br>
    <br>
    <br>
    <pre>
      {{ userDataStore.answeredQuestionsArray }}
    </pre>
  </div>


</template>