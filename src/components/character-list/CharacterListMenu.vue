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
                <div class="flex items-center px-4 py-2 cursor-pointer group">
                    <Button icon="pi pi-home" aria-label="Save" />
                    <div>
                        <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}32</span>
                    </div>
                </div>
                <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="[item.icon, 'text-primary group-hover:text-inherit']" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                        {{ item.shortcut }}
                    </span>
                </a>
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
import { consoleLogToActivePage } from '@/utils/consoleLogToActivePage';

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
                    consoleLogToActivePage('here123')
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