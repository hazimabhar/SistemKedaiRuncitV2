<template>
    <div>
      <label for="role">Select Role:</label>
      <select v-model="userRoles">
        <option value="manager">Manager</option>
        <option value="worker">Worker</option>
      </select>
      <button @click="login">Login</button>
    </div>
</template>
<script>
export default{
    data() {
        return{
            userRoles:'',
        }
    },
    methods:{
        login() {
            // this.$store.dispatch('updateRole', this.userRoles)
            sessionStorage.setItem(
                'user', this.userRoles
            )
            this.$router.push('/')
        },
    },
}
</script>