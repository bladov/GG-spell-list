<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore/index'
import { sendMsgToChat } from '@/utils/sendMsgToChat'
import { darkSpells } from '@/utils/spellList'

const characterStore = useCharacterStore()

const spells = ref([
  {
    title: 'Тьма',
    spellList: darkSpells,
    id: 0
  }
])

function testClick() {
  sendMsgToChat('Тестовая запись3!')
  sendMsgToChat('Тестовая запись! [[1d20+5]]')
  sendMsgToChat('/r 1d10+1d6')
  sendMsgToChat(`
  &{template:DnD35StdRoll} {{spellflag=true}} {{name=Дима }}{{**Яркий Свет 💡**}}  {{Испытание(Обнаружение)  (Свет⭐⭐⭐): [[ ?{кубов?| 20,1d20cs>[[20]]| 24,1d24cs>[[23]]| 30,1d30cs>[[28]]| 16, 1d16cs>[[17]]| 14, 1d14cs>[[16]]| 12, 1d12cs>[[15]]} + [[3]] + floor([[4]]/2)*ceil([[2]]*0.01) + [[3]]  ]] }}   {{notes=Яркий Свет Испытание(Обнаружение) КубД Создаёт область 6радиус особо яркого света, существа с темновиденьем
  `)
}
</script>

<template>
  <div>
    <Button @click="testClick">
      23
    </Button>

    <Accordion value="0">
      <AccordionPanel v-for="spellInfo in spells" :key="spellInfo.id" :value="spellInfo.id">
        <AccordionHeader>{{ spellInfo.title }}</AccordionHeader>
        <AccordionContent>
          <Card v-for="spell in spellInfo.spellList" :key="spell.name">
            <template #title>{{ spell.name }}</template>
            <template #content>
              <p class="m-0">
                <b>Круг</b>: {{ spell.circle }}
              </p>
              <p class="m-0">
                <b>Традиции</b>: {{ spell.traditions }}
              </p>
              <p class="m-0">
                <b>Тип</b>: {{ spell.type }}
              </p>
              <p class="m-0">
                <b>Произношение</b>: {{ spell.pronunciation }}
              </p>
              <p class="m-0">
                <b>Дальность</b>: {{ spell.range }}
              </p>
              <p class="m-0">
                <b>Длительность</b>: {{ spell.duration }}
              </p>
              <p class="m-0">
                <b>Площадь</b>: {{ spell.square }}
              </p>

              <p class="m-0">
                <b>Эффект</b>: {{ spell.effect }}
              </p>
              <p class="m-0">
                <b>Критический Эффект</b>: {{ spell.critical_effect }}
              </p>
            </template>
          </Card>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style lang="">

</style>
