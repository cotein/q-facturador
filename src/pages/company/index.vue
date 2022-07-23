<template>
    <div class="q-pa-md">
        <div class="row">
            <div class="col-6"><SearchPerson /></div>
            <div class="col-6"><q-input v-model="name" dense="dense" label="Nombre" /></div>
        </div>

        <div class="row">
            <div class="col-3"><AfipInscription /></div>
            <div class="col-3"><AfipDocumentType /></div>
            <div class="col-3"><RetIIBB /></div>
            <div class="col-3"><RetIIBB /></div>
        </div>

        <div class="row">
            <div class="col-6"><QSelectCompanyDate label="Inicio de Actividad"/></div>
            <div class="col-6"><q-input v-model="arba_convenio" dense="dense" label="ARBA - Convenio Número" /></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AfipDocumentType from "./../../components/global/q-select-afip-document-type.vue";
import AfipInscription from "./../../components/global/q-select-afip-inscription.vue";
import QSelectCompanyDate from "./../../components/company/q-select-company-date.vue";
import SearchPerson from "./../../components/afip/SearchPerson.vue";
import RetIIBB from "./../../components/company/retIIBB.vue";
export default {

    name : 'Company',

    components : {
        AfipDocumentType,
        AfipInscription,
        QSelectCompanyDate,
        SearchPerson,
        RetIIBB
    },

    watch : {

        GetInscription(n){
            this.$store.commit('COMPANY_SET_AFIP_INSCRIPTION', n);
        },

        GetAfipDocumentType(n){
            this.$store.commit('COMPANY_SET_AFIP_DOCUMENT_TYPE', n);
        },

        SearchNumberGetter(n){
            this.$store.commit('COMPANY_SET_NUMBER', n);
        },

    },

    computed : {

        ...mapGetters([
            'GetAfipDocumentType',
            'GetInscription',
            'SearchNumberGetter',
            'CompanyGetArbaConvenio'
        ]),

        name : {
            get(){
                return 'value';
            },
            set(value){
                
            }
        },
        arba_convenio : {
            get(){
                return this.CompanyGetArbaConvenio;
            },
            set(value){
                this.$store.commit('COMPANY_ARBA_CONVENIO', value);
            }
        }
    },

}
</script>

<style scoped>
    .row div {
        padding : .5rem
    }
    .row{
        margin-bottom: .5rem;
    }
</style>