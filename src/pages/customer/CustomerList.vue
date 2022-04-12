<template>
    <q-page
        class="q-ma-xl"
    >
        <div class="row"    >
            <h1 >Listado de Clientes</h1>
            
        </div>
    </q-page>
</template>
<script>
import {mapGetters} from 'vuex';
import loadingMixin from "./../../mixins/loadingMixin";
export default {

    name: "CustomerList",

    mixins : [loadingMixin],
    
    computed : {
        ...mapGetters(['CustomerListGetter'])
    },

    async mounted(){
        
        this.setMessage('Cargando Clientes');

        this.startLoading();

        const customers_list = await this.$store.dispatch('getCustomers')
            .finally(()=> this.stopLoading())  

        if (customers_list) {
            console.log('customers_list')
            console.log(customers_list)
            console.log('customers_list')
            this.$store.dispatch('set_customer_list', customers_list.data);
            
        }

    }
 
};
</script>
