<template>
    <Header />
    <div class="card">
        <div class="container">
            <div>
                <input type="radio" id="one" value="Product" v-model="picked">
                <label for="one">Product</label>
                <input type="radio" id="two" value="Demand" v-model="picked">
                <label for="two">Demand</label>
            </div>
            <br>
            <label for="category">Category:</label>
            <select id="category" v-model="category">
                <option>All categories</option>
                <option>Mode</option>
                <option>Vehicles</option>
                <option>Multimedia</option>
                <option>Service</option>
                <option>Job</option>
                <option>Immovable</option>
                <option>Other</option>
            </select>
            <input id="search" type="text" v-model="search" placeholder="What are you looking for? ( iphone, plombier ... ?)"/>
            <br>
             <p v-if="dataAvailable" class="results"> {{  resultSize }}  found </p>
            
            <button @click="searchBtn">Search</button> 
        </div>
    </div>
    
    <div v-if="dataAvailable">
        <div class="card">
           
        </div>
        <Product  v-for="product in result" :key="product.id" :title="product.title" :price="product.price" :description="product.description" :date="product.date" :mail="product.userEmail"/>
    </div>
</template>
<script>
import Header from './Header.vue' 
import axios from 'axios'
import Product from './Product.vue'
import {API_HOST} from '../config'

export default {
    name: "Home",
    data(){
      return {
          picked:'Product',
          category:'All categories',
          search:'',
          result:'',
          dataAvailable:false
      }  
    },
    components:{
        Header,
        Product
    },
    computed:{
        resultSize(){
            if ( this.result.length > 1)
                return this.result.length + " results "
            else 
                return this.result.length + " result "
        }   
    },
    methods:{
        searchBtn(){
            if ( this.search != ''){
                if ( this.picked == 'Product' ){
                    if ( this.category == 'All categories' ){                        
                        console.warn("category = "+this.search)
                        axios.get(`${API_HOST}/api/products/all`,{
                            params:{
                                title:this.search.toString(),
                                
                            }
                        }).then(response => {
                            this.result = response.data;
                            this.dataAvailable = true;
                        });
                    }else{
                        console.warn("category = "+this.search)
                        axios.get(`${API_HOST}/api/products/all`,{
                                params:{
                                    category:this.category.toUpperCase(),
                                    title:this.search.toString()
                                    
                                }
                            }).then(response => {
                                this.result = response.data;
                                this.dataAvailable = true;
                            });

                    }
                }
                else {
                    if ( this.category == 'All categories' ){
                        console.warn("category = "+this.search)
                        axios.get(`${API_HOST}/api/offers/all`,{
                            params:{
                                title:this.search.toString(),
                                
                            }
                        }).then(response => {
                            this.result = response.data;
                            this.dataAvailable = true;
                        });
                    }else{
                        console.warn("category = "+this.search)
                        axios.get(`${API_HOST}/api/offers/all`,{
                                params:{
                                    category:this.category.toUpperCase(),
                                    title:this.search.toString()
                                    
                                }
                            }).then(response => {
                                this.result = response.data;
                                this.dataAvailable = true;
                            });
                    }
                }
            }       
        }
    }
};
</script>
<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 50px;
  margin-right: 25%;
  margin-left:25% ;
  width: 50%;
  
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 10px 16px;
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
    margin-left: 40%;
    margin-top: 10px;
}
select{
   width:150px;
    margin-left: 20px;
    margin-right: 20px;
    height: 30px;

}
#search {
    height: 30px;
    width: 300px;
    margin-bottom: 0px;
}
.results {
    color: red;
    margin-left: 40%;
}
</style>