<template>
    <Header/>
     <div class="card">
        <div class="container">
            <div class="register">
                <div>
                    <input type="radio" id="one" value="Product" v-model="picked">
                    <label for="one">Product</label>
                    <input type="radio" id="two" value="Demand" v-model="picked">
                    <label for="two">Demand</label>
                </div>
                <br>
                <div class = "cont">
                    <label for="category">Category:</label>
                    <select id="category" v-model="category">
                        <option>Other</option>
                        <option>Mode</option>
                        <option>Vehicles</option>
                        <option>Multimedia</option>
                        <option>Service</option>
                        <option>Job</option>
                        <option>Immovable</option>
                       
                    </select>
                    <br>
                    <label for="title">Title:</label>
                    <input type="text" id="title" v-model='title' pattern=".+@globex\.com" size="30"  placeholder="Enter Title" required>
                    <br>
                    <label for="description">Description:</label>
                    <textarea class="description" id="description" type="text" v-model='description' placeholder="Enter a description"/>
                    <br>
                    <label for="price">Price:</label>
                    <input class="price" id="price" type="number" v-model='price' placeholder="Enter a price"/>
                    <br>
                    <p class="error" v-if="isError">  {{ error }}</p>
                    <button @click="add"> Add </button>
                    
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
import {API_HOST} from '../config'

export default {
    name: "Add",
    data(){ 
      return {
          title:'',
          description:'',
          price: 0,
          error:"Please enter all the information about your product or demand !",
          isError : false,
          picked:'Product',
          category:'Other'
      }
    },
    components:{
        Header
    },
    methods : {
        add(){
            if ( this.title == '' || this.description == '' ){
                 this.isError = true
            }else {
                // getting the email of the current user
                let user = localStorage.getItem('user-info');
                let userEmail = JSON.parse(user).email

                // getting the type ( product  or demand ) 
                var url
                if ( this.picked == 'Product') {
                    url = `${API_HOST}/api/products/create`
                }else {
                    url = `${API_HOST}/api/offers/create`
                }
                var price = 0
                // getting the price 
                if ( this.price != '' )
                    price = this.price

                let body ={
                    category: this.category.toUpperCase(),
                    description: this.description,
                    price:price,
                    productStatus: "AVAILABLE",
                    title: this.title,
                    userEmail: userEmail
                };
                axios.post(url,body).then(response => {
                    if ( response.data == false )
                        alert("Error creating !");
                    else {
                        this.price=0
                        this.description = ""
                        this.title = ""
                        alert("Created succesfuly !");
                    }

                })
            }
        }
        
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'Login'})
        }
    }
};
</script>

<style scoped>
select{
   width:150px;
    margin: 20px;
    height: 30px;

}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 50px;
  margin-right: 100px;
  margin-left:20% ;
  width: 50%;
  min-width: 500px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.error{
    color : red;
}

/* Add some padding inside the card container */
.container {
  margin-left: 10%;
  padding: 20px 26px;
}

.container div input{
    margin-top : 10px;
}
.container div label{
    margin-right: 20px;
}
button{
    width: 80px;
    background-color: #ff6e14;
    border-radius: 4px;
    cursor: pointer;
    font-family: Avenir,Open Sans,sans-serif,Arial;
    font-size: 1.1rem;
    margin-top:15px;
    margin-left: 40%;
}
select{
   width:150px;
   margin-top:0px ;
    margin-bottom: 20px;
    height: 30px;

}
#search {
    height: 30px;
    width: 200px;
    margin-bottom: 20px;
}
#title{
    margin-left: 55px;
    width: 250px;
        height: 30px;
    margin-top: 0px;
    margin-bottom: 30px;

}
#description{
    margin-top: 0px;
    margin-left: 4px;
    width: 250px;
    height: 50px;
    margin-bottom: 20px;

}
#price{
    margin-top: 0px;
    margin-left: 50px;
    width: 100px;
}
.cont label {
    vertical-align: top;
}
</style>

