<template>
  <div class="index">
    <h1>Dart Beamer Trainer</h1>
    <router-link to="/trainer" class="btn">Start Training</router-link>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black;
  color: white;
}
.btn {
  margin-top: 20px;
  padding: 12px 20px;
  background: red;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}
</style>
