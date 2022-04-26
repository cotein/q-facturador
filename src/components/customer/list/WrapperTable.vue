<template>
        <tableCustomer :list="CustomerListGetter" :loading="Loading"/>
</template>

<script>
import {mapGetters} from 'vuex';
import tableCustomer from "./tableCustomer.vue";
import loading_mixin from "./../../../mixins/loadingMixin"
export default {

    name : 'WrapperTable',

    components : {tableCustomer},

    mixins : [loading_mixin],

    computed : {

        ...mapGetters([
            'CustomerListGetter'
        ])
    },

    async mounted(){

        this.startLoading();
        
        const customers = await this.$store.dispatch('getCustomers')
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                this.stopLoading();
            })
        
        if (customers) {
            this.$store.dispatch('set_customer_list', customers.data)
            
        }
    }
}
</script>

<style>

</style>