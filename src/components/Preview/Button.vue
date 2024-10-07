<template>
    <div class="button-container">
        <div class="button">
            <i class="pi pi-sort-up-fill"></i>
            <span>İzle</span>
        </div>
        <div class="button">
            <i class="pi pi-plus-circle"></i>
            <span>Fav. Ekle</span>
        </div>
        <div class="button">
            <i class="pi pi-star"></i>
            <span>Puanla</span>
        </div>
        <div class="button" :onClick="handleBack" @keydown.enter="handleBack">
            <i class="pi pi-arrow-left"></i>
            <span>Geri</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Button',
    mounted() {

    },
    methods: {
        handleBack() {
            this.$router.go(-1);
        }
    }
});
</script>

<style scoped>
.button-container {
    display: flex;
    gap: 3vw;
    margin-top: 3vh;
}

.button {
    display: inline-flex;
    font-size: 1.6vw;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 1vw;
    padding: .8vw;
    width: 11vw;
    line-height: 0.5;
    cursor: pointer;
}

.button:focus,
.button:hover {
    outline: none;
    background-color: white;
    color: black;
}

.pi-sort-up-fill {
    rotate: 90deg;
}
</style>