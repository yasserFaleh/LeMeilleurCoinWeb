<template>
    <Header />
    <h2> Products  </h2>
    <div v-if="dataAvailable">
        <OwnProduct  v-for="product in ownProduct"  :id="product.id" :key="product.id" :title="product.title"  @deleted="deleted" :price="product.price" :description="product.description" :date="product.date" :mail="product.userEmail">
        </OwnProduct>
    </div>

</template>

<script>
import Header from './Header.vue' 
import OwnProduct from './OwnProduct.vue'
import axios from 'axios'
import {API_HOST} from '../config';

export default {
    components:{
        Header,
        OwnProduct
    },
    data(){
        return {
            dataAvailable : false,
            ownProduct:[]
        }
    },
    methods:{
        deleted(id) {
            let index = this.ownProduct.findIndex(prod => prod.id === id);
            if (index > -1) {
                this.ownProduct.splice(index, 1);
        }
    }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if ( !user) {
            this.$router.push({name:'Login'})  
        }else {
             let user = localStorage.getItem('user-info');
            let email = JSON.parse(user).email
        
            axios.get(`${API_HOST}/api/products/own/${email}`).then(response => {
                let ownProduct = response.data
                this.ownProduct = ownProduct
                this.dataAvailable = true
            })
        }
    }

}
</script>

<style scoped>
h2 {
margin-left: 10%;
margin-top: 20px;
}

</style>