<script>
import { mapGetters } from 'vuex';
import CustomInputText from "./../../components/globals/CustomInputText";

export default {

    name : 'InputBonification',

    extends : CustomInputText,

    methods : {

        updateInputValue($e){
            this.$store.dispatch('invoiceSetBonificationImport', $e.target.value)
        }
        
    },

    computed : {

        ...mapGetters(['InvoiceGetBonification']),

        InputValueGetter(){
            return this.InvoiceGetBonification;
        }
    }
}
</script>

<style>

</style>