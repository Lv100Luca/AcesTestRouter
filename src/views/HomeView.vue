<script setup lang="ts">

import router from "../router/index";
import {ref} from "vue";
import {useCounterStore} from "@/stores/counter";
import {useUserDataStore} from "@/stores/userData";

const enabled = ref(true);
const username = ref('');
const lang = ref('');

const counterStore = useCounterStore();
const userDataStore = useUserDataStore();

function moveIt() {
  enabled.value = false;
  router.push("/app");
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

</script>


<template>
  <div id="Login" v-if="enabled">
    <button @click="counterStore.increment()">add 1</button>
    <br>
    <label> {{counterStore.count}}</label>
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
  <RouterView/>
</template>
