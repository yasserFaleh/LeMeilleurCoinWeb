<template>
    <div class="card">
        <div class="container">
            <div>
                <h3 class="Line " ><b >{{ title }}</b></h3>
                <p class="Line price" >{{priceNet}}</p>
                <p class="Line float" > {{dateNet}}</p>
                <br>
                <p class="Line">{{mail}}</p>
                
                <p>{{description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Product",
    data(){
      return {
          
      }  
    },
    props:[
         'title',
          'price',
          'date',
          'mail',
          'description'
    ],
    components:{
    },
    methods:{
        
    },
    computed:{
        priceNet() {
            return this.price+'€'
        },
        dateNet(){
            return this.date.slice(0,10)
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
  margin-right: 100px;
  margin-left:100px ;
  
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  text-align: left;
  padding: 10px 16px;
}
.Line{
    display: inline;
}
.float {
    float: right;
}
.price{
    margin: 20px;
    color: #ff6e14;
}
</style>