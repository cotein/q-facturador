
<template>
    <q-select 
        outlined
        v-model="document_type"
        :options="GetAfipDocumentTypes"
        label="Tipo de Documento"
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

    name : 'q-select-afip-document-type',

    computed : {

        ...mapGetters([
            'GetAfipDocumentTypes',
            'GetAfipDocumentType'
        ]),

        document_type : {
            get(){
                return this.GetAfipDocumentType;
            },
            set(value){
                this.$store.dispatch('afipSetDocumentType', value)
            }
        }
    },

    async mounted(){

        this.startSpinner()
        
        const document_types = await this.$store.dispatch('getAfipDocumentType');

        if (document_types) {

            const doc_type = document_types.map((el)=>{
                return {
                    id : el.id,
                    name : el.name,
                }
            }); 
            this.$store.dispatch('afipSetDocumentTypes', doc_type)

            this.stopSpinner();
        }
    }
}
</script>

<style>

</style>