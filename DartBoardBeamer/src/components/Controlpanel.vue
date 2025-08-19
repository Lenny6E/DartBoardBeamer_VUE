<template>
  <div class="controls" v-show="!hideControls">
    <label>BoardSize:</label>
    <input type="range" v-model.number="localBoardSize" min="0" max="800" />
    <input type="number" v-model.number="localBoardSize" min="0" max="800" />
    <br />

    <label>BullSize:</label>
    <input type="range" v-model.number="localBullSize" min="0" max="300" />
    <input type="number" v-model.number="localBullSize" min="0" max="300" />
    <br />

    <label>Rotate to number (1-20):</label>
    <input type="number" v-model.number="localRotateNumber" min="0" max="20" />
    <br /><br />

    <button @click="$emit('random')">Random Number</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  boardSize: Number,
  bullSize: Number,
  rotateNumber: Number,
  hideControls: Boolean
});

const emit = defineEmits([
  "update:boardSize",
  "update:bullSize",
  "update:rotateNumber",
  "random"
]);

const localBoardSize = ref(props.boardSize);
const localBullSize = ref(props.bullSize);
const localRotateNumber = ref(props.rotateNumber);

watch(localBoardSize, (val) => emit("update:boardSize", val));
watch(localBullSize, (val) => emit("update:bullSize", val));
watch(localRotateNumber, (val) => emit("update:rotateNumber", val));

watch(() => props.boardSize, (val) => (localBoardSize.value = val));
watch(() => props.bullSize, (val) => (localBullSize.value = val));
watch(() => props.rotateNumber, (val) => (localRotateNumber.value = val));
</script>

<style scoped>
.controls {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}
</style>
