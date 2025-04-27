<script setup lang="ts">
import { useVirtualList } from '@vueuse/core';

const { spells } = defineProps<{ spells: SpellInfo[] }>()


const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
    spells,
    {
        itemHeight: 80,
    },
)

</script>

<template>
    <div>
        <div v-bind="containerProps">
            <div v-bind="wrapperProps">
                <SpellCard v-for="spell in list" :key="spell.data.name" :spellInfo='spell.data' />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
