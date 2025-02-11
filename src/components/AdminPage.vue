<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// Ensure only admins can access this page
if (!authStore.currentUser || authStore.currentUser.username !== 'admin') {
    alert("Access Denied! Only admins can access this page.");
    router.push('/'); // Redirect to home page
}

const clearAllUsers = () => {
    if (confirm("Are you sure you want to delete all users? This cannot be undone.")) {
        authStore.clearUsers();
        alert("All user data has been deleted!");
    }
};
</script>

<template>
  <div class="admin-page">
    <h1>Admin Panel</h1>
    <p>Welcome, {{ authStore.currentUser?.username || 'Unknown Admin'}} </p>

    <button class="clear-users-button" @click="clearAllUsers">Clear All Users</button>
  </div>
</template>

<style>
.admin-page {
    text-align: center;
    padding: 20px;
}

.clear-users-button {
    background: red;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}
</style>
