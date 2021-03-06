import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({
    moviesList: [],
    seriesList: [],
});

export function searchMovies(searchTitle) {
    axios
    .get("https://api.themoviedb.org/3/search/movie/", {
        params: {
            api_key: "5610175e9bb22882692f71aeb01f26e1",
            query: searchTitle,
            language: "it-IT",
        },

    })
    .then((response) => {
            state.moviesList = response.data.results;
    });

}

export function searchTv(searchTitle) {
    axios
    .get("https://api.themoviedb.org/3/search/tv/", {
        params: {
            api_key: "5610175e9bb22882692f71aeb01f26e1",
            query: searchTitle,
            language: "it-IT",
        },

    })
    .then((response) => {
            state.seriesList = response.data.results;
    });

}