<script setup lang="ts">
import { createTemplateSpell } from '@/utils/createTemplateSpell';
import { sendMsgToChat } from '@/utils/sendMsgToChat';

interface CubeOptions {
    name: string
    code: Cube
}

interface StorageSpell {
    spellModInfo: {
        mod: string;
        stars: string;
        level: string;
        attribute: string;
    },
    selectedCube: CubeOptions,
    isFavorite: boolean
}

const { spellInfo } = defineProps<{ spellInfo: SpellInfo }>()
const spellId = spellInfo.id.toString()
const storageSpell = storage.defineItem<StorageSpell>(
    `local:spell-${spellId}`
);

const storageSpellFavorite = storage.defineItem<string[]>(
    `local:favoriteList`
);


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

const isAddToCharacter = ref(false)

const diceMod = computed(() => {
    const levelMod = Math.floor(Number(spellModInfo.level) / 2)

    const num = Number(spellModInfo.mod) + Number(spellModInfo.stars) + Number(spellModInfo.attribute) + levelMod

    return num.toString()
})



const castSpell = (spell: SpellInfo, cube: Cube, diceBonus: string) => {
    const spellTemplate = createTemplateSpell(spell, cube, diceBonus)

    sendMsgToChat(spellTemplate)
}

watch(() => selectedCube.value, async () => {
    const storageSpellInfo = await storageSpell.getValue()

    const spellInfoData = {
        spellModInfo: storageSpellInfo?.spellModInfo || spellModInfo,
        selectedCube: selectedCube.value,
        isFavorite: storageSpellInfo?.isFavorite || isAddToCharacter.value
    }

    await storageSpell.setValue(spellInfoData);
})

watch(() => isAddToCharacter.value, async () => {
    const storageSpellInfo = await storageSpell.getValue()

    const spellInfoData = {
        spellModInfo: storageSpellInfo?.spellModInfo || spellModInfo,
        selectedCube: storageSpellInfo?.selectedCube || selectedCube.value,
        isFavorite: isAddToCharacter.value
    }

    await storageSpell.setValue(spellInfoData);

    const favoriteList = await storageSpellFavorite.getValue()

    if (!isAddToCharacter.value) {
        if (!favoriteList) return

        const filterFavorite = favoriteList.filter(id => id !== spellId)

        await storageSpellFavorite.setValue(filterFavorite)
    } else {
        if (!favoriteList) return
        favoriteList.push(spellId)
        await storageSpellFavorite.setValue(favoriteList)
    }
})

watch(() => spellModInfo, async () => {
    const storageSpellInfo = await storageSpell.getValue()

    const spellInfoData = {
        spellModInfo: {
            ...storageSpellInfo?.spellModInfo,
            ...spellModInfo
        },
        selectedCube: storageSpellInfo?.selectedCube || selectedCube.value,
        isFavorite: storageSpellInfo?.isFavorite || isAddToCharacter.value
    }

    await storageSpell.setValue(spellInfoData);
}, {
    deep: true
})

onMounted(async () => {
    const storageSpellInfo = await storageSpell.getValue()

    if (!storageSpellInfo) {
        const spellInfoData = {
            spellModInfo: spellModInfo,
            selectedCube: selectedCube.value,
            isFavorite: false
        }

        await storageSpell.setValue(spellInfoData);

        return
    }

    spellModInfo.mod = storageSpellInfo.spellModInfo.mod
    spellModInfo.stars = storageSpellInfo.spellModInfo.stars
    spellModInfo.level = storageSpellInfo.spellModInfo.level
    spellModInfo.attribute = storageSpellInfo.spellModInfo.attribute

    selectedCube.value = storageSpellInfo.selectedCube as any

    isAddToCharacter.value = storageSpellInfo.isFavorite
})
</script>

<template>
    <Card class="spellCard">
        <template #title>
            <div class="title">
                <h3>{{ spellInfo.name }}</h3>
                <div class="switchWrapper">
                    <p>В избранное</p>
                    <ToggleSwitch v-model="isAddToCharacter" title="23" />
                </div>
            </div>
        </template>
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
.title {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
}

.switchWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.switchWrapper p {
    font-size: 14px;
}

.spellCard {
    font-size: 16px;
    margin-bottom: 30px;
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
