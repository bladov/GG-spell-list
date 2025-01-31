<script setup lang="ts">
defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['closeDialog', 'addFolder'])
const folderName = ref('')

function addFolder() {
  emit('addFolder', folderName.value)
  folderName.value = ''
}
</script>

<template>
  <Dialog
    :visible="isOpen" modal header="Добавление папок" :style="{ width: '25rem' }"
    @update:visible="emit('closeDialog')"
  >
    <div class="add-folder mb-5">
      <InputText v-model="folderName" size="small" class="w-full md:w-56" placeholder="Введите название папки" />
    </div>
    <div class="flex justify-end gap-2">
      <Button
        type="button" label="Cancel" severity="secondary" size="small"
        @click="emit('closeDialog')"
      />

      <Button :disabled="folderName.length === 0" size="small" @click="addFolder">
        Добавить папку
      </Button>
    </div>
  </Dialog>
</template>

<style></style>
