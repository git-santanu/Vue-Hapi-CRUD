<template>
    <Header />
    <h1>User has been deleted</h1>
</template>
<script>
import axios from 'axios';
export default {
    name: 'deleteDetails',
    async mounted() {
        console.warn('del id>>>>', this.$route.params.id);
        const result = await axios.get(`http://localhost:3005/api/delete/${this.$route.params.id}`);
        console.log('res>>>', result);
        if (result.data) {
            this.$router.push({ name: 'Home' })
        };
    }
}
</script>