<script lang="ts" setup>
import { ref } from 'vue';
import MacrosPanel from '@/components/magic-list/MacrosPanel.vue';
import CharacterSettings from '@/components/character-settings/CharacterSettings.vue';
import CharacterListMenu from '@/components/character-list/CharacterListMenu.vue';

const tabTitle = ref(['Магия', 'Статы и Модификаторы', 'Персонажи'])
const tabInfo = reactive([
    {
        title: 'Магия',
        value: '0'
    },
    {
        title: 'Персонаж',
        value: '1'
    },
    {
        title: 'Персонажи',
        value: '2'
    },
])

// defineProps({
//   msg: String,
// });

const count = ref(0);
</script>

<template>
    <div>
        <Tabs value="0">
            <TabList>
                <Tab :value="tab.value" v-for="tab in tabInfo" :key="tab.title">
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
                <TabPanel value="2">
                    <CharacterListMenu />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<style scoped></style>
