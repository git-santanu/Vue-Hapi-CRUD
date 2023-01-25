<template>
    <Header />
    <h1>Hello, {{ name }} welcome to home page</h1>
    <h1>Vuex data is: {{ vueData }}</h1>
    <button class="btn" @click="updateData(1)">Add</button>
    <button class="btn" @click="updateData(-1)">Remove</button>
    <section>
        <table border="1">
            <th>Id:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Action</th>
            <th>Image</th>
            <tr v-for="users in showUsers" :key="users.id">
                <td>{{ users.id }}</td>
                <td>{{ users.name }}</td>
                <td>{{ users.email }}</td>
                <td>
                    <router-link :to="'/update/' + users.id">Update</router-link><br>
                    <router-link :to="'/delete/' + users.id">Delete</router-link>
                </td>
                <td>
                    <div>
                        <input type="file" @change="selectImg">
                        <h6 v-if="showMsg">{{ showMsg }}</h6>
                        <button v-if="!showMsg" class="btn" @click="onUpload">Upload</button>
                    </div>
                </td>
            </tr>
        </table>
    </section>
</template>
<script>
import axios from 'axios';
import Header from '../../components/Header.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    name: 'Home',
    computed: {
        //------ vuex data handling with Option API-------
        //  vueData(){
        //     return this.$store.state.data
        //  }
    },
    //------ vuex data handling with Composition API-------
    setup() {
        const store = useStore();
        // console.log('userdata>', store.state.user);
        // store.commit('setUser', 'Loris')
        return {
            vueData: computed(() => store.state.data),
            updateData: vueData => { store.commit('updateData', vueData) },
            user: computed(()=>store.state.user)
        }
    },
    data() {
        return {
            showUsers: [],
            name: '',
            selectedImg: null,
            showMsg: ''
        }
    },
    components: {
        Header
    },
    methods: {
        async showAllData() {
            // const user = localStorage.getItem('user-add');
            // if (!user) {
            //     this.$router.push({ name: 'Home' });
            // }
            const result = await axios.get('http://localhost:3005/api/show-all-details');
            console.log('res>>>', result);
            this.showUsers = result.data.users;
            console.log('Comp is loaded')
        },
        selectImg(e) {
            console.log(e.target.files[0]);
            const url = URL.createObjectURL(e.target.files[0])
            this.selectedImg = url
        },
        async onUpload() {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            const data = new FormData();
            data.append('file', this.selectedImg)
            const imgRes = await axios.post('http://localhost:3005/api/file-upload', data, config)
            console.log('img data', imgRes.data);
            this.showMsg = imgRes.data.msg
        },
        //------ vuex data handling with Option API-------
        // updateData(vueData){
        //    this.$store.commit('updateData',vueData)
        // }
    },
    mounted() {
        this.showAllData();
        const userLogin = JSON.parse(localStorage.getItem('user-login>'));
        console.log('logData>>>',userLogin)
        if (userLogin) {
            console.log('useLogData>>>>>>', userLogin.data.user.firstName);
            this.name = userLogin.data.user.firstName;
            console.log('username>>>>', this.name)
        } 
        const userSignUp = JSON.parse(localStorage.getItem('user-register>'));
        if (userSignUp) {
            console.log('useRegData>>>>>>', userSignUp.data.firstName);
            this.name = userSignUp.data.firstName;
            console.log('user name>>>>', this.name)
        } 

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