<template>
    <div>
        <h1 class="header">Popülerler</h1>
        <div class="popular-wrapper">
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
    name: 'Popular',
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
        SpatialNavigation.add("popular", {
            selector: ".popular-wrapper .card",
            defaultElement: ".popular-wrapper .card:nth-child(1)",
            enterTo: 'default-element',
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "@upcoming",
                down: "@topRated",
                left: "",
            },
        });
        SpatialNavigation.makeFocusable();
    },
    methods: {
        async getData() {
            this.fetchingData = await this.$store.dispatch('getPopular');
        }
    },
    beforeUnmount() {
        SpatialNavigation.remove('popular');
    },
})
</script>

<style scoped></style>