<template>
    <div class="main-container">
        <h1 class="header">Bunu izleyenler bunları da izledi</h1>
        <div class="similar-wrapper">
            <movie-item v-for="data in getMovie" :key="data.id" :movie="data"></movie-item>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Movie, MovieList } from '@/types/Movie';
import MovieItem from './MovieItem.vue';
import { MovieDetail } from '@/types/MovieDetail';
import SpatialNavigation from '@/SpatialNavigation';

export default defineComponent({
    name: 'Similar',
    components: {
        MovieItem
    },
    props: {
        movie: {
            type: Object as PropType<MovieDetail>,
            required: true
        }
    },
    watch: {
        movie: {
            handler(newMovie: MovieDetail) {
                this.getData(newMovie.id);
            },
            immediate: true,
        }
    },
    data() {
        return {
            fetchingData: {} as MovieList,
        }
    },
    computed: {
        getMovie(): Movie[] {
            return this.fetchingData.results;
        }
    },
    async created() {
        await this.getData(this.$props.movie.id);
        SpatialNavigation.add("similar", {
            selector: ".similar-wrapper .card",
            defaultElement: ".similar-wrapper .card:nth-child(1)",
            enterTo: 'default-element',
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "@button",
                down: "",
                left: "",
            },
        });
    },
    methods: {
        async getData(movieId: number) {
            this.fetchingData = await this.$store.dispatch('getMoviesSimilar', movieId);
            SpatialNavigation.focus('button')
        }
    },
    beforeUnmount() {
        SpatialNavigation.remove('similar');
    }
})
</script>

<style scoped>
.main-container {
    margin-top: 3vh;
}

.header {
    font-size: 1.6vw;
}
</style>