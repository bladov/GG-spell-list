<template>
    <Dialog :visible="isOpen" @update:visible="emit('closeDialog')" modal header="Добавление папок"
        :style="{ width: '25rem' }">
        <div class="add-folder mb-5">
            <InputText size="small" class="w-full md:w-56" v-model="folderName" placeholder="Введите название папки" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" size="small"
                @click="emit('closeDialog')"></Button>

            <Button @click="addFolder" :disabled="folderName.length === 0" size="small">
                Добавить папку
            </Button>
        </div>
    </Dialog>
</template>
<script setup lang="ts">
defineProps({
    isOpen: Boolean,
});
const emit = defineEmits(['closeDialog', 'addFolder'])
const folderName = ref('')

const addFolder = () => {
    emit('addFolder', folderName.value)
    folderName.value = ''
}
</script>
<style></style>