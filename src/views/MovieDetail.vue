<template>
    <Preview v-if="fetchingData" :movieDetail="fetchingData" />
</template>

<script lang="ts">
import Preview from "@/components/player/Preview.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { Preview },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(newId: string) {
                const movieId = parseInt(newId);
                this.getData(movieId);
            }
        }
    },
    data() {
        return {
            fetchingData: null,
        }
    },
    async created() {
        const movieId = parseInt(this.$route.params.id);
        await this.getData(movieId);
    },
    methods: {
        async getData(movieId: number) {
            this.fetchingData = await this.$store.dispatch('getMovieById', movieId);
        }
    },

});

</script>

<style></style>