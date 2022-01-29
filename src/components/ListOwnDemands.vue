<template>
    <Header />
    <h2> Demands </h2>
    <div v-if="dataAvailable">
        <OwnOffer  v-for="product in ownDemand" :key="product.id" :id="product.id" :title="product.title"  @deleted="deleted" :price="product.price" :description="product.description" :date="product.date" :mail="product.userEmail">
        </OwnOffer>
    </div>


</template>

<script>
import Header from './Header.vue' 
import OwnOffer from './OwnOffer.vue'
import axios from 'axios'
import {API_HOST} from '../config';

export default {
    components:{
        Header,
        OwnOffer
    },
    data(){
        return {
            dataAvailable : false,
            ownDemand:[]
        }
    },
    methods:{
        deleted(id) {
            let index = this.ownDemand.findIndex(dema => dema.id === id);
            if (index > -1) {
                this.ownDemand.splice(index, 1);
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
        
            axios.get(`${API_HOST}/api/offers/own/${email}`).then(response => {
                let ownDemand = response.data
                this.ownDemand = ownDemand
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