<template>
    <div>
        <div class="wrapper">
            <div class="card">
                <div class="mb-5" :style="{ position: 'relative', height: '50px' }">
                    <SpeedDial :model="optionsAdd" direction="left"
                        :style="{ position: 'absolute', right: 0, bottom: 0 }"
                        :buttonProps="{ severity: 'success', rounded: true }"
                        :tooltipOptions="{ position: 'bottom', event: 'hover' }" />

                    <SpeedDial :model="optionsRemove" direction="right"
                        :style="{ position: 'absolute', left: 0, bottom: 0 }"
                        :buttonProps="{ severity: 'danger', rounded: true }"
                        :tooltipOptions="{ position: 'bottom', event: 'hover' }">
                        <template #button="{ toggleCallback }">
                            <Button severity="danger" outlined icon="pi pi-trash" class="border"
                                @click="toggleCallback" />
                        </template>
                    </SpeedDial>
                </div>
            </div>
        </div>

        <PanelMenu :model="items" class="w-full md:w-80">
            <template #item="{ item }">
                <div v-if="item.items" class="flex items-center px-4 py-2 cursor-pointer group mb-2">
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}11</span>
                </div>
                <div v-else class="grid gap-2 px-4 py-2 cursor-pointer group bg-gray-700 mb-1 rounded-md">
                    <div>
                        <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}22</span>
                    </div>
                    <div @click.stop="" class="flex items-center gap-2">
                        <Checkbox v-model="item.checked" inputId="ingredient1" name="pizza" value="Cheese" />
                        <label for="ingredient1"> Добавить в избранное </label>
                    </div>
                </div>
            </template>
        </PanelMenu>
        <!-- <template #item="{ item }">
                <div class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="['ml-2', { 'font-semibold': item.isCurrentCharacter }]">
                        {{ item.label }}
                    </span>
                </div>
            </template> -->

        <div class="card flex justify-center">
            <DialogAddFolder :isOpen="dialogAddFolderIsOpen" @addFolder="addFolder"
                @closeDialog="dialogAddFolderIsOpen = false" />

            <DialogAddCharacter :isOpen="dialogAddCharacterIsOpen" @addCharacter=""
                @closeDialog="dialogAddCharacterIsOpen = false" />
        </div>
    </div>
</template>

<script setup lang="ts">
import DialogAddFolder from '@/components/character-list/DialogAddFolder.vue'
import DialogAddCharacter from '@/components/character-list/DialogAddCharacter.vue'
import { logToActivePage } from '@/utils/consoleLogToActivePage';

const dialogRemoveFolderIsOpen = ref(false)
const dialogRemoveCharacterIsOpen = ref(false)
const dialogAddCharacterIsOpen = ref(false)
const dialogAddFolderIsOpen = ref(false)

const optionsAdd = ref([
    {
        label: 'Добавить папку',
        icon: 'pi pi-folder-plus',
        command: () => dialogAddFolderIsOpen.value = true
    },
    {
        label: 'Добавить персонажа',
        icon: 'pi pi-address-book',
        command: () => dialogAddCharacterIsOpen.value = true
    }
])
const optionsRemove = ref([
    {
        label: 'Удалить папку',
        icon: 'pi pi-folder-plus',
        command: () => dialogRemoveFolderIsOpen.value = true
    },
    {
        label: 'Удалить персонажа',
        icon: 'pi pi-address-book',
        command: () => dialogRemoveCharacterIsOpen.value = true
    }
])


const addFolder = () => {
    console.log('addFolder');
}
const items = ref([
    {
        label: 'Files',
        items: [
            {
                label: 'Documents',
                key: '1',
                command: () => {
                    logToActivePage('here123')
                }
            },
            {
                label: 'test2',
                key: '2'
            },
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
]);

</script>
<style scoped>
.wrapper {
    margin-bottom: 20px;
}

.add-folder {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>