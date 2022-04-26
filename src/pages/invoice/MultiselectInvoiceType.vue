<script>
import {mapGetters} from 'vuex';
import MultiselectComponent from "./../../components/globals/MultiselectComponent";
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

            const customer_afip_inscription_id = this.InvoiceGetCustomer.afip_inscription_id;

            const q = {
                customer_afip_inscription_id,
                search : query
            }

            const response = await this.$store.dispatch('searchSaleinvoiceTypeByName', q)
                .finally(()=> this.loading=false)
            
            if (response) {
                this.$store.dispatch('multiselectSaleInvoiceTypeSetOptions', response.data)
            }
        },

        selectedItem(invoice_type){
            this.$store.dispatch('invoiceSetInvoiceType', invoice_type)
        },

        updateValueAction(el){
            this.$store.dispatch('multiselectSaleInvoiceTypeUpdateValue', el);

            setTimeout( async () => {
                const PtoVta = 1
                const CbteTipo = this.InvoiceGetInvoiceType.afip_code;
                

                const afip_response = await  this.$store.dispatch('ultimo_autorizado', {PtoVta, CbteTipo});

                    const CbteNro = afip_response.data.FECompUltimoAutorizadoResult.CbteNro + 1;
                    
                    this.$store.dispatch('invoiceSetPtoVta', PtoVta);
                    
                    this.$store.dispatch('invoiceSetCbteNro', CbteNro);
            }, 150);


        }
    },

    computed : {

        ...mapGetters([
            'InvoiceGetCustomer', 
            'InvoiceGetInvoiceType', 
            'MultiselectSaleInvoiceTypeOptionsGetter',
            'MultiselectSaleInvoiceTypeUpdateValueGetter'
        ]),

        optionsGetter(){
            return this.MultiselectSaleInvoiceTypeOptionsGetter
        },

        multiselectValueGetter(){
            return this.MultiselectSaleInvoiceTypeUpdateValueGetter
        }
    },

    watch : {

        InvoiceGetCustomer(n){

            if (n == null) {
                this.disabledMultiselect();
            }else{
                this.enableMultiselect();
            }
        }
    },

    mounted(){

        if (this.InvoiceGetCustomer == null) {
            this.disabledMultiselect();
        }
    }
}
</script>