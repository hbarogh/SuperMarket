import {reactive, ref} from 'vue';

export const cartTotalPrice = ref(0);
    
const cartStore = reactive({
    items: [
        {
            id: 1,
            name: "Strawberry",
            price: 3,
            image: "/pictures/strawberry.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 2,
            name: "Watermelon",
            price: 8,
            image: "/pictures/watermelon.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 3,
            name: "Banana",
            price: 4,
            image: "/pictures/banana.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 4,
            name: "Whole Milk",
            price: 4,
            image: "/pictures/wholeMilk.jfif",
            quantity: 1,
            category: "Dairy"
        },
        {
            id: 5,
            name: "Cabbage",
            price: 6,
            image: "/pictures/cabbage.jfif",
            quantity: 1,
            category: "Vegetable"
        },
        {
            id: 6,
            name: "Orange",
            price: 4,
            image: "/pictures/orange.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 7,
            name: "Eggs",
            price: 4,
            image: "/pictures/eggCarton.jfif",
            quantity: 1,
            category: "Dairy"
        },
        {
            id: 8,
            name: "Kiwi",
            price: 8,
            image: "/pictures/kiwi.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 9,
            name: "Purple Grapes",
            price: 4,
            image: "/pictures/purple grapes.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 10,
            name: "Rotisserie Chicken",
            price: 7,
            image: "/pictures/chicken.jfif",
            quantity: 1,
            category: "Meat"
        },
        {
            id: 11,
            name: "Tomato",
            price: 3,
            image: "/pictures/tomato.jfif",
            quantity: 1,
            category: "Fruit"
        },
        {
            id: 12,
            name: "Ribeye Steak",
            price: 8,
            image: "/pictures/ribeye.jfif",
            quantity: 1,
            category: "Meat"
        },
        {
            id: 13,
            name: "Broccoli",
            price: 8,
            image: "/pictures/brocolli.jfif",
            quantity: 1,
            category: "Vegetable"
        },
    ] as Array<{ id: number; name: string; price: number; image: string; quantity: number, category: string}>,

    cartItems: [] as Array<{ id: number; name: string, price:number; image: string, quantity: number, category: string}>,

    addItem(item: {  id: number; name: string; price: number; image: string, quantity: number, category: string}): void {
        // console.log("addItem function was triggered");
        this.cartItems.push(item);
    },

    addItemsToItems(item: { id: number; name: string, price: number; image: string; quantity: number, category: string}): void{
        // console.log(item.category);
        console.log("Item being added:", item); // Debugging output
        this.items.push(item);
    },
    
    removeItem(index:number): void{
        this.cartItems.splice(index,1);
    },

    updateQuantity(index: number, quantity: number): void{
        if(this.cartItems[index]){
            this.cartItems[index].quantity = quantity;
        }
    },
    calculateCartPrice(): number{
        return this.cartItems.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    },
});

export default cartStore;