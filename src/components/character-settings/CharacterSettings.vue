<script setup lang="ts">
import { spellList } from '@/utils/spellList';

const storageSpellFavorite = storage.defineItem<string[]>(
  `local:favoriteList`
);


// Использование
onMounted(async () => {
  const favorite = await storageSpellFavorite.getValue()
  console.log('favorite', favorite);

})
</script>

<template>
  <div v-for="(spells, schoolType) in spellList" :key="schoolType" :value="schoolType">
    <SpellCard v-for="spell in spells" :key="spell.name" :spellInfo='spell' />
  </div>
</template>

<style lang="">

</style>
