<script setup lang="ts">
import { ref, computed} from 'vue';
import { NButton, NInput, NGrid, NGridItem, NCard, NModal, NSpace, NSelect, NInputNumber } from 'naive-ui'
import cartStore from '../cartStore';
// import navBar from './navBar.vue';

const showModal = ref(false);
const showEditInputs = ref(false);
const itemName = ref<string>(''); //stores the item name
const itemId = ref<number | null>(null);
const itemPrice = ref<number | null>(null); //stores the item price
const tempPrice = ref<number | null>(null);
const itemCategory = ref<string>(''); //stores the category
const itemImage = ref<File | null>(null);
const selectedCategory = ref(null);

const categories = [
    {
        label: "Fruit",
        value: "Fruit"
    },
    {
        label: "Dairy",
        value: "Dairy"
    },
    {
        label: "Vegetable",
        value: "Vegetable"
    },
    {
        label: "Meat",
        value: "Meat"
    },
];


//methods:
const props = defineProps({selectedCategory: String});

const filteredItems = computed(() => {
    if (!props.selectedCategory || props.selectedCategory === null) {
        return cartStore.items;
    }
    return cartStore.items.filter(item => item.category === props.selectedCategory);
});
const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        itemImage.value = file;
    }
};

const submitItem = () => {
    console.log("submitItem function was triggered");

    if (itemName.value && itemPrice.value) {  // Remove `itemId.value !== null` check
        const newId = cartStore.items.length > 0 
            ? Math.max(...cartStore.items.map(item => item.id || 0)) + 1 
            : 1;  // Generate a new unique id
    // if (itemName.value && itemPrice.value !== null ) {
        console.log(`item category: ${itemCategory.value}`);
        cartStore.addItemsToItems({
            id: newId,
            name: itemName.value,
            price: itemPrice.value,
            image: itemImage.value ? URL.createObjectURL(itemImage.value) : "Image didn't work",
            quantity: 1,
            category: itemCategory.value,
        });
        console.log("submit Item function worked")
        itemName.value = '';
        itemPrice.value = null;
        itemImage.value = null;
        itemId.value = null;
        itemCategory.value = '';
        selectedCategory.value = null;
        showModal.value = false;
    }
};


const editPrice = (id: number) => {
    const index = cartStore.items.findIndex(item => item.id === id);
    if (tempPrice.value !== null && tempPrice.value >= 0) {
        cartStore.items[index].price = tempPrice.value;
        tempPrice.value = null;
        showEditInputs.value = false;
    }
};

const RemoveItem = (id: number) => {
    const index = cartStore.items.findIndex(item => item.id === id);
    if (index !== -1) {
        cartStore.items.splice(index, 1); // Remove by ID
    }
};

</script>

<template>
    <div>
        <div class="add-item-container">

            <n-button class="add-item-button" round @click="showModal = true">Add Item</n-button>
            <n-modal v-model:show="showModal" :mask-closable="true" Title="Add New Item">
                <n-card :bordered="true" :hoverable="false" title="Add new item" class="modal-card">
                    <div class="inputContainer">
                        <n-input v-model:value="itemName" placeholder="Enter Item name" />

                        <n-input-number v-model:value="itemPrice"  placeholder="Enter Item price"
                            label="Price:" />
                        <n-select v-model:value="itemCategory" :options="categories"
                            placeholder="Enter item category" />
                        <!-- <n-input v-model:value="itemCategory" placeholder="Enter item category"/> -->
                        <label class="fileInputLabel">
                            <span>Image:</span>
                            <input type="file" @change="handleImageUpload" />
                        </label>
                        <n-button round @click="submitItem">Submit</n-button>
                        <n-space>
                            <n-button round @click="showModal = false">Close</n-button>
                        </n-space>
                    </div>
                </n-card>
            </n-modal>

        </div>
        <n-grid cols="1 s:2 m:3 1:5" x-gap="10" y-gap="8" class="item-grid" responsive="screen">
            <n-grid-item v-for="item in filteredItems " :key="item.id" class="grid-item">
                <n-card :bordered="true" :hoverable="true"  class="grid-card">
                    <img v-if="item.image" :src="item.image" alt="Uploaded Image" class="item-image" />
                    <p>Name: {{ item.name }}</p>
                    <p>Price: ${{ item.price }}</p>
                    <p>Id: {{ item.id }}</p>
                    <p>Category: {{ item.category }}</p>
                    <n-button round style="background: rgb(0, 78, 54); color: white;" @click="RemoveItem(item.id)">Remove</n-button>
                    <n-button round style="background: white; color: rgb(0, 78, 54); font-weight:500; border-color: rgb(0, 78, 54);"
                        @click="showEditInputs = (!showEditInputs)">Edit</n-button>
                    <n-button round @click="cartStore.addItem(item)" style="color:rgb(0, 78, 54); font-weight: 500;">Add to Cart</n-button>
                    <div v-if="showEditInputs">
                        <n-input-number id="newPrice" v-model:value="tempPrice" 
                            placeholder="Enter new Item Price" />
                        <n-button round @click="editPrice(item.id)" style="background-color: rgb(0, 78, 54); color: white;">Submit</n-button>
                    </div>
                </n-card>
            </n-grid-item>
        </n-grid>


    </div>
</template>


<style>
.add-item-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
}

.add-item-button {
    background: rgb(0, 78, 54);
    color: white;
    align-self: flex-start;
    margin: 10px;
    /* transition: 0.2s ease-in-out; */
    /* width: 100%;
    max-width: 200px;
    padding: 10px;
    font-size: 1rem; */
}

.add-item-button:hover {
    text-decoration: underline;
    color: white;
    /* background: linear-gradient(to bottom, #555, #222); */
}

.inputContainer {
    max-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 12;


}

.grid-item {
    padding-top: 3rem;
}
.grid-card{
    text-align: center;
    border-radius: 20px;
    /* box-shadow: 0px 1px 8px 0px #000000; */
}

.fileInputLabel {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
}

.submitItem {
    align-self: flex-start;
}

.item-list {
    display: inline;


}

.item-image {
    width: auto;
    max-height: 150px;
    object-fit: cover;
    border-radius: 4px;
}

.modal-card {
    max-width: 300px;
    align-items: center;
    border-radius: 10px;
}
</style>