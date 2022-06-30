<template>
    <div class="container">
        <TheCard></TheCard>
    </div>
</template>

<script>
import TheCard from './TheCard.vue';

export default {
    components: { TheCard }
}
</script>

<style lang="scss" scoped>
    .container {
        overflow-y: auto;
    }
</style>