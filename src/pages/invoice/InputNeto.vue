<script>
import { mapGetters } from 'vuex';
import CustomInputText from "./../../components/globals/CustomInputText";

export default {

    name : 'InputNeto',

    extends : CustomInputText,

    methods : {

        updateInputValue($e){
            this.$store.dispatch('invoiceSetNetoImport', $e.target.value)
        }
        
    },

    computed : {

        ...mapGetters(['InvoiceGetNeto']),

        InputValueGetter(){
            return this.InvoiceGetNeto;
        }
    }
}
</script>

<style>

</style>