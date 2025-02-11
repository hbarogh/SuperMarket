import {defineStore} from 'pinia';
interface User{
    username: string, 
    password: string,
}
export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: JSON.parse(localStorage.getItem('users') || '[]') as User[], //this will load the users from local storage
        currentUser: JSON.parse(localStorage.getItem('currentUser') || 'null') as User | null, //this is who is currently logged in
    }),

    actions: {
        register(username: string, password: string) {
            //look at line below 
            let userExists = false;
            for (let i = 0; i < this.users.length; i++){
                if(this.users[i].username === username){
                    userExists = true;
                    break;
                }
            }
            // const userExists = this.users.some((user: User) => user.username === username);
            // console.log(this.users)
            if(userExists){
               throw new Error("Username already exists. Choose a different one.");
            }

            //creates a new user object and adds it to the users array
            const newUser: User = {username, password}; 
            this.users.push(newUser);
            //updates local storage so that it will last even if there is a page refresh
            localStorage.setItem('users', JSON.stringify(this.users)); 
        },
        login(username: string, password: string){
            const user = this.users.find((user:User) => user.username == username && user.password === password);
            console.log(`username: ${username}`)
            console.log(`password: ${password}`)
            if(!user){
                throw new Error("Invalid username or password");
            }

            this.currentUser = {...user};
            localStorage.setItem('currentUser', JSON.stringify(user));
        },

        logout() {
            console.log(`current user: ${this.currentUser}`)
            this.currentUser = null;
            localStorage.removeItem('currentUser');
        },

        loadUserFromLocalStorage() {
            const storedUser = localStorage.getItem('currentUser');
            if(storedUser){
                this.currentUser = JSON.parse(storedUser);
            }
        },
        clearUsers(){
            this.users = [];
            this.currentUser = null;
            localStorage.clear();
        }
    }
})