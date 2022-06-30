<template>
    <div class="text-center">

        <div class="d-inline-block py-5 px-4" v-for="movie in moviesList" :key="movie.title">
            <div class="position-relative card-main">
                <img :src="imgCover(movie.poster_path)" :alt="movie.title">
                <div class="card-details p-3">
                    <div><span>Titolo film:</span> {{ movie.title }}</div>
                    <div><span>Titolo originale:</span> {{ movie.original_title }}</div>
                    <div><span>Lingua originale:</span> <lang-flag :iso="movie.original_language" /></div>
                    <div><span>Voto:</span> <i class="fa-solid fa-star text-warning" v-for="vote in voteRounded(movie.vote_average)" :key="vote"></i>
                                            <i class="fa-regular fa-star" v-for="empty in emptyStar(voteRounded(movie.vote_average))" :key="empty"></i></div>
                    <div><span>Overview:</span> {{ overview(movie.overview) }}</div>
                </div>
            </div>
        </div>

        <div class="d-inline-block py-5 px-4" v-for="tv in seriesList" :key="tv.name">
            <div class="position-relative card-main">
                <img :src="imgCover(tv.poster_path)" :alt="tv.title">
                <div class="card-details p-3">
                    <div><span>Titolo serie:</span> {{ tv.name }}</div>
                    <div><span>Titolo originale:</span> {{ tv.original_name }}</div>
                    <div><span>Lingua originale:</span> <lang-flag :iso="tv.original_language" /></div>
                    <div><span>Voto:</span> <i class="fa-solid fa-star text-warning" v-for="vote in voteRounded(tv.vote_average)" :key="vote"></i>
                                            <i class="fa-regular fa-star" v-for="empty in emptyStar(voteRounded(tv.vote_average))" :key="empty"></i></div>
                    <div><span>Overview:</span> {{ overview(tv.overview) }}</div>
                </div>
            </div>
        </div>

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

    methods: {
        imgCover(imgName) {
            if (imgName === null) {
                return require("../assets/img/imgError.png");
            } else {
                return "https://image.tmdb.org/t/p/w342/" + imgName;
            }
        },

        overview(description) {
            if (description === "") {
                return "Nessuna informazione aggiuntiva disponibile."
            } else {
                return description;
            }
        },

        voteRounded(vote) {
            const halfVote = vote / 2;
            return Math.ceil(halfVote);
        },

        emptyStar(vote) {
            const maxStar = 5;
            return maxStar - vote;
        },
    }
}

</script>

<style lang="scss" scoped>

    .card-main {
        &:hover {
            .card-details {
                opacity: 1;
                cursor: pointer;
            }
        };

        img {
            width: 100%;
            aspect-ratio: 1/1.5;
        }
    };

    .card-details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(230, 230, 230, 0.8);
    opacity: 0;
    color: black;
    overflow: auto;
    transition: opacity 0.3s ease-in-out;

        span {
            color: rgb(16, 23, 95);
        font-weight: bold;
        }
}

</style>