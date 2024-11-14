<script lang="ts" setup>
import HelloWorld from '@/src/components/HelloWorld.vue';


function onResult() {
  console.log('onResult');

}

function grabImages() {
  const textarea: any = document.querySelector('textarea[title="Text Chat Input"]')
  textarea.value = '12312312312'
}


function execScript(tab: any) {
  // Выполнить функцию на странице указанной вкладки
  // и передать результат ее выполнения в функцию onResult
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id, allFrames: true },
      func: grabImages
    },
    onResult
  )
}

const testClick = () => {
  console.log('clicks');
  console.log('document', document);

  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    // и если она есть, то выполнить на ней скрипт
    if (tab) {
      execScript(tab);
    } else {
      alert("There are no active tabs")
    }
  })

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
      <button @click="testClick">test</button>
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
