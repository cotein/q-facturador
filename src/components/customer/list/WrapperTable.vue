<template>
        <tableCustomer :list="CustomerListGetter" :loading="Spinner"/>
</template>

<script>
import {mapGetters} from 'vuex';
import tableCustomer from "./tableCustomer.vue";
export default {

    name : 'WrapperTable',

    components : {tableCustomer},

    computed : {

        ...mapGetters([
            'CustomerListGetter'
        ])
    },

    async mounted(){

        this.startSpinner();
        
        const customers = await this.$store.dispatch('getCustomers')
            .catch(err => {
                console.log(err)
                this.stopSpinner();
            })
        
        if (customers) {
            this.$store.dispatch('set_customer_list', customers.data)
            this.stopSpinner();
        }
    }
}
</script>

<style>

</style>