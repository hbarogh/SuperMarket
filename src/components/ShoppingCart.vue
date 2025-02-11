<script setup lang="ts">
import { NCard, NButton, NInput, NDropdown } from 'naive-ui';
import cartStore from '../cartStore';
const options = Array.from({ length: 10 }, (_, i) => ({
    label: i + 1,
    key: i + 1
}));


const submitOrder = () => {
    alert("Thank you for your order!");
    cartStore.cartItems = [];
}
const removeCartItem = (index: number) => {
    cartStore.removeItem(index)
};

const updateQuantity = (index: number, quantity: number) => {
    cartStore.updateQuantity(index, quantity);
}
const calculateCartPrice = () => {
    cartStore.calculateCartPrice();
}
const getTotalPrice = () => cartStore.calculateCartPrice();

</script>


<template>
    <div class="shopping-cart">
        <n-card class="shoppingCard" :border="true" :hoverable="false">
            <h1 class="title" >Shopping Cart ${{ getTotalPrice() }}</h1>
            <p v-if="cartStore.cartItems.length === 0">You have nothing in your cart, buy some stuff!!</p>
            <ul>
                <li v-for="(item, index) in cartStore.cartItems" :key="index" class="cartItem">
                    <n-card class="item-card" :hoverable="true">
                        <div class="item-details">
                            <img :src="item.image" class="item-image" />
                            <!-- <h3 class="item-name-title">{{ item.name }}</h3> -->
                            <p class="item-name-title">{{ item.name }}</p>
                            <p class="item-price">${{ item.price * item.quantity }}</p>
                        </div>
                        <div class="item-actions">
                            <n-dropdown trigger="click" :options="options"
                                @select="(quantity: number) => updateQuantity(index, quantity)">
                                <n-button class="qty-button" @change="calculateCartPrice()">Qty: {{ item.quantity
                                    }}</n-button>
                            </n-dropdown>
                            <n-button round @click="removeCartItem(index)"
                                style="background-color: rgb(0, 78, 54); color: white;">Remove</n-button>
                        </div>
                    </n-card>
                </li>
            </ul>
        </n-card>

        <n-card class="summaryCard" :border="true" :hoverable="false">
            <h1 class="TotalTitle">Summary</h1>
            <p class="cart-total" style="font-weight: bold; font-size: medium;">Total: ${{ getTotalPrice() }} </p>
            <n-button :disabled="cartStore.cartItems.length === 0" size="large" @click="submitOrder()"
                style="background-color: rgb(0, 78, 54); color: white; align-items: center;">Submit Order</n-button>
        </n-card>
    </div>
</template>

<style>
.shopping-cart {
    padding: 20px;
    text-align: center;
    gap: 20px;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    /* flex-wrap: wrap; */
}

.shopping-cart ul {
    list-style-type: none;
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.item-image {
    margin-right: 15px;
    border-radius: 5px;
    padding-bottom: 10px;
    /* width: 100%;
    height: auto;
    object-fit: cover; */
}

.item-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: nowrap;
    min-width: 0;
    overflow: hidden;
    width: 100%;
}

.item-name-title {
    align-items: center;
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;
    /* Prevents text from wrapping */
    overflow: hidden;
    /* Ensures it doesn’t push elements out */
    flex-grow: 1;
}

.item-price {
    text-align: left;
    /* padding-left: 100px; */
    white-space: nowrap;
    align-items: center;

}

.item-actions {
    gap: 10px;
    display: flex;
}


@media(max-width: 700px) {
    .shopping-cart {
        flex-wrap: wrap;
    }
    .item-card{
        width: 100%;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .item-image{
        margin-right: 0px;
    }
    .item-name-title {
        font-size: 0.7rem;
    }

    .item-price {
        font-size: 0.8rem;
    }
}

.title{
    font-size: x-large;
}
</style>