<template>
    <div ref="card" class="card" :onClick="toGo" @keydown.enter="toGo" tabindex="-1" @focus="scrollElement">
        <content-image :ImageURL="movie.poster_path" :ImageAlt="movie.title" />
        <div class="bottom-container" v-if="isProgress">
            <i class="pi pi-sort-up-fill"></i>
            <div class="progress-bar">
                <div class="progress-bar-active" :style="{ width: getBarWidth }"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Movie } from '@/types/Movie';
import ContentImage from './image/ContentImage.vue';

export default defineComponent({
    name: 'MovieItem',
    components: { ContentImage },
    props: {
        movie: {
            type: Object as PropType<Movie>,
            required: true,
        },
        isProgress: {
            type: Boolean,
        }
    },
    computed: {
        getBarWidth() {
            return Math.floor(Math.random() * 100) + '%';
        }
    },
    methods: {
        toGo() {
            this.$router.push(`/movie/${this.movie.id}`);
        },
        scrollElement(event: FocusEvent) {
            const target = event.target as HTMLElement;
            target.scrollIntoViewVertically();
            if (target.parentElement) target.scrollIntoViewHorizontally(target.parentElement)
        }

    },
})
</script>
<style scoped></style>