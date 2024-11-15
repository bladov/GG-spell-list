<template>
    <div>
        <div class="wrapper">
            <div class="add-folder">
                <InputText v-model="folderName" placeholder="Введите название папки" />
                <Button @click="addFolder" :disabled="folderName.length === 0">Добавить папку</Button>
            </div>

            <div>
                <div class="card flex justify-center">
                    <Select v-model="selectedCountry" :options="countries" filter optionLabel="name"
                        placeholder="Select a Country" class="w-full md:w-56">
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
            </div>
        </div>

        <PanelMenu :model="items" class="w-full md:w-80" />
        <!-- <template #item="{ item }">
                <div class="flex items-center px-4 py-2 cursor-pointer group">
                    <span :class="['ml-2', { 'font-semibold': item.isCurrentCharacter }]">
                        {{ item.label }}
                    </span>
                </div>
            </template> -->
    </div>
</template>

<script setup lang="ts">
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
const folderName = ref('')
const addFolder = () => {
    console.log('addFolder');
    folderName.value = ''
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