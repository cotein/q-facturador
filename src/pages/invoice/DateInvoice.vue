<script>
import VueDatePickerCustom from "./../../components/globals/VueDatePickerCustom"
export default {
    name : "DateInvoice",

    extends : VueDatePickerCustom,

    data(){
        return {
            date : new Date
        }
    },
    
    watch:{

        date(n){
            this.$store.dispatch('invoiceSetDateInvoice', n);
        }
    },

    mounted(){
        this.$store.dispatch('invoiceSetDateInvoice', `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`);
    }

}
</script>

<style>

</style>