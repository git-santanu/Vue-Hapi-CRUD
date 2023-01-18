<template>
    <section>
        <h1>Sign Up form</h1>
        <div class="container">

            <div class="form-group">
                <label for="firstname">First name: </label>
                <input type="text" id="firstname" placeholder="first name" v-model="firstName">
            </div>
            <div class="form-group">
                <label for="lasttname">Last name: </label>
                <input type="text" id="lasttname" placeholder="last name" v-model="lastName">
            </div>
            <div class="form-group">
                <label for="password">Email: </label>
                <input type="text" id="email" placeholder="email here" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="password" id="password" placeholder="password" v-model="password">
            </div>
            <div class="form-group">
                <label for="mobile">Mobile no: </label>
                <input type="number" id="mobile" placeholder="mobile" v-model="mobile_number">
            </div>
            <button v-on:click="signUp">Sing Up</button>
            <br>
            <p><router-link to="/log-in">If you have registered tap here to LogIn</router-link></p>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobile_number: ''
        }
    },
    methods: {
        async signUp() {
            const result = await axios.post('http://localhost:5000/api/user-registration', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                mobile_number: this.mobile_number
            })
            console.warn('result>>>', result);
            if (result.data.statusCode == 200) {
                console.warn('item>>', JSON.stringify(result.data))
                localStorage.setItem('user-register>', JSON.stringify(result.data))
                this.$router.push({ name: 'Home' })
            }
            console.warn('Sign up', this.firstName, this.lastName, this.email, this.password, this.mobile_number)
        }
    },
    mounted() {
        const user = localStorage.getItem('user-register>');
        const logUser = localStorage.getItem('user-login>')
        console.log('logdta>>>>',logUser)
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }else if(!logUser){
            this.$router.push({name: 'SignUp'})
        }else{
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: "Montserrat";
}

section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
}

.form-group {
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
}
button {
    width: 100%;
    border: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    background-color: aqua;
}

</style>