<template>
    <div>
        <ul v-for="(movie, i) in moviesList" :key="i">
            <li>Titolo film: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua originale: {{ movie.original_language }}</li>
            <li>Voto: {{ movie.vote_average }}</li>
        </ul>
    </div>
</template>

<script>
import {state} from '../store';

export default {
    computed: {
        moviesList() {
            return state.moviesList;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>