<script setup lang="ts">
import {NButton, NInput, NModal, NCard, NGrid, NGridItem, NSelect} from 'naive-ui';
import { useAuthStore } from '../stores/authStore';
import {useRouter, useRoute} from 'vue-router';
import { onMounted, ref, computed} from 'vue';
import cartStore from '@/cartStore';
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const selectedCategory = ref<string | null>(null); 

const isHomePage = computed(function() {
  return route.name === "Home";
})
onMounted(() => {
  authStore.loadUserFromLocalStorage();
});
function handleLogout(): void{
  authStore.logout();
  alert('You have been logged out!');
  router.push('/sign-in');
};

const categories = computed(() => {
  const uniqueCategories = new Set(cartStore.items.map((item) => item.category));
  return Array.from(uniqueCategories).map(category => ({
    label: category,
    value: category
  }));
});

const emit = defineEmits(['categorySelected']);
const handleCategoryChange = (value: string | null) => {
  selectedCategory.value = value;
  emit('categorySelected', value);
};
</script>

<template>
  <nav class="nav-bar">
    <div class = nav-content>
      <ul class="nav-links">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            Cart
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            Contact
          </router-link>
        </li>
        <li v-if="!authStore.currentUser">
          <router-link to="/sign-in">
            Sign In
          </router-link>
        </li>
        <li v-else>
          <!-- {{ authStore.currentUser.username }} -->
          <span class="username-display"> Welcome, {{ authStore.currentUser?.username || 'Guest' }}</span>
          <n-button class="logout-button" @click="handleLogout" round >Logout</n-button>
        </li>
        <li v-if="authStore.currentUser && authStore.currentUser.username === 'admin'">
          <router-link to="/admin">
            Admin Panel
          </router-link>
        </li>
      </ul>
      <h1 class="nav-title">
            <router-link to="/" class="store-name">
              Hayden's Supermarket
            </router-link>
      </h1>
      <div >
        <!-- <n-input @click="showModal=(!showModal)" class="search-bar" placeholder="Search products by categories">

        </n-input> -->
        <n-select v-model:value="selectedCategory" v-if="isHomePage" :options="categories" size="medium" class="category-dropdown" placeholder="Select products by categories" @update:value="handleCategoryChange" clearable/>
      </div>
    </div>
    
  </nav>

</template>


<style>
.nav-bar {
  display: flex;
  align-items: center; /* Centers items vertically */
  justify-content: space-between; 
  padding: 10px;
  background-color: rgb(0 78 54);
  flex-wrap: wrap;
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 1000; */
  
}
.nav-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; 
  text-align: center;
  /* flex-direction: column; */
  /* max-width: 1200px;  */
  /* width: 100%; */
}
.store-name{
  color:white;
  text-decoration: none;
}
.store-name:hover{
  text-decoration: underline;
}


.nav-title { 
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0 auto;
  /* margin-top: 10px; */
  /* flex: 1;  */
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adds spacing between links */
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
}
.nav-links a:hover{
  text-decoration: underline;
}


@media (max-width: 768px) {
  .nav-bar {
    flex-direction: column;
  }
  .nav-content{
    flex-direction: column;
    width: 100%;
  }
  
  .nav-links {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
  .nav-title{
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-top: 10px;
    padding-left: none;
  }
}

.sign-in-button{
  display: flex;
  /* color: white; */
}
.username-display {
  color: white;
  font-weight: bold;
  margin-right: 10px;
}

.logout-button {
  background: rgb(0, 78, 54);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.category-dropdown{
  /* margin: 0 5rem; */
  padding-left: 1rem;
  /* border-radius: 50px; */
  width: 350px;
}
/* 
.modal-card {
  max-width: 800px;
  padding: 20px;
}

.modal-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.category-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.category-item {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.category-item:hover {
  transform: scale(1.1);
}

.category-name {
  font-size: 1rem;
} */
</style>