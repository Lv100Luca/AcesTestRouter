<script setup lang="ts">
import {ref} from "vue";

const selected = ref("");
const selectedPos = ref("");
const selectedNeg = ref("");
</script>

<template>

  <label>TEST HIDDEN RADIO A<input v-model="selected" v-show="false" value="A" title="TESTa" type="radio"
                                   name="a"></label><br>
  <label>TEST HIDDEN RADIO B<input v-model="selected" v-show="false" value="B" title="TESTb" type="radio"
                                   name="a"></label><br>
  <label>TEST HIDDEN RADIO C<input v-model="selected" v-show="false" value="C" title="TESTc" type="radio"
                                   name="a"></label><br>
  <label>TEST HIDDEN RADIO D<input v-model="selected" v-show="false" value="D" title="TESTd"
                                                    type="radio"
                                                    name="a"></label><br>
  <label> out: {{ selected }}</label><br>
<br>

  <div>

    <label>Label A</label> <label>- <input v-model="selectedNeg" type="radio" v-show="false" value="0" name="minus"></label> <label>+ <input v-model="selectedPos" type="radio" v-show="false" value="0" name="plus"></label>
    <label>Label C</label> <label>- <input v-model="selectedNeg" type="radio" v-show="false" value="1" name="minus"></label> <label>+ <input v-model="selectedPos" type="radio" v-show="false" value="1" name="plus"></label>
    <label>Label E</label> <label>- <input v-model="selectedNeg" type="radio" v-show="false" value="2" name="minus"></label> <label>+ <input v-model="selectedPos" type="radio" v-show="false" value="2" name="plus"></label>
    <label>Label S</label> <label>- <input v-model="selectedNeg" type="radio" v-show="false" value="3" name="minus"></label> <label>+ <input v-model="selectedPos" type="radio" v-show="false" value="3" name="plus"></label>
    <br>
    <label>{{selectedNeg}} / {{selectedPos}}</label>
  </div>
</template>
<style>

</style>