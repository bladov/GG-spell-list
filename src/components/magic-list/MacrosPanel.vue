<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore/index'
import { createTemplateSpell } from '@/utils/createTemplateSpell'
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
  const template = '&{template:DnD35StdRoll}'
  const spellFlag = '{{spellflag=true}}'
  const characterName = '{{name= @{Яков|character_name} }}'
  const spellTitle = '{{**Яркий Свет 💡**}}'
  const diseRoll = '{{Испытание(Обнаружение)  (Свет⭐⭐⭐): [[ ?{кубов?| 20,1d20cs>[[20]]| 24,1d24cs>[[23]]| 30,1d30cs>[[28]]| 16, 1d16cs>[[17]]| 14, 1d14cs>[[16]]| 12, 1d12cs>[[15]]} + @{Яков|cha-mod} + floor(@{Яков|level}/2)*ceil(@{Яков|Магия_Свет}*0.01) + @{Яков|Магия_Свет}  ]] }}'
  const notes = '{{notes=Яркий Свет Испытание(Обнаружение) КубД Создаёт область 6радиус особо яркого света, существа с темновиденьем ослеплены в нём Пр: Сцена Дл: Средняя}}'

  sendMsgToChat(`${template} ${spellFlag} ${characterName} ${spellTitle} ${diseRoll} ${notes}`)
}

const castSpell = (spell: SpellInfo, diceBonus: number) => {
  const spellTemplate = createTemplateSpell(spell, diceBonus.toString())

  sendMsgToChat(spellTemplate)
}
</script>

<template>
  <div>
    <Button @click="testClick">
      23
    </Button>

    <Accordion value="0">
      <AccordionPanel v-for="spellInfo in spells" :key="spellInfo.id" :value="spellInfo.id">
        <AccordionHeader class="schoolTitle">{{ spellInfo.title }}</AccordionHeader>
        <AccordionContent>
          <Card v-for="spell in spellInfo.spellList" :key="spell.name" class="spellCard">
            <template #title>{{ spell.name }}</template>
            <template #content>
              <p class="m-0; mb-2">
                <i><b>Круг</b></i>: {{ spell.circle }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Традиции</b></i>: {{ spell.traditions }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Тип</b></i>: {{ spell.type }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Произношение</b></i>: {{ spell.pronunciation }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Дальность</b></i>: {{ spell.range }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Длительность</b></i>: {{ spell.duration }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Площадь</b></i>: {{ spell.square }}
              </p>

              <p class="m-0; mb-2">
                <i><b>Эффект</b></i>: {{ spell.effect }}
              </p>
              <p class="m-0; mb-2">
                <i><b>Критический Эффект</b></i>: {{ spell.critical_effect }}
              </p>

              <Button @click="castSpell(spell, 10)">
                Скастить
              </Button>
            </template>
          </Card>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
.schoolTitle {
  font-size: 24px;
}

.spellCard {
  font-size: 16px;
  margin-bottom: 30px;

  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   */

  border-left: 1px solid white;
  border-top: 1px solid white;
  box-shadow: rgba(15, 214, 82, 0.4) 5px 5px, rgba(15, 214, 82, 0.3) 10px 10px, rgba(15, 214, 82, 0.2) 15px 15px, rgba(15, 214, 82, 0.1) 20px 20px, rgba(15, 214, 82, 0.05) 25px 25px;
}
</style>
