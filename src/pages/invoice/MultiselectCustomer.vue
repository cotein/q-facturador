<script>
import {mapGetters} from 'vuex';
import MultiselectComponent from "./../../components/globals/MultiselectComponent"
export default {

    extends : MultiselectComponent,

    data() {
        return {
            loading : false,
        }
    },

    methods : 
    {
        async multiselectSearchMethod(query){
            
            this.loading = true;

            const response = await this.$store.dispatch('searchCustomerByName', query)
                .finally(()=> this.loading=false)
            
            if (response) {
                this.$store.dispatch('multiselectCustomerSetOptions', response.data)
            }
        },

        selectedItem(customer){

            this.$store.dispatch('invoiceSetCustomer', customer)

        },

        openMultiselect(){

            this.$store.dispatch('multiselectSaleInvoiceTypeSetOptions', []);
            this.$store.dispatch('multiselectSaleInvoiceTypeUpdateValue', null);
            this.$store.dispatch('invoiceSetInvoiceType', null);
            
        },

        updateValueAction(el){
            this.$store.dispatch('multiselectCustomerUpdateValue', el);
        }

    },

    computed : {

        ...mapGetters(['MultiselectCustomerOptionsGetter', 'MultiselectCustomerUpdateValueGetter']),

        optionsGetter(){
            return this.MultiselectCustomerOptionsGetter
        },

        multiselectValueGetter(){
            return this.MultiselectCustomerUpdateValueGetter
        }
    }

}
</script>