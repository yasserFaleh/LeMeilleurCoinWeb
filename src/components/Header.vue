<template>
    <div class="nav">
        <a href="home">Home</a>
        <a href="home">Add an offer or demand </a>
        <a href="home">Update my offers and demands</a>
        <a v-if="connected == false" id="login" href="login">Login</a>
        <a v-else @click="logout" id="logout" href="#">Log out</a>
    </div>  
</template>
<script>
export default {
    name: "Header",
    data(){
        return {
            connected:false
        }
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        console.warn(user);
        if ( user != null )
            this.connected = true
        else 
            this.connected = false

    }
};
</script>
<style >
.nav{
    background: #fff;
    overflow: hidden;
}
#logout {
    float: right;
    margin-right: 0px;
}
#login {
    float: right;
    margin-right: 0px;
}
.nav a {
    float:left;
    color: #ff6e14;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav img {
    float:left;
    color: #f2f2f2;
    height: 40px;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
    background-color: #fff;
}

.nav a:hover{
    background-color: #fff ;
    color:#222;
}

</style>