<template>
    <div class="main-container">
        <div class="preview-container">
            <div class="text-container">
                <h1 class="header">{{ movieDetail.title }}</h1>
                <span>{{ getGenre }}, {{ getYear }}</span>
                <span>{{ movieDetail.overview }}</span>
                <div class="author-container">
                    <span>Diller : {{ getSpokenLanguages }}</span>
                    <span>IMDB: {{ movieDetail.vote_average.toFixed(1) }}</span>
                </div>
            </div>
            <div class="image-container">
                <content-image :ImageURL="movieDetail.backdrop_path" :ImageAlt="movieDetail.title"></content-image>
            </div>
        </div>
        <Button />
        <similar :movie="movieDetail"></similar>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MovieDetail } from "@/types/MovieDetail";
import Button from "../Preview/Button.vue";
import ContentImage from "../content/image/ContentImage.vue";
import Similar from "../content/Similar.vue";
import SpatialNavigation from "@/SpatialNavigation";
export default defineComponent({
    name: 'Preview',
    components: { Button, ContentImage, Similar },
    props: {
        movieDetail: {
            type: Object as PropType<MovieDetail>,
            required: true,
        }
    },
    computed: {
        getGenre(): string {
            if (this.movieDetail.genres.length > 0) {
                const genreNames = this.movieDetail.genres.map(genre => genre.name);
                return genreNames.join(', ');
            }
            return '';
        },
        getYear(): number {
            const date = new Date(this.$props.movieDetail.release_date);
            return date.getFullYear();
        },
        getSpokenLanguages(): string {
            if (this.movieDetail.spoken_languages.length > 0) {
                const spokenLanguages = this.movieDetail.spoken_languages.map(lang => lang.name);
                return spokenLanguages.join(', ');
            }
            return '';
        },
    },
    mounted() {
        SpatialNavigation.add('button', {
            selector: ".button-container .button",
            defaultElement: ".button-container .button:first-child",
            enterTo: "default-element",
            straightOnly: true,
            leaveFor: {
                right: "",
                up: "",
                down: "@similar",
                left: "",
            },
        });
        SpatialNavigation.makeFocusable();
        SpatialNavigation.focus();
    },
    beforeUnmount() {
        SpatialNavigation.remove('button');
    }
});
</script>

<style scoped>
.main-container {
    padding-left: 1vw;
}

.preview-container {
    display: flex;
    gap: 10px;
}

.text-container {
    display: flex;
    flex: 1;
    gap: 1vh;
    flex-direction: column;
    margin-top: 2vh;
    font-size: 1.5vw;
    max-height: 45vh;
}

.text-container span:nth-of-type(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.header {
    font-weight: 800;
}

.image-container {
    flex: 1;
    max-height: 45vh;
}

.author-container {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    font-style: italic;
}
</style>