<template>
    <q-page>
        <transition appear name="fade">
            <WrapperTable />
        </transition>
    </q-page>
</template>
<script>
import {mapGetters} from 'vuex';
import WrapperTable from "./../../../components/customer/list/WrapperTable.vue"
export default {

    name: "CustomerList",

    components : {WrapperTable},

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

    },
};
</script>
