<template>
    <q-select outlined v-model="concepto" :options="options" label="Concepto" :dense="true"/>
</template>

<script>
import {mapGetters} from "vuex";
export default {

    data(){
        return {
            options: [
                {id : 1, label : 'Productos'},
                {id : 2, label : 'Servicios'},
                {id : 3, label : 'Productos y Servicios'},
            ]
        }
    },

    computed : {

        ...mapGetters(['InvoiceGetConcepto']),

        concepto : {
            get(){
                return this.InvoiceGetConcepto;
            },
            set(value){
                this.$store.dispatch('invoiceSetConcepto', value);
            }
        }
    }
}
</script>

<style>

</style>