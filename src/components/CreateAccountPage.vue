<script setup lang="ts">
import { NForm, NFormItem, NInput, NCard, NButton, NCheckbox } from 'naive-ui';
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue';
import {useRouter} from 'vue-router';
const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const router = useRouter();
const goToSignIn = () => {
    router.push({name: 'SignInPage'});
};

function handleCreateAccount(): void{
    if(!username.value || !password.value){
        errorMessage.value = 'All input fields are required!';
        return;
    }
    try{
        authStore.register(username.value, password.value);
        alert('Account created Successfully');
        username.value = '';
        password.value = '';
    } catch(error: any){
        errorMessage.value = error.message;
    }
};
</script>

<template>
    <div class="SignIn-page">
        <n-card class="SignInCard" :hoverable="true">
            <h2 class="SignIn-title">Create your Hayden's account</h2>
            <n-form >
                <n-checkbox>Keep me signed in
                </n-checkbox>
                <n-form-item>
                    <n-input v-model:value="username" class="sign-in-input" placeholder="Username" required="true"/>
                </n-form-item>
                <n-form-item>
                    <n-input v-model:value="password" class="sign-in-input" placeholder="Password" />
                </n-form-item>
                <n-button class="createAccount-button" type="primary" block round @click="handleCreateAccount" >
                    Create Account
                </n-button>
                <div class="divider">
                    <span>or</span>
                </div>
                <n-button class="sign-in-button" type="primary" block round @click="goToSignIn">
                    Sign in
                </n-button>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </n-form>
        </n-card>
    </div>
</template>

<style>
.SignIn-page {
    justify-content: center;
    display: flex;
    height: 100vh;
}
.n-form-item{
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}

.SignIn-title {
    background-color: #ffffff;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.SignInCard {
    justify-content: center;
    align-items: center;
    /* display: flex; */
    width: 100%;
    border-radius: 20px;
    /* max-width: 400px; */

}

.sign-in-input {
    width: 100%;
    height: 45px;
    font-size: 14px;
    border-radius: 8px;
}
.createAccount-button {
    height: 50px;
    font-size: 16px;
    margin-top: 10px;
    background-color: rgb(0, 78, 54);
}
</style>