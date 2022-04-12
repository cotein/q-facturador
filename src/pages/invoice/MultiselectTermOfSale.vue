<script>
import {mapGetters} from 'vuex';
import MultiselectComponent from "./../../components/globals/MultiselectComponent";
export default {

    name : 'MultiselectTermOfSale',

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

            const response = await this.$store.dispatch('searchTermOfSaleByName', query)
                .finally(()=> this.loading=false)
            
            if (response) {
                this.$store.dispatch('multiselectTermOfSaleSetOptions', response)
            }
        },

        selectedItem(invoice_type){
            this.$store.dispatch('invoiceSetTermOfSale', invoice_type)
        },

        updateValueAction(el){
            this.$store.dispatch('multiselectTermOfSaleUpdateValue', el);

        }
    },

    computed : {

        ...mapGetters([
            'InvoiceGetPtoVta', 
            'InvoiceGetCbteNro', 
            'InvoiceGetTermOfSale',
            'MultiselectTermOfSaleOptionsGetter',
            'MultiselectTermOfSaleUpdateValueGetter'
        ]),

        optionsGetter(){
            return this.MultiselectTermOfSaleOptionsGetter;
        },

        multiselectValueGetter(){
            return this.InvoiceGetTermOfSale;
        }
    },

    watch : {

        InvoiceGetCbteNro(n){

            if (n == null) {
                this.disabledMultiselect();
            }else{
                this.enableMultiselect();
            }
        }
    },

    mounted(){

        if (this.InvoiceGetCbteNro == null) {
            this.disabledMultiselect();
        }
    }
}
</script>