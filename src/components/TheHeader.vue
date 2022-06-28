<template>
    <div>
        <div class="input-group">
            <input type="text" class="rounded" v-model="searchTitle" @keyup.enter="searchMovieFunction">
            <button class="btn btn-success rounded ms-3" @click="searchMovieFunction">Cerca</button>
        </div>
    </div>
</template>

<script>
import {searchMovies} from '../store'

export default {
    data() {
        return {
            searchTitle: "",
        }
    },

    methods: {
        searchMovieFunction() {
            searchMovies(this.searchTitle)
        },
    },
}
</script>

<style lang="scss" scoped>

</style>