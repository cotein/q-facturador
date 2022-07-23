
<template>
    <q-select 
        outlined
        v-model="inscription"
        :options="GetInscriptions"
        label="Inscripción en AFIP"
        :dense="true"
        :loading="Spinner"
        :options-dense="true"
        :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
        :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : null"
        />
</template>

<script>
import { mapGetters } from 'vuex';
export default {

    name : 'q-select-afip-inscription',

    computed : {

        ...mapGetters([
            'GetInscriptions',
            'GetInscription'
        ]),

        inscription : {
            get(){
                return this.GetInscription;
            },
            set(value){
                this.$store.dispatch('afipSetInscription', value)
            }
        }
    },

    async mounted(){
        this.startSpinner()
        const inscriptions = await this.$store.dispatch('getAfipInscriptions');
        if (inscriptions) {

            const ins = inscriptions.map((el)=>{
                return {
                    id : el.id,
                    name : el.name,
                }
            }); 
            this.$store.dispatch('afipSetInscriptions', ins)

            this.stopSpinner();
        }
    }
}
</script>

<style>

</style>