<script>
import {mapGetters} from 'vuex';
import QDateGlobal from "../../components/global/q-date-global.vue";
export default {

    name : "DateSrvFrom",

    extends : QDateGlobal,

    data(){
        return {
            date : new Date
        }
    },
    
    watch:{

        date(n){
            this.$store.dispatch('invoiceSetDateSrvFrom', n);
        },

    },

    computed : {

        ...mapGetters(['']),
    },

    

}
</script>

<style>

</style>