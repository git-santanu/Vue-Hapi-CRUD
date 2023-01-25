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
import store from '@/store';
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
            try {
                await store.dispatch('login', {
                    email: this.email,
                    password: this.password
                });
                alert('Login successfully');
                this.$router.push({ name: 'Home' })
            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>