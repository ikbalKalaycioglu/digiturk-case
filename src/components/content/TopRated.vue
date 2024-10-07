<template>
    <div>
        <h1 class="header">Top Rated</h1>
        <div class="top-rated-wrapper">
            <movie-item v-for="data in getMovie" :key="data.id" :movie="data"></movie-item>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Movie, MovieList } from '@/types/Movie';
import MovieItem from './MovieItem.vue';
import SpatialNavigation from '@/SpatialNavigation';

export default defineComponent({
    name: 'TopRated',
    components: {
        MovieItem
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
        await this.getData();
        SpatialNavigation.add("topRated", {
            selector: ".top-rated-wrapper .card",
            defaultElement: ".top-rated-wrapper .card:nth-child(1)",
            enterTo: 'default-element',
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "@popular",
                down: "nowPlaying",
                left: "",
            },
        });
        SpatialNavigation.makeFocusable();
    },
    methods: {
        async getData() {
            this.fetchingData = await this.$store.dispatch('getTopRated');
        }
    },
    beforeUnmount() {
        SpatialNavigation.remove('topRated');
    },
})
</script>

<style scoped></style>