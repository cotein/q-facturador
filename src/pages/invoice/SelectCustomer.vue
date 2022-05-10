<script>
import {mapGetters} from 'vuex';
import QSelectCustomerGlobal from "./../../components/global/q-select-customer-global.vue";
export default {

    name : 'SelectCustomer',

    extends : QSelectCustomerGlobal,

    data(){
        return {
            model : null,
            options : []
        }
    },

    computed : {

        ...mapGetters(['InvoiceGetCustomer']),

        Options(){
            return this.options;
        },

        customer : {
            get(){
                return this.InvoiceGetCustomer;
            },
            set(value){
                this.$store.dispatch('invoiceSetCustomer', value)
            }
        }
    },

}
</script>

<style>

</style>