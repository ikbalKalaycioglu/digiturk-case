<template>
    <div class="header-slider-wrapper">
        <header-slider-item v-for="data in firstFiveMovies" :key="data.id" :movie="data"></header-slider-item>
    </div>
</template>

<script lang="ts">
import { Movie, MovieList } from '@/types/Movie';
import { defineComponent } from 'vue';
import HeaderSliderItem from './HeaderSliderItem.vue';
import SpatialNavigation from '@/SpatialNavigation';

export default defineComponent({
    name: 'HeaderSlider',
    components: {
        HeaderSliderItem
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
        SpatialNavigation.add("headerSlider", {
            selector: ".header-slider-wrapper .hero__item",
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "",
                down: "@upcoming",
                left: "",
            },
        });
        SpatialNavigation.focus('headerSlider');
    },
    methods: {
        async getData() {
            this.fetchingData = await this.$store.dispatch('getNowPlaying');
        }
    },
    beforeUnmount() {
        SpatialNavigation.remove('headerSlider');
    }
})
</script>

<style scoped>
.header-slider-wrapper {
    position: relative;
    overflow-x: auto;
    display: flex;
    gap: 2vw;
    align-items: flex-start;
}
</style>