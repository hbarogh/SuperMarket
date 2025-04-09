<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
// import TheWelcome from './components/TheWelcome.vue';
import navBar from './components/navBar.vue';
// import AddItemButton from './components/AddItemButton.vue';
import {computed, ref} from 'vue';
import cartStore from './cartStore';


const selectedCategory = ref(null);


const filteredItems = computed(() => {
    if(!selectedCategory.value) {
        return cartStore.items;
    }
    return cartStore.items.filter(item => item.category === selectedCategory.value);
});
</script>

<template>
  <navBar @category-selected="(category) => selectedCategory = category"/>
  <router-view :selectedCategory="selectedCategory" />

  
</template>

<style scoped>

</style>
