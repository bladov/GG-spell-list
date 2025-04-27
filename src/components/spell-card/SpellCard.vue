<script setup lang="ts">
import { createTemplateSpell } from '@/utils/createTemplateSpell';
import { sendMsgToChat } from '@/utils/sendMsgToChat';

interface CubeOptions {
    name: string
    code: Cube
}


const selectedCube = ref<CubeOptions>({ name: '1d20', code: '20' })
const cubeOptions = ref<CubeOptions[]>([
    { name: '1d20', code: '20' },
    { name: '1d24', code: '24' },
    { name: '1d30', code: '30' },
    { name: '1d16', code: '16' },
    { name: '1d14', code: '14' }
]);

const spellModInfo = reactive({
    mod: '',
    stars: '',
    level: '',
    attribute: '',
})

const diceMod = computed(() => {
    const levelMod = Math.floor(Number(spellModInfo.level) / 2)

    const num = Number(spellModInfo.mod) + Number(spellModInfo.stars) + Number(spellModInfo.attribute) + levelMod

    return num.toString()
})

const { spellInfo } = defineProps<{ spellInfo: SpellInfo }>()

const castSpell = (spell: SpellInfo, cube: Cube, diceBonus: string) => {
    const spellTemplate = createTemplateSpell(spell, cube, diceBonus)

    sendMsgToChat(spellTemplate)
}
</script>

<template>
    <Card class="spellCard">
        <template #title>{{ spellInfo.name }}</template>
        <template #content>
            <p class="m-0; mb-2">
                <i><b>Круг</b></i>: {{ spellInfo.circle }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Традиции</b></i>: {{ spellInfo.traditions }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Тип</b></i>: {{ spellInfo.type }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Произношение</b></i>: {{ spellInfo.pronunciation }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Дальность</b></i>: {{ spellInfo.range }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Длительность</b></i>: {{ spellInfo.duration }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Площадь</b></i>: {{ spellInfo.square }}
            </p>

            <p class="m-0; mb-2">
                <i><b>Эффект</b></i>: {{ spellInfo.effect }}
            </p>
            <p class="m-0; mb-2">
                <i><b>Критический Эффект</b></i>: {{ spellInfo.critical_effect }}
            </p>

            <div class="selectWrapper">
                <Select v-model="selectedCube" size="small" :options="cubeOptions" optionLabel="name"
                    placeholder="Выберите куб" />
                <div>
                    <FloatLabel variant="on">
                        <InputText type="text" size="small" v-model="spellModInfo.mod" id="on_label" />
                        <label for="on_label">модификатор</label>
                    </FloatLabel>
                </div>
            </div>

            <div class="inputWrapper">
                <FloatLabel variant="on">
                    <InputText type="text" size="small" v-model="spellModInfo.stars" id="on_label2" />
                    <label for="on_label2">Звезды</label>
                </FloatLabel>
                <FloatLabel variant="on">
                    <InputText type="text" size="small" v-model="spellModInfo.level" id="on_label3" />
                    <label for="on_label3">Уровень</label>
                </FloatLabel>

                <FloatLabel variant="on">
                    <InputText type="text" size="small" v-model="spellModInfo.attribute" id="on_label4" />
                    <label for="on_label4">Стат</label>
                </FloatLabel>
            </div>

            <Button @click="castSpell(spellInfo, selectedCube.code, diceMod)">
                Скастить
            </Button>
        </template>
    </Card>
</template>

<style scoped>
.spellCard {
    font-size: 16px;
    margin-bottom: 30px;

    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   */

    border-left: 1px solid white;
    border-top: 1px solid white;
    box-shadow: rgba(15, 214, 82, 0.4) 5px 5px, rgba(15, 214, 82, 0.3) 10px 10px, rgba(15, 214, 82, 0.2) 15px 15px, rgba(15, 214, 82, 0.1) 20px 20px, rgba(15, 214, 82, 0.05) 25px 25px;
}

.selectWrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    margin-bottom: 10px;
}

.inputWrapper {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
}

.input {
    display: inline-block;
    max-width: 40px;
}
</style>
