<script setup lang="ts">

// todo: add keying logoc to the questions
import Question from "@/Model/Question";

const props = defineProps(
    {
      // questionArray: [],
      word1: String,
      word2: String,
      word3: String,
      word4: String,
    });
const emits = defineEmits(
    ['update:selectedPositive', 'update:selectedNegative', 'submit']
)

const show = true;

</script>

<template>
  <div class="questionBlock">
    <form>
      <div class="questionRow">
        <label class="questionLabel">{{ word1 }}</label>
<!--        <label class="questionLabel">{{ props.questionArray[0] }}</label>-->
        <label class="negative-answer-label">-
          <input class="negative-answer-radio" @input="$emit('update:selectedNegative', $event.target.value)"
                 type="radio"
                 v-show="show" value="0" name="minus"></label>
        <label class="positive-answer-label"> +
          <input class="positive-answer-radio" @input="$emit('update:selectedPositive', $event.target.value)"
                 type="radio"
                 v-show="show" value="0" name="plus"></label>
      </div>
      <br>
      <div class="questionRow">
        <label class="questionLabel">{{ word2 }}</label>
<!--        <label class="questionLabel">{{ props.questionArray[1] }}</label>-->
        <label class="negative-answer-label"> -
          <input class="negative-answer-radio" @input="$emit('update:selectedNegative', $event.target.value)"
                 type="radio"
                 v-show="show" value="1" name="minus"></label>
        <label class="positive-answer-label"> +
          <input class="positive-answer-radio" @input="$emit('update:selectedPositive', $event.target.value)"
                 type="radio"
                 v-show="show" value="1" name="plus"></label>
      </div>
      <br>
      <div class="questionRow">
        <label class="questionLabel">{{ word3 }}</label>
<!--        <label class="questionLabel">{{ props.questionArray[2] }}</label>-->
        <label class="negative-answer-label"> -
          <input class="negative-answer-radio" @input="$emit('update:selectedNegative', $event.target.value)"
                 type="radio"
                 v-show="show" value="2" name="minus"></label>
        <label class="positive-answer-label"> +
          <input class="positive-answer-radio" @input="$emit('update:selectedPositive', $event.target.value)"
                 type="radio"
                 v-show="show" value="2" name="plus"></label>
      </div>
      <br>
      <div class="questionRow">
        <label class="questionLabel">{{ word4 }}</label>
<!--        <label class="questionLabel">{{ props.questionArray[3] }}</label>-->
        <label class="negative-answer-label"> -
          <input class="negative-answer-radio" @input="$emit('update:selectedNegative', $event.target.value)"
                 type="radio"
                 v-show="show" value="3" name="minus"></label>
        <label class="positive-answer-label"> +
          <input class="positive-answer-radio" @input="$emit('update:selectedPositive', $event.target.value)"
                 type="radio"
                 v-show="show" value="3" name="plus"></label>
      </div>
      <input class="submit" id="submitButton" @click="$emit('submit')" type="reset" value="Next ->">
    </form>

  </div>
  <br>
</template>
<style>

.submit {
  margin: 10px;
  width: 100px;


}

.questionBlock {
  border: solid crimson 2px;

}

.questionRow {
  border: solid grey 2px;
  margin: 10px;
  height: 30px;
}

.negative-answer-radio:checked + .negative-answer-label {
  background: red;
}

input[type="radio"]:checked + label {
  color: red;
  margin: 200px;
  visibility: hidden;
}

.negative-answer-radio {
  background: red;


}

</style>