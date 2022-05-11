<template>
    <q-page
        class="q-ma-lg"
    >
            <q-card class="col-12">
                <q-card-section>
                    <div class="row justify-between">
                        <SelectCustomer class="col-md-8"/>
                        <DateInvoice :label="'Fecha Factura'" class="col-md-3"/>
                    </div>

                    <div class="row q-mt-lg">
                        <QSelectConceptInvoice class="col-md-4"/>
                            <div class="flex  justify-between" v-if="InvoiceGetConcepto.label.includes('Servicios') ">
                                <DateInvoice :label="'Servicio desde'"  class="q-ml-lg"/>
                                <DateInvoice :label="'Servicio hasta'"  class="q-ml-lg"/>
                            </div>
                    </div>

                    <div class="row q-mt-lg">
                        <SaleCondition class="col-md-6"/>
                    </div>
                    <Tabs class="q-mt-lg" />
                </q-card-section>
            </q-card>
    </q-page>
</template>
<script>
import Tabs from "./Tabs.vue";
import {mapGetters} from 'vuex';
import DateInvoice from "./DateInvoice.vue"
import SaleCondition from "./SaleCondition.vue";
import SelectCustomer from './SelectCustomer.vue';
import QSelectConceptInvoice from "./q-select-concept-invoice.vue";
export default {

    name: "page_invoice",

    components : {SelectCustomer, DateInvoice, QSelectConceptInvoice, Tabs, SaleCondition},
    
    data(){
        return {
            tab : 'mails'
        }
    },
    computed : {

        ...mapGetters(['InvoiceGetConcepto']),
    }
    

};
</script>
