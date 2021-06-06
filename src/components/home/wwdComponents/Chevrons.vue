<template>
    <v-card flat outlined class="px-8 py-4">
        <v-row class="pa-4" justify="center">
            <v-col cols="auto" v-for="(chevron, index) in chevrons" :key="index" class="mx-n6">
                <v-img :src="require('@/assets/img/what-we-do/' + chevron + '.svg')" />
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: {
        chevrons: Array
    }
}
</script>