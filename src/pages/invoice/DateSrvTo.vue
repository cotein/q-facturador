<script>
import {mapGetters} from 'vuex';
import VueDatePickerCustom from "./../../components/globals/VueDatePickerCustom"
export default {
    name : "DateSrvTo",

    extends : VueDatePickerCustom,

    data(){
        return {
            date : new Date
        }
    },
    
    watch:{

        date(n){
            this.$store.dispatch('invoiceSetDateSrvTo', n);
        },

        InvoiceGetDateSrvFrom(n){

            if (this.InvoiceGetDateSrvFrom == null) {
                this.disabled = true
            }else{
                this.disabled = false
            }

        }
    },

    computed : {

        ...mapGetters(['InvoiceGetDateSrvFrom']),
    },

    mounted(){
        this.$store.dispatch('invoiceSetDateSrvTo', `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`);
    }

}
</script>

<style>

</style>