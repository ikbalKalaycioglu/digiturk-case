<template>
    <div ref="card" class="card" :onClick="toGo" tabindex="-1" @focus="scrollElement">
        <content-image :ImageURL="movie.poster_path" :ImageAlt="movie.title" />
        
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Movie } from '@/types/Movie';
import ContentImage from './image/ContentImage.vue';

export default defineComponent({
    name: 'MovieWithBar',
    components: { ContentImage },
    props: {
        movie: {
            type: Object as PropType<Movie>,
            required: true,
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
        }
    },

})
</script>
<style scoped></style>