<template>
    <div class="nav">
        <img class="logo" src="../assets/app-logo-mini.png"/>
        <router-link to="/">New Search</router-link>
        <router-link to="add">Add an offer or demand </router-link>
        <router-link to="myProducts">My Products</router-link>
        <router-link to="myDemands">My Demands</router-link>
        <a v-if="connected == false" id="login" href="login">Login</a>
        <a v-else @click="logout" id="logout" href="#">Log out</a>
    </div>  
</template>
<script scoped>
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
    width: 120px;
    height: 55px;
    padding-left: 20px;
    padding-right: 30px;
}

.nav a:hover{
    background-color: #fff ;
    color:#222;
}

</style>