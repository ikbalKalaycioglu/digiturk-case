<template>
  <router-view class="view-region"></router-view>
</template>

<script lang="ts">
export default {
  mounted() {
    Element.prototype.scrollIntoViewVertically = function () {
      const viewRegion = document.querySelector('.view-region');
      if (viewRegion && this instanceof HTMLElement) {
        viewRegion.scrollTop = this.offsetTop - (window.innerHeight / 2);
      }
    };

    Element.prototype.scrollIntoViewHorizontally = function (parent: HTMLElement) {
      if (this instanceof HTMLElement) {
        parent.scrollLeft = this.offsetLeft - (parent.clientWidth / 2) + (this.clientWidth / 2);
      }
    };
  }
}
</script>
<style>
#app {
  overflow: hidden;
}

.view-region {
  height: 100vh;
  overflow: auto;
  position: relative;
  margin: 10px;
}

::-webkit-scrollbar {
  display: none;
}
</style>
