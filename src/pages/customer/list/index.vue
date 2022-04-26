<template>
    <q-page>
        <transition appear name="fade">
            <WrapperTable />
        </transition>
        
    </q-page>
</template>
<script>
import {mapGetters} from 'vuex';
import loadingMixin from "../../../mixins/loadingMixin";
import WrapperTable from "./../../../components/customer/list/WrapperTable.vue"
export default {

    name: "CustomerList",

    components : {WrapperTable},

    mixins : [loadingMixin],
    
    computed : {
        ...mapGetters(['CustomerListGetter'])
    },

    data(){
        return{
            www : true
        }
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

    },

    mounted(){
        setTimeout(() => {
            this.www = false
        }, 2500);
    }
 
};
</script>
