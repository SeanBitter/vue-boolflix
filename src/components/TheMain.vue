<template>
    <div>
        <ul v-for="(movie) in moviesList" :key="movie.title">
            <li>Titolo film: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua originale: <lang-flag :iso="movie.original_language" /></li>
            <li>Voto: {{ movie.vote_average }}</li>
        </ul>

        <ul v-for="(tv) in seriesList" :key="tv.name">
            <li>Titolo serie: {{ tv.name }}</li>
            <li>Titolo originale: {{ tv.original_name }}</li>
            <li>Lingua originale: <lang-flag :iso="tv.original_language" /></li>
            <li>Voto: {{ tv.vote_average }}</li>
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

        seriesList() {
            return state.seriesList;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>