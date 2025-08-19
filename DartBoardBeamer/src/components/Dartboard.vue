<template>
  <div class="container" :style="{ width: boardSize + 'px', height: boardSize + 'px' }">
    <div class="board" :style="{ transform: rotation }">
      <div
        id="Bull"
        :style="{
          width: bullSize + 'px',
          height: bullSize + 'px',
          marginLeft: `-${bullSize / 2}px`,
          marginTop: `-${bullSize / 2}px`
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
  background-color: pink;
}
.board {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #fff 0deg 18deg,
    #000 18deg 36deg,
    #000 36deg 54deg,
    #000 54deg 72deg,
    #000 72deg 90deg,
    #000 90deg 108deg,
    #000 108deg 126deg,
    #000 126deg 144deg,
    #000 144deg 162deg,
    #000 162deg 180deg,
    #000 180deg 198deg,
    #000 198deg 216deg,
    #000 216deg 234deg,
    #000 234deg 252deg,
    #000 252deg 270deg,
    #000 270deg 288deg,
    #000 288deg 306deg,
    #000 306deg 324deg,
    #000 324deg 342deg,
    #000 342deg 360deg
  );
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
#Bull {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: red;
  border: 2px solid black;
}
</style>
