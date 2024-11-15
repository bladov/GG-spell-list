<template>
    <div>
        <button @click="testClick">
            {{ characterStore.test }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '@/store/characterStore/index';
import { sendMsgToChat } from '@/utils/sendMsgToChat';

const characterStore = useCharacterStore()

const testClick = () => {
    sendMsgToChat('Тестовая запись3!')
    sendMsgToChat('Тестовая запись! [[1d20+5]]')
    sendMsgToChat('/r 1d10+1d6')
    sendMsgToChat(`
  &{template:DnD35StdRoll} {{spellflag=true}} {{name=Дима }}{{**Яркий Свет 💡**}}  {{Испытание(Обнаружение)  (Свет⭐⭐⭐): [[ ?{кубов?| 20,1d20cs>[[20]]| 24,1d24cs>[[23]]| 30,1d30cs>[[28]]| 16, 1d16cs>[[17]]| 14, 1d14cs>[[16]]| 12, 1d12cs>[[15]]} + [[3]] + floor([[4]]/2)*ceil([[2]]*0.01) + [[3]]  ]] }}   {{notes=Яркий Свет Испытание(Обнаружение) КубД Создаёт область 6радиус особо яркого света, существа с темновиденьем
  `)
}

</script>

<style lang="">

</style>