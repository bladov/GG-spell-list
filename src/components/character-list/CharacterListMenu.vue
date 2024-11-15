<template>

    <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-80" />
    </div>

</template>
<script setup lang="ts">
const items = ref([
    {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
            {
                label: 'Documents',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Invoices',
                        items: [
                            {
                                label: 'Pending',
                            },
                            {
                                label: 'Paid',
                            }
                        ]
                    },
                    {
                        label: 'Clients',
                    }
                ]
            },
            {
                label: 'Images',
                items: [
                    {
                        label: 'Logos',
                    }
                ]
            }
        ]
    },
    {
        label: 'Cloud',
        items: [
            {
                label: 'Upload',
            },
            {
                label: 'Download',
            },
            {
                label: 'Sync',
            }
        ]
    },
    {
        label: 'Devices',
        items: [
            {
                label: 'Phone',
            },
            {
                label: 'Desktop',
            },
            {
                label: 'Tablet',
            }
        ]
    }
]);
</script>
<style lang="">

</style>