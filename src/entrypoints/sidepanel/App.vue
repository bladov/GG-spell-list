<script lang="ts" setup>
import 'primeicons/primeicons.css'
import HelloWorld from '@/components/HelloWorld.vue';
import { useCharacterStore } from '@/store/characterStore/index';
import { sendMsgToChat } from '@/utils/sendMsgToChat';
import PanelMenu from 'primevue/panelmenu';

const characterStore = useCharacterStore()

const testClick = () => {
  sendMsgToChat('Тестовая запись3!')
  sendMsgToChat('Тестовая запись! [[1d20+5]]')
  sendMsgToChat('/r 1d10+1d6')
  sendMsgToChat(`
  &{template:DnD35StdRoll} {{spellflag=true}} {{name=Дима }}{{**Яркий Свет 💡**}}  {{Испытание(Обнаружение)  (Свет⭐⭐⭐): [[ ?{кубов?| 20,1d20cs>[[20]]| 24,1d24cs>[[23]]| 30,1d30cs>[[28]]| 16, 1d16cs>[[17]]| 14, 1d14cs>[[16]]| 12, 1d12cs>[[15]]} + [[3]] + floor([[4]]/2)*ceil([[2]]*0.01) + [[3]]  ]] }}   {{notes=Яркий Свет Испытание(Обнаружение) КубД Создаёт область 6радиус особо яркого света, существа с темновиденьем
  `)
}

const items = ref([
  {
    label: 'Files',
    icon: 'pi pi-file',
    items: [
      {
        label: 'Documents',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Invoices',
            items: [
              {
                label: 'Pending',
              },
              {
                label: 'Paid',
              }
            ]
          },
          {
            label: 'Clients',
          }
        ]
      },
      {
        label: 'Images',
        items: [
          {
            label: 'Logos',
          }
        ]
      }
    ]
  },
  {
    label: 'Cloud',
    items: [
      {
        label: 'Upload',
      },
      {
        label: 'Download',
      },
      {
        label: 'Sync',
      }
    ]
  },
  {
    label: 'Devices',
    items: [
      {
        label: 'Phone',
      },
      {
        label: 'Desktop',
      },
      {
        label: 'Tablet',
      }
    ]
  }
]);
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
      <button @click="testClick">
        {{ characterStore.test }}
      </button>
    </div>

    <div>
      <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-80" />
      </div>
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
