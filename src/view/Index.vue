<template>
  <div class="index">
    <h1>Dart Beamer Trainer</h1>
    <router-link to="/trainer" class="btn">Segmente Training (alle)</router-link>
    <router-link to="/scoring" class="btn">Scoring Training (20,19 und 18)</router-link>
    <router-link to="/doppel" class="btn">Doppel Training (alle)</router-link>
    <router-link to="/wichtigeDoppel" class="btn">Wichtige Doppel</router-link>
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
