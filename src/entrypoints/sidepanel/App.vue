<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { sendMsgToChat } from '@/utils/sendMsgToChat';


const testClick = () => {
  sendMsgToChat('Тестовая запись3!')
  sendMsgToChat('Тестовая запись! [[1d20+5]]')
  sendMsgToChat('/r 1d10+1d6')
  sendMsgToChat('/r 20')
}
</script>

<template>
  <!-- <div class="mainContainer">
    <a href="https://wxt.dev" target="_blank">
      <img src="/wxt.svg" class="logo" alt="WXT logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <HelloWorld msg="WXT + Vue" />
  </div> -->
  <div>
    <div>
      <button @click="testClick">test3</button>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  /* background: rgba(1, 1, 1, .7);
  z-index: 20000;
  position: relative; */
}
</style>
