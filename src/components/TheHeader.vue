<template>
    <div class="section">
        <div class="container d-flex">
            <div><h2 class="text-danger">BOOLFLIX</h2></div>
            <div class="input-group d-flex justify-content-end">
                <input type="text" class="rounded p-2" v-model="searchTitle" @keyup.enter="searchMovieFunction">
                <button class="btn btn-danger rounded ms-3" @click="searchMovieFunction">Cerca</button>
            </div>
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
    .section {
        background-color: black;
        padding: 1rem 2rem;
    };

</style>