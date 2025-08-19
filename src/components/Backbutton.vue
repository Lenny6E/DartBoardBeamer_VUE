<template>
  <router-link to="/" class="back-button">⬅ Back to Home</router-link>
</template>

<style scoped>
.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 16px;
  background-color: red;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
}
.back-button:hover {
  background: rgb(120, 0, 0);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
