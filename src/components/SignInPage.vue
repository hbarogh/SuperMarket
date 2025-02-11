<script setup lang="ts">
import { NForm, NFormItem, NInput, NCard, NButton, NCheckbox } from 'naive-ui';
import { ref, TrackOpTypes } from 'vue';
import { useAuthStore } from '../stores/authStore';
import {useRouter} from 'vue-router';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const router = useRouter();
const goToCreateAccount = () => {
    router.push({name: 'CreateAccountPage'});
};

function handleSignIn(): void{
    if(!username.value || !password.value){
        errorMessage.value = 'All input fields are required!';
        return;
    }
    try{
        authStore.login(username.value, password.value);
        alert('Sign-in successful!');
        username.value = '';
        password.value = '';
    } catch(error:any){
        errorMessage.value = error.message;
    }
};

</script>

<template>
    <div class="SignIn-page">
        <n-card class="SignInCard" :hoverable="true">
            <h2 class="SignIn-title">Sign into your Hayden's account</h2>
            <n-form @submit.prevent="handleSignIn">
                <n-checkbox>Keep me signed in

                </n-checkbox>
                <n-form-item>
                    <n-input v-model:value="username" class="sign-in-input" placeholder="Username" />
                </n-form-item>
                <n-form-item>
                    <n-input v-model:value="password" class="sign-in-input" placeholder="Password" />
                </n-form-item>
                <n-button class="sign-in-button" type="primary" block round @click="handleSignIn()">Sign In</n-button>
                <div class="divider">
                    <span>or</span>
                </div>
                <n-button class="createAccount-button" type="primary" block round @click="goToCreateAccount()">
                    Create Account
                </n-button>
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
    /* margin-bottom: 15px; */
    border-radius: 8px;
}

.sign-in-button {
    height: 50px;
    font-size: 16px;
    margin-top: 10px;
    background-color: rgb(0, 78, 54);
}
.createAccount-button {
    height: 50px;
    font-size: 16px;
    margin-top: 10px;
    background-color: rgb(0, 78, 54);
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  position: relative;
}

.divider span {
  background: #fff;
  padding: 0 10px;
  font-size: 14px;
  color: #666;
}

.divider:before,
.divider:after {
  content: "";
  flex: 1;
  height: 1px;
  background: #ccc;
  margin: 0 10px;
}
</style>