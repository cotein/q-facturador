<script>
import {mapGetters} from 'vuex';
import UtilsDate from "./../../utils/date/UtilsDate";
import QDateGlobal from "../../components/global/q-date-global.vue";
export default {

    name : "DateSrvFrom",

    extends : QDateGlobal,

    data(){
        return {
        }
    },
    
    computed : {

        ...mapGetters(['InvoiceGetDateSrvFrom']),

        date : {
            get(){
                return this.InvoiceGetDateSrvFrom;
            },
            set(value){
                this.$store.dispatch('invoiceSetDateSrvFrom', value);
            }
        }
    },

    beforeMount(){
        this.$store.dispatch('invoiceSetDateSrvFrom', UtilsDate.toDay());
    }

}
</script>