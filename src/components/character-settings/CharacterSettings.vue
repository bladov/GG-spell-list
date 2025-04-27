<script setup lang="ts">
import { spellList } from '@/utils/spellList';

const storageSpellFavorite = storage.defineItem<string[]>(
  `local:favoriteList`
);

const favoriteList = ref<string[]>([])

const spellListFavorite = computed(() => {
  const allSpells = Object.values(spellList).flat()

  // [1,2,3]
  const spells = favoriteList.value.map(favoriteId => {
    const favoriteSpell = allSpells.find(spell => spell.id.toString() === favoriteId)
    if (!favoriteSpell) return ''

    return favoriteSpell
  })

  return spells.filter(Boolean) as SpellInfo[]
})
// Использование
onMounted(async () => {
  const favorite = await storageSpellFavorite.getValue()

  favoriteList.value = favorite || []
})

const unwatch = storage.watch<string[]>('local:favoriteList', (newCount, oldCount) => {
  favoriteList.value = newCount || []
});
</script>

<template>
  <SpellCard v-for="spell in spellListFavorite" :key="spell.id" :spellInfo='spell' />
</template>

<style lang="">

</style>
