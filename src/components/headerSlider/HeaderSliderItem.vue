<template>
    <div class="hero__item" tabindex="-1" @focus="scrollElement" :onClick="toGo" @keydown.enter="toGo">
        <div class="hero__image-container">
            <content-image :ImageURL="movie.backdrop_path" :ImageAlt="movie.title" />
        </div>
        <div class="hero__text">
            <h1 class="hero__title">{{ movie.title }}</h1>
            <p class="hero__paragraph">{{ movie.overview }}</p>
        </div>
        <div class="hero__slider-overlay"></div>
    </div>
</template>

<script lang="ts">
import { Movie } from '@/types/Movie';
import { defineComponent, PropType } from 'vue'
import ContentImage from '../content/image/ContentImage.vue';
export default defineComponent({
    name: 'HeaderSliderItem',
    components: { ContentImage },
    props: {
        movie: {
            type: Object as PropType<Movie>,
            required: true
        }
    },
    methods: {
        scrollElement(event: FocusEvent) {
            const target = event.target as HTMLElement;
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        },
        toGo() {
            this.$router.push(`/movie/${this.movie.id}`);
        }
    }
})
</script>

<style>
.hero__item {
    position: relative;
    min-width: 45vw;
    outline: none;
    margin-bottom: 1.5vh;
    cursor: pointer;
}

.hero__item:focus {
    border: 6px solid #eee;
}

.hero__image-container {
    width: 100%;
    height: 23vw;
}


.hero__slider-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10vw;
    width: 100%;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.86) -1.38%, rgba(0, 0, 0, 0) 98.43%);
    z-index: 1;
}

.hero__text {
    position: absolute;
    bottom: 1vw;
    width: 100%;
    z-index: 2;
    text-align: end;
    min-height: 6vw;
    padding-right: 1vw;
}

.hero__title {
    font-size: 2.5vw;
    line-height: 2.54vw;
    max-height: 7.4vw;
    font-weight: bolder;
    margin-bottom: 1vh;
}

.hero__paragraph {
    line-height: 2.2vw;
    font-size: 1.5vw;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>