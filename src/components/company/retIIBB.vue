<script>
    import YesOrNot from "./../../components/global/q-select-yes-or-not"
    import { mapGetters } from 'vuex';
    export default {

        name : 'RetIIBB',

        extends : {YesOrNot},

        computed : {

            ...mapGetters([
                'CompanyGetRetIIBB'
            ]),

            yes_or_not : {
                get(){
                    return this.CompanyGetRetIIBB;
                },
                set(value){
                    this.$store.commit('COMPANY_SET_RET_IIBB', value);
                }
            }
        }
    }
</script>
