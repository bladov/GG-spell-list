<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore/index';
import { spellList } from '@/utils/spellList';

const characterStore = useCharacterStore()

</script>

<template>
  <div>
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
