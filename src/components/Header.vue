<template>
    <div class="nav">
        <a href="/"><router-link to="/"></router-link>Home</a>
        <a href="#" v-on:click="addDetails">Add</a>
        <a href="#" v-on:click="logout">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
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