<script>
import {mapGetters} from 'vuex';
import MultiselectComponent from "./../../components/globals/MultiselectComponent"
export default {

    extends : MultiselectComponent,

    data() {
        return {
            loading : false,
        }
    },

    methods : 
    {

        selectedItem(iva){

            this.$store.dispatch('invoiceSetIva', iva)

        },

        updateValueAction(el){
            this.$store.dispatch('multiselectIvaUpdateValue', el);
        }

    },

    computed : {

        ...mapGetters(['MultiselectIvaOptionsGetter', 'MultiselectIvaUpdateValueGetter']),

        optionsGetter(){
            return this.MultiselectIvaOptionsGetter
        },

        multiselectValueGetter(){
            return this.MultiselectIvaUpdateValueGetter
        },

    },

    async mounted(){
        const ivas = await this.$store.dispatch('getIvas')
        
        if (ivas) {
            this.$store.dispatch('multiselectIvaSetOptions', ivas);
        }
    }

}
</script>