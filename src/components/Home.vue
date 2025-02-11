<script setup lang="ts">
import AddItemButton from './AddItemButton.vue';
defineProps({ selectedCategory: String });
</script>

<template>
  <div class="home-page">
    <AddItemButton :selectedCategory="selectedCategory" />
  </div>
</template>

<style >
.home-page {
  padding: 20px;
  /* background: linear-gradient(grey, black); */
}

</style>