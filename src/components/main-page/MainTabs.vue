<script lang="ts" setup>
import CharacterSettings from '@/components/character-settings/CharacterSettings.vue';
import MacrosPanel from '@/components/magic-list/MacrosPanel.vue';

// const tabTitle = ref(['Магия', 'Статы и Модификаторы', 'Персонажи'])
const tabInfo = reactive([
  {
    title: 'Магия',
    value: '0',
  },
  {
    title: 'Персонаж',
    value: '1',
  },
])

// defineProps({
//   msg: String,
// });
</script>

<template>
  <div>
    <Tabs value="0">
      <TabList>
        <Tab v-for="tab in tabInfo" :key="tab.title" :value="tab.value">
          {{ tab.title }}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <MacrosPanel />
        </TabPanel>
        <TabPanel value="1">
          <CharacterSettings />
        </TabPanel>
        <!-- <TabPanel value="2">
          <CharacterListMenu />
        </TabPanel> -->
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped></style>
