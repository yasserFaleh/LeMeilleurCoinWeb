<template>
    <Header />
    <img class="logo" src="../assets/app-logo.png"/>
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
            <select id="category" v-model="selected">
                <option>All categories</option>
                <option>Mode</option>
                <option>Vehicles</option>
                <option>Multimedia</option>
                <option>Service</option>
                <option>Job</option>
                <option>Immovable</option>
                <option>Other</option>
            </select>
            <input id="search" type="text" v-model="search" placeholder="What are you looking for?"/>
            <br>
            <button>Search</button> 
        </div>
    </div>
</template>
<script>
import Header from './Header.vue' 
export default {
    name: "Home",
    data(){
      return {
          picked:'Demand',
          selected:'All categories',
          search:''
      }  
    },
    components:{
        Header
    }

};
</script>
<style >
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 50px;
  margin-right: 100px;
  margin-left:100px ;
  
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
}
select{
   width:150px;
    margin: 20px;
    height: 30px;

}
#search {
    height: 30px;
    width: 200px;
    margin-bottom: 20px;
}
</style>