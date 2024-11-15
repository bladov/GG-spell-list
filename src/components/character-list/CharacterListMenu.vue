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
                    <Toast />
                </div>
            </div>


            <Panel header="Добавление персонажей">
                <div class="add-folder">
                    <div class="card flex justify-center">
                        <Select v-model="selectedCountry" :options="countries" filter optionLabel="name"
                            placeholder="Выберите папку" class="w-full md:w-56">
                            <template #value="slotProps">
                                <div v-if="slotProps.value" class="flex items-center">
                                    <img :alt="slotProps.value.label"
                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                        :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
                                        style="width: 18px" />
                                    <div>{{ slotProps.value.name }}</div>
                                </div>
                                <span v-else>
                                    {{ slotProps.placeholder }}
                                </span>
                            </template>
                            <template #option="slotProps">
                                <div class="flex items-center">
                                    <img :alt="slotProps.option.label"
                                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                        :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                                        style="width: 18px" />
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Select>
                    </div>

                    <InputText size="small" class="w-full md:w-56" placeholder="Введите имя персонажа" />

                    <Button @click="addFolder" size="small">Добавить
                        персонажа</Button>
                </div>

            </Panel>
        </div>

        <PanelMenu :model="items" class="w-full md:w-80" />
        <!-- <template #item="{ item }">
                <div class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="['ml-2', { 'font-semibold': item.isCurrentCharacter }]">
                        {{ item.label }}
                    </span>
                </div>
            </template> -->

        <div class="card flex justify-center">
            <Button label="Show" @click="visible = true" />

            <DialogAddFolder :isOpen="dialogAddFolderIsOpen" @addFolder="addFolder"
                @closeDialog="dialogAddFolderIsOpen = false" />
        </div>
    </div>
</template>

<script setup lang="ts">
import DialogAddFolder from '@/components/character-list/DialogAddFolder.vue'

const dialogRemoveFolderIsOpen = ref(false)
const dialogRemoveCharacterIsOpen = ref(false)
const dialogAddCharacterIsOpen = ref(false)
const dialogAddFolderIsOpen = ref(false)

const visible = ref(false);
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
const selectedCountry = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

const addFolder = () => {
    console.log('addFolder');
}
const items = ref([
    {
        label: 'Files',
        items: [
            {
                label: 'Documents',
                key: '1'
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