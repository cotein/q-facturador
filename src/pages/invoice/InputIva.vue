<script>
import { mapGetters } from 'vuex';
import CustomInputText from "./../../components/globals/CustomInputText";

export default {

    name : 'InputIva',

    extends : CustomInputText,

    methods : {

        updateInputValue($e){
            this.$store.dispatch('invoiceSetIvaImport', $e.target.value)
        }
        
    },

    computed : {

        ...mapGetters(['InvoiceGetIva']),

        InputValueGetter(){
            return this.InvoiceGetIva;
        }
    }
}
</script>

<style>

</style>