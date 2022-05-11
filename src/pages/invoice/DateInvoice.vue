<script>
import {mapGetters} from 'vuex';
import UtilsDate from "./../../utils/date/UtilsDate";
import QDateGlobal from "../../components/global/q-date-global.vue";
export default {

    name : "DateInvoice",

    extends : QDateGlobal,

    data(){
        return {
        }
    },
    
    computed : {

        ...mapGetters(['InvoiceGetDateInvoice']),

        date : {
            get(){
                return this.InvoiceGetDateInvoice;
            },
            set(value){
                this.$store.dispatch('invoiceSetDateInvoice', value);
            }
        }
    },

    beforeMount(){
        this.$store.dispatch('invoiceSetDateInvoice', UtilsDate.toDay());
    }

}
</script>