<script setup lang="ts">

import { useSpellSearch } from '@/composables/useSpellSearch';


import { spellList } from '@/utils/spellList';

const storageSpellFavorite = storage.defineItem<string[]>(
  `local:favoriteList`
);

const searchInput = ref('')
const { foundSpellIds } = useSpellSearch(spellList, searchInput);

onMounted(async () => {
  const hasFavorite = await storageSpellFavorite.getValue()
  if (hasFavorite) return
  await storageSpellFavorite.setValue([])
})

</script>

<template>
  <div>
    <div class="flex flex-col gap-2">
      <label for="username">Поиск</label>
      <InputText class="mb-2 mw-400" id="username" aria-describedby="username-help" label="Поиск" type="text"
        v-model="searchInput" />
      <Message size="small" severity="secondary" variant="simple">Поиск заклинаний (минимум 3 символа)...</Message>
    </div>

    <div v-show="foundSpellIds.length" class="mb-2">
      <div class="mb-2">
        Найдено заклинаний: {{ foundSpellIds.length }}
      </div>

      <div>
        <SpellCard v-for="spell in foundSpellIds" :key="spell.name" :spellInfo='spell' />
      </div>
    </div>

    <div v-if="searchInput.length >= 3 && foundSpellIds.length === 0" class="mb-2">
      Ничего не найдено.
    </div>

    <Accordion value="0" lazy>
      <AccordionPanel v-for="(spells, schoolType) in spellList" :key="schoolType" :value="schoolType">
        <AccordionHeader class="schoolTitle">{{ schoolType }}</AccordionHeader>
        <AccordionContent>
          <SpellCard v-for="spell in spells" :key="spell.name" :spellInfo='spell' />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
.schoolTitle {
  font-size: 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.spellCard {
  font-size: 16px;
  margin-bottom: 30px;
  border-left: 1px solid white;
  border-top: 1px solid white;
  box-shadow: rgba(15, 214, 82, 0.4) 5px 5px, rgba(15, 214, 82, 0.3) 10px 10px, rgba(15, 214, 82, 0.2) 15px 15px, rgba(15, 214, 82, 0.1) 20px 20px, rgba(15, 214, 82, 0.05) 25px 25px;
}
</style>
