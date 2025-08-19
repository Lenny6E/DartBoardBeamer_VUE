<template>
  <div class="trainer">
    <BackButton />

    <!-- Hide Controls Toggle -->
    <label class="hide-controls">
      <input type="checkbox" v-model="hideControls" />
      Hide Controls
    </label>

    <!-- Board -->
    <DartBoard :boardSize="boardSize" :bullSize="bullSize" :rotation="rotation" />

    <!-- Controls -->
    <ControlPanel
      :boardSize="boardSize"
      :bullSize="bullSize"
      :rotateNumber="rotateNumber"
      :hideControls="hideControls"
      @update:boardSize="boardSize = $event"
      @update:bullSize="bullSize = $event"
      @update:rotateNumber="rotateNumber = $event"
      @random="generateRandomNumber"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import DartBoard from "../components/DartBoard.vue";
import ControlPanel from "../components/ControlPanel.vue";
import BackButton from "../components/BackButton.vue";

const boardSize = ref(500);
const bullSize = ref(50);
const rotateNumber = ref(0);
const hideControls = ref(false);
const rotation = ref("rotate(0deg)");

watch(rotateNumber, (val) => {
  if (val === 0) {
    rotation.value = "rotate(0deg)";
  } else {
    rotation.value = `rotate(${(val - 1) * 18 + 9}deg)`;
  }
});

function generateRandomNumber() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  const result = numbers[Math.floor(Math.random() * numbers.length)];
  rotateNumber.value = result;
}

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      generateRandomNumber();
    }
  });
});
</script>

<style scoped>
.trainer {
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
}
.hide-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  z-index: 1000;
}
</style>
