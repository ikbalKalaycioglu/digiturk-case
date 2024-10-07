<template>
    <div class="container">
        <h1 class="header">Vizyondakiler</h1>
        <div class="now-playing-wrapper">
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
    name: 'NowPlaying',
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
        SpatialNavigation.add("nowPlaying", {
            selector: ".now-playing-wrapper .card",
            defaultElement: ".now-playing-wrapper .card:nth-child(1)",
            enterTo: 'default-element',
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "@topRated",
                down: "",
                left: "",
            },
        });
    },
    methods: {
        async getData() {
            this.fetchingData = await this.$store.dispatch('getNowPlaying');
        }
    }
})
</script>

<style scoped>
.container{
    margin-bottom: 3vh;
}
</style>