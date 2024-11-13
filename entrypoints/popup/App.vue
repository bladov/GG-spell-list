<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="mainContainer">
    <a href="https://wxt.dev" target="_blank">
      <img src="/wxt.svg" class="logo" alt="WXT logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <HelloWorld msg="WXT + Vue" />
  </div>
</template>

<style scoped>
.mainContainer {
  background: rgba(1, 1, 1, .7);
  z-index: 20000;
  position: relative;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
