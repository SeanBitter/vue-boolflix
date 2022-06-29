<template>
    <div>
        <h2>Ricerca film o serie tv</h2>
        <div class="input-group mb-3">
            <input type="text" class="rounded" v-model="searchTitle" @keyup.enter="searchMovieFunction">
            <button class="btn btn-success rounded ms-3" @click="searchMovieFunction">Cerca</button>
        </div>
    </div>
</template>

<script>
import {searchMovies} from '../store'
import {searchTv} from '../store'

export default {
    data() {
        return {
            searchTitle: "",
        }
    },

    methods: {
        searchMovieFunction() {
            searchMovies(this.searchTitle);
            searchTv(this.searchTitle);

            this.searchTitle = "";
        },

    },
}
</script>

<style lang="scss" scoped>

</style>