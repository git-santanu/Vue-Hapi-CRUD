<template>
    <section>
        <h1>Login here</h1>
        <div class="container">
            <div class="form-group">
                <label for="email">Email: </label>
                <input type="text" id="email" placeholder="email here" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="password" id="password" placeholder="password" v-model="password">
            </div>
            <button v-on:click="login">login</button>
            <br>
            <p><router-link to="/sign-up">If you haven't registered yet, tap here to Sign up</router-link></p>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            console.warn('Login info>>', this.email, this.password);
            const result = await axios.post('http://localhost:5000/api/user-login', {
                email: this.email,
                password: this.password
            });
            console.warn('Login info>>>', result);
            if (result.data.statusCode===200) {
                alert('Login successfully');
                this.$router.push({ name: 'Home' });
                localStorage.setItem('user-login>', JSON.stringify(result.data))
            } else if (result.data.statusCode === 400) {
                this.$router.push({ name: 'SignUp' })
            } else {
                alert('internal error: 500')
            }
        }
    },
    created() {
        const user = localStorage.getItem('user-login>');
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>