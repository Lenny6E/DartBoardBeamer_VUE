<template>
  <div class="container" :style="{ width: boardSize + 'px', height: boardSize + 'px' }">
    <div class="board" :style="{ transform: rotation }">
      <div class="board2"></div>
      <div
        class="bull"
        :style="{
          width: bullSize + 'px',
          height: bullSize + 'px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }"
      ></div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  boardSize: { type: Number, required: true },
  bullSize: { type: Number, required: true },
  rotation: { type: String, required: true }
});
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: grey;
  overflow: hidden;
}

.board {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #fff 0deg 18deg,
    #000 18deg 360deg
  );
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform-origin: center center;
  will-change: transform;
}

.bull {
  position: absolute;
  background-color: red;
  border-radius: 50%;
  z-index: 2;
}
.board2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: black;
  z-index: 1;
}

</style>
