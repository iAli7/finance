<template>
  <div class="app">
    <div class="sidebar">
      <img src="/src/images/logo.png" class="sidebar-logo" alt="logo">
      <wallet></wallet>
    </div>
    <content></content>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600&display=swap');

body {
  margin: 0;
  padding: 0;
  background: #F6FAFF;
  font-family: 'Rajdhani', sans-serif;
}

.app {
  display: flex;
  gap: 1rem;
  height: 100vh;
}

.sidebar {
  flex: 0 0 15%;
  padding: 20px;
  background: #fff;
  text-align: center;

  &-logo{
    height: 50px;
    position: relative;
  }
}
</style>