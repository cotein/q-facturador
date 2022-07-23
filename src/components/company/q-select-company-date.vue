<script>
import {mapGetters} from 'vuex';
import UtilsDate from "./../../utils/date/UtilsDate";
import QDateGlobal from "./../global/q-date-global.vue";
export default {

    name : "q-select-company-date",

    extends : QDateGlobal,

    data(){
        return {
        }
    },
    
    computed : {

        ...mapGetters(['CompanyGetArbaActivityInit']),

        date : {
            get(){
                return this.CompanyGetArbaActivityInit;
            },
            set(value){
                this.$store.commit('COMPANY_ARBA_ACTIVITY_INIT', value);
            }
        }
    },

    beforeMount(){
        this.$store.commit('COMPANY_ARBA_ACTIVITY_INIT', UtilsDate.toDay());
    }

}
</script>