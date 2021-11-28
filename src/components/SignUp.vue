<template>
    <img class="logo" src="../assets/app-logo.png"/>
    <h1> Sign Up </h1>
    <div class="register">
        <input type="text" v-model='name' placeholder="Enter full name"/>
        <input type="email" v-model='email' pattern=".+@globex\.com" size="30"  placeholder="Enter Email" required>
        <input type="password" v-model='password' placeholder="Enter Password"/>
        <input type="text" v-model='phone' placeholder="Enter phone number" pattern="[0-9]{10}" />
        <button @click="signUp"> Sign up </button>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data(){
        return{
            name:'',
            email:'',
            password:'',
            phone:''
        }
    },
    methods:{
        async signUp(){
            console.warn(this.email,this.name,this.password,this.phone);
            axios.get("http://localhost:8080/api/users/register",{
                params:{
                    email:this.email,
                    fullName:this.name,
                    pass:this.password,
                    phoneNum:this.phone
                }
            
            }).then(response => {
                    if ( response.data == false )
                        alert("Error signing up, try later");
                    else{
                        localStorage.setItem('user-info',JSON.stringify({
                                                            'email':this.email,
                                                            'fullName':this.name,
                                                            'pass':this.password,
                                                            'phoneNum':this.phone
                                    }))
                        
                        this.$router.push({name:'Home'})

                    }
                })
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

<style >
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