<template>
    <Header />
    <h1> Add user here</h1>
    <div class="container">
        <div class="form-group">
            <label for="name">Name: </label>
            <input type="text" id="name" placeholder="name here" v-model="name">
        </div>
        <div class="form-group">
            <label for="email">Email: </label>
            <input type="text" id="email" placeholder="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Password: </label>
            <input type="text" id="password" placeholder="password" v-model="password">
        </div>
        <button v-on:click="addUser">Add User</button>

    </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/Header.vue';
export default {
    name: 'AddDetails',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async addUser() {
            console.warn('User add info', this.name, this.email, this.password);
            const result = await axios.post('http://localhost:3005/api/add', {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn('User addition>>', result);
            if (result.data) {
                alert('Details added successfully');
                localStorage.setItem('user-add', JSON.stringify(result.data));
                this.$router.push({ name: 'Home' })
            };
            this.name = '',
                this.email = '',
                this.password = ''
        }
    }
}
</script>