<template>
    <Header />
    <h1>Welcome to Update user page</h1>
    <div class="container">
        <div class="form-group">
            <label for="id">Id: </label>
            <input type="text" name="id" v-model="id" />
        </div>
        <div class="form-group">
            <label for="name">Name: </label>
            <input type="text" name="name" v-model="name" />
        </div>
        <div class="form-group">
            <label for="email">Email: </label>
            <input type="text" name="email" v-model="email" />
        </div>
        <button v-on:click="updateUser">Update User</button>
    </div>
</template>
<script>
import axios from 'axios';
import Header from '../../components/Header.vue';

export default {
    name: 'UpdateDetails',
    components: {
        Header
    },
    data() {
        return {
            id: '',
            name: '',
            email: ''
        }
    },
    methods: {
        async updateUser() {
            console.warn('Upadted user>', this.id, this.name, this.email);
            const result = await axios.post('http://localhost:3005/api/update', {
                id: this.id,
                name: this.name,
                email: this.email
            });
            console.log('result updating>>>', result.data);
            if (result.data) {
                alert('Details updated successfully!');
                localStorage.setItem('user-updated', JSON.stringify(result.data));
                this.$router.push({ name: 'Home' })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-add');
        console.log('id>>>', user.id)
        if (!user) {
            this.$router.push({ name: LogIn })
        }
        console.warn(this.$route.params.id);
        const result = await axios.get(`http://localhost:3005/api/view/${this.$route.params.id}`);
        console.log('updating>>>', result.data.userDetails);
        console.log('>>>>>', result.data.userDetails[0].id)
        this.id = result.data.userDetails[0].id;
        this.name = result.data.userDetails[0].name;
        this.email = result.data.userDetails[0].email;
    }
}
</script>   