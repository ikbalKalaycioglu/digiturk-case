<template>
    <div>
        <header-slider></header-slider>
        <div class="main-container">
            <upcoming></upcoming>
            <popular></popular>
            <top-rated></top-rated>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSlider from '@/components/headerSlider/HeaderSlider.vue'
import Upcoming from '@/components/content/Upcoming.vue';
import Popular from '@/components/content/Popular.vue';
import TopRated from '@/components/content/TopRated.vue';
import NowPlaying from '@/components/content/NowPlaying.vue';
export default defineComponent({
    name: 'Home',
    components: {
        HeaderSlider,
        Upcoming,
        Popular,
        TopRated,
        NowPlaying,
    },
})
</script>
<style scoped></style>
