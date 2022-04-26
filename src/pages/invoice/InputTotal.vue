<script>
import { mapGetters } from 'vuex';
import CustomInputText from "./../../components/globals/CustomInputText";

export default {

    name : 'InputTotal',

    extends : CustomInputText,

    methods : {

        updateInputValue($e){
            this.$store.dispatch('invoiceSetTotalImport', $e.target.value)
        }
        
    },

    computed : {

        ...mapGetters(['InvoiceGetTotal']),

        InputValueGetter(){
            return this.InvoiceGetTotal;
        }
    }
}
</script>

<style>

</style>