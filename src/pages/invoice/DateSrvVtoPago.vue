<script>
import VueDatePickerCustom from "./../../components/globals/VueDatePickerCustom"
export default {
    name : "DateSrvVtoPago",

    extends : VueDatePickerCustom,

    data(){
        return {
            date : new Date
        }
    },
    
    watch:{

        date(n){
            this.$store.dispatch('invoiceSetDateSrvVtoPago', n);
        }
    },

    mounted(){
        this.$store.dispatch('invoiceSetDateSrvVtoPago', `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`);
    }

}
</script>

<style>

</style>