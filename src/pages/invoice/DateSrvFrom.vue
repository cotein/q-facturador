<script>
import VueDatePickerCustom from "./../../components/globals/VueDatePickerCustom"
export default {
    name : "DateSrvFrom",

    extends : VueDatePickerCustom,

    data(){
        return {
            date : new Date
        }
    },
    
    watch:{

        date(n){
            this.$store.dispatch('invoiceSetDateSrvFrom', n);
        }
    },

    mounted(){
        this.$store.dispatch('invoiceSetDateSrvFrom', `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`);
    }

}
</script>

<style>

</style>