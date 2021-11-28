<template>
     <img class="logo" src="../assets/app-logo.png"/>
    <h1> Login </h1>
    <div class="register">
        <input type="email" v-model='email' pattern=".+@globex\.com" size="30"  placeholder="Enter Email" required>
        <input type="password" v-model='password' placeholder="Enter Password"/>
        <button @click="login"> Login</button>
    <p>
        <router-link to="/sign-up">Sign Up</router-link>
    </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            axios.get("http://localhost:8080/api/users/login",{
                params:{
                    email:this.email,
                    pass:this.password
                }
            
            }).then(response => {
                if ( response.data.email == this.email ){
                    localStorage.setItem('user-info',JSON.stringify(response.data))
                    this.$router.push({name:'Home'})
                }

            });
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }

}
</script>

<style>
.logo{
    width: 300px;
    height: 100px;
}
.register input{
    display: block;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #ff6c14;
}
.register button{
    width: 300px;
    height: 40px;
    border: 1px solid #ff6c14;
    background-color: #ff6c14;
    color: #fff;
    cursor: pointer;
}
</style>