<template>
    <img @error="setDefaultImage" :src='"https://image.tmdb.org/t/p/original" + ImageURL' :alt="ImageAlt">
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: 'ContentImage',
    props: {
        ImageURL: {
            type: String as PropType<string | undefined>,
            required: false,
        },
        ImageAlt: {
            type: String as PropType<string | undefined>,
            required: true,
            default: 'Default Alt Text'
        }
    },
    methods: {
        setDefaultImage(event: Event) {
            const target = event.target as HTMLImageElement;
            target.src = require('@/assets/images/default-movie.png');
        }
    }
})
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>