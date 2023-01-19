<template>
    <Header />
    <h1>Hello, {{ name }} welcome to home page</h1>
    <section>
        <table border="1">
            <th>Id:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Action</th>
            <tr v-for="users in showUsers" :key="users.id">
                <td>{{ users.id }}</td>
                <td>{{ users.name }}</td>
                <td>{{ users.email }}</td>
                <td>
                    <router-link :to="'/update/' + users.id">Update</router-link><br>
                    <router-link :to="'/delete/' + users.id">Delete</router-link>
                </td>
            </tr>
        </table>
    </section>
</template>
<script>
import axios from 'axios';
import Header from '../../components/Header.vue';
export default {
    name: 'Home',
    data() {
        return {
            showUsers: [],
            name: ''
        }
    },
    components: {
        Header
    },
    methods: {
        async showAllData() {
            const user = localStorage.getItem('user-add');
            if (!user) {
                this.$router.push({ name: 'Home' });
            }
            const result = await axios.get('http://localhost:3005/api/show-all-details');
            console.log('res>>>', result);
            this.showUsers = result.data.users;
            console.log('Comp is loaded')
        }
    },
    created() {
        this.showAllData();
        const userLogin = JSON.parse(localStorage.getItem('user-login>'));
        console.log('useLogData>>>>>>',userLogin.data.user.firstName);
        this.name = userLogin.data.user.firstName;
        console.log('user name>>>>',this.name)
    }
}
</script>
<style>
.btn {
    width: 20%;
    border: none;
    padding: 10px;
    font-size: 10px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 7px;
    background-color: aqua;
    margin-left: 10px;
}

;

.deltxt {
    text-align: center;
}
</style>