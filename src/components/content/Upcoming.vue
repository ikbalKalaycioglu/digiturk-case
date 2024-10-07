<template>
    <div>
        <h1 class="header">İzlemeye Devam Et</h1>
        <div class="upcoming-wrapper">
            <movie-item v-for="data in firstFiveMovies" :key="data.id" :movie="data" :isProgress="true"></movie-item>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Movie, MovieList } from '@/types/Movie';
import SpatialNavigation from '@/SpatialNavigation';
import MovieItem from './MovieItem.vue';
export default defineComponent({
    name: 'Upcoming',
    components: {
        MovieItem
    },
    data() {
        return {
            fetchingData: {} as MovieList,
        }
    },
    computed: {
        firstFiveMovies(): Movie[] {
            if (this.fetchingData.results && this.fetchingData.results.length > 0) {
                return this.fetchingData.results.slice(0, 5);
            }
            return [];
        }
    },
    async created() {
        await this.getData();
        SpatialNavigation.add("upcoming", {
            selector: ".upcoming-wrapper .card",
            defaultElement: ".upcoming-wrapper .card:nth-child(1)",
            enterTo: 'default-element',
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "@headerSlider",
                down: "@popular",
                left: "",
            },
        });
        SpatialNavigation.makeFocusable();
    },
    mounted() {
    },
    methods: {
        async getData() {
            this.fetchingData = await this.$store.dispatch('getUpcoming');
        }
    },
    beforeUnmount() {
        SpatialNavigation.remove('upcoming');
    }
})
</script>

<style scoped></style>