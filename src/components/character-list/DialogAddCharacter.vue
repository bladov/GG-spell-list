<template>
    <Dialog :visible="isOpen" @update:visible="emit('closeDialog')" modal header="Добавление персонажа"
        :style="{ width: '25rem' }">
        <div class="add-folder mb-5">

            <div class="add-folder">
                <div class="card flex justify-center mb-5">
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

                <InputText size="small" v-model="characterName" class="w-full md:w-56"
                    placeholder="Введите имя персонажа" />
            </div>

        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Закрыть" severity="secondary" size="small"
                @click="emit('closeDialog')"></Button>

            <Button @click="addFolder" size="small">Добавить
                персонажа</Button>
        </div>
    </Dialog>
</template>
<script setup lang="ts">
defineProps({
    isOpen: Boolean,
});
const emit = defineEmits(['closeDialog', 'addCharacter'])
const characterName = ref('')

const addFolder = () => {
    emit('addCharacter', characterName.value)
    characterName.value = ''
}


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
</script>
<style></style>