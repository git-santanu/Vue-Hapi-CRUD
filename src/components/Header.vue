<template>
    <div class="nav">
        <a href="/"><router-link to="/"></router-link>Home</a>
        <a href="#" v-on:click="addDetails">Add</a>
        <a href="#" v-on:click="logout">Logout</a>
        <a href="#">Hi {{ userName }}, {{ greetUser }}</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            userName: '',
            greetUser: ''
        }
    },
    methods: {
        logout() {
            console.log('Logout clicked');
            localStorage.clear();
            this.$router.push({ name: 'LogIn' })
        },
        addDetails() {
            console.log('Details added');
            this.$router.push({ name: 'AddDetails' })
        }
    },
    mounted() {
        const userLogin = JSON.parse(localStorage.getItem('user-login>'));
        const userSignUp = JSON.parse(localStorage.getItem('user-register>'));
        // console.log("userSignUp>>>",userSignUp.data)
        if (userLogin) {
            this.userName = userLogin.data.user.firstName;
            const dateTime = new Date();
            const getHour = dateTime.getHours();
            console.log(getHour)
            if (getHour >= 12 && getHour < 16) {
                this.greetUser = 'Good Noon';
            } else if (getHour >= 16 && getHour < 23) {
                this.greetUser = 'Good Night'
            } else {
                this.greetUser = 'Good Morning'
            }
        }
        if (userSignUp) {
            this.userName = userSignUp.data.firstName;
            const dateTime = new Date();
            const getHour = dateTime.getHours();
            console.log(getHour)
            if (getHour >= 12 && getHour < 16) {
                this.greetUser = 'Good Noon';
            } else if (getHour >= 16 && getHour < 23) {
                this.greetUser = 'Good Night'
            } else {
                this.greetUser = 'Good Morning'
            }
        }

    }
}
</script>
<style>
.nav {
    background-color: black;
    overflow: hidden;
}

.nav a {
    float: left;
    color: beige;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: #fff;
    color: #333;
}
</style>