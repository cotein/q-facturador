<template>
  <div
    uk-height-viewport="offset-bottom: 80px"
    class="uk-flex uk-flex-column mg"
  >
    <main>
        <div class="uk-card ">
            <div class="uk-card-header flex">
                <h3 class="uk-card-title">
                    Generar comprobantes de venta
                </h3>
                <div class="uk-width-1-3">
                    <ul class="uk-iconnav">
                        <li><a href="#" uk-icon="icon: user; ratio:2" uk-tooltip="title:INGRESAR CLIENTE" ></a></li>
                    <!--  <li><a href="#" uk-icon="icon: file-edit"></a></li>
                        <li><a href="#" uk-icon="icon: copy"></a></li>
                        <li><a href="#"><span uk-icon="icon: bag"></span> (2)</a></li> -->
                    </ul>
                </div>
            </div>
            <div class="uk-card-body">
                <div class="uk-margin-small flex">
                    <div class="uk-width-1-1">
                        <div class="flex">
                            <div class="uk-width-1-2 item-flex">
                                <MultiselectCustomer :placeholder="'Buscar Cliente'" />
                            </div>
                            <div class="uk-width-1-3 item-flex">
                                <MultiselectSaleInvoiceType :placeholder="'Comprobante'" label="Tipo de Comprobante"/>
                            </div>
                            <div class="uk-width-1-4 item-flex ">
                                <DateInvoice class="uk-align-right" :label="'Fecha comprobante'"/>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="uk-width-1-4 item-flex">
                                Número del Comprobante
                                <div class="flex">
                                    <div class="uk-width-1-3 uk-input uk-text-bold">{{PtoVta}}</div>
                                    -
                                    <div class="uk-width-1-2 uk-input uk-text-bold">{{CbteNro}}</div>
                                </div>
                            </div>
                            <div class="uk-width-1-2 item-flex">
                                <MultiselectTermOfSale :placeholder="'Condición de venta'" :label="'Condición de venta'"/>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="uk-width-1-4 item-flex">
                                <select class="uk-select margin-top-minimal" v-model="concepto">
                                    <option value="1">Productos</option>
                                    <option value="2">Servicios</option>
                                    <option value="3">Productos y Servicios</option>
                                </select>
                            </div>
                            <div class="uk-width-1-4 item-flex" >
                                <date-srv-from class="uk-align-right margin-bottom" 
                                :label="'Desde'"
                                v-if="Concepto"/>
                            </div>
                            <div class="uk-width-1-4 item-flex">
                                <date-srv-to class="uk-align-right margin-bottom" 
                                :label="'Hasta'"
                                v-if="Concepto"/>
                            </div>
                            <div class="uk-width-1-4 item-flex">
                                <date-srv-vto-pago class="uk-align-right margin-bottom" 
                                :label="'Vencimiento de pago'"
                                v-if="Concepto"/>
                            </div>
                        </div>
                        
                        <!-- <NewCustomerModal class="uk-margin-top" /> -->
                        <!-- <div class="uk-margin">
                            
                        </div> -->
                    </div>
                </div>
                <div class="uk-margin-small">
                    <div class="uk-margin-medium-top">
                        <div class="uk-margin">
                            <ClassicE />
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-card-footer">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-expand">
                        <InputNeto 
                            placeholder="Neto" 
                            :label="'Neto'"
                            :decimal="true"
                        />
                    </div>
                    <div class="uk-width-expand">
                        <multiselect-iva :placeholder="'Iva'" :label="'Iva'" :searchable="false"/>
                    </div>
                    <div class="uk-width-expand">
                        <InputIva 
                            placeholder="Importe IVA" 
                            :label="'Importe IVA'"
                            :readonly="true"
                        />
                    </div>
                    <div class="uk-width-expand">
                        <InputBonification 
                            placeholder="Descuento" 
                            :label="'Descuento'"
                            :decimal="true"
                        />
                    </div>
                    <div class="uk-width-expand">
                        <InputTotal 
                            placeholder="Total" 
                            :label="'Total'"
                            :readonly="true"
                        />
                    </div>
                </div>
            </div>
            <div class="uk-margin ">
                <button-spinner 
                    class="uk-align-center" 
                    @click="generateInvoice"
                    >EMITIR
                </button-spinner>
            </div>
        </div>
    </main>
  </div>
</template>

<script>

import DateInvoice from "./DateInvoice.vue"
import DateSrvFrom from "./DateSrvFrom.vue"
import DateSrvTo from "./DateSrvTo.vue"
import DateSrvVtoPago from "./DateSrvVtoPago.vue"
import ClassicE from './ClassicE.vue';
import MultiselectCustomer from "./MultiselectCustomer.vue"
import MultiselectIva from "./MultiselectIva.vue"
import MultiselectSaleInvoiceType from "./MultiselectInvoiceType.vue"
import MultiselectTermOfSale from "./MultiselectTermOfSale.vue"
import NewCustomerModal from "./../../components/globals/NewCustomerModal"
import InputNeto from "./InputNeto.vue";
import InputIva from "./InputIva.vue";
import InputBonification from "./InputBonification.vue";
import InputTotal from "./InputTotal.vue";
import zeroleft_mixin from "../../mixins/zeroLetf";
import {mapGetters} from 'vuex';

export default {
    name: "Invoice",

    mixins : [zeroleft_mixin],

    components : {
        MultiselectCustomer,
        DateInvoice,
        DateSrvFrom,
        DateSrvTo,
        DateSrvVtoPago,
        ClassicE,
        MultiselectSaleInvoiceType,
        MultiselectIva,
        InputNeto,
        InputIva,
        InputBonification,
        InputTotal,
        MultiselectTermOfSale
    },

    data(){
        return {
            date : new Date(),
            cbte_nro : null,
            customer : this.$route.query.customer
        }
    },

    methods : {
        
        generateInvoice(){
            this.$store.dispatch('prepareInvoiceToAfip');
        }
    },

    computed : {

        ...mapGetters([
            'InvoiceGetPtoVta',
            'InvoiceGetCbteNro',
            'InvoiceGetConcepto'
        ]),

        concepto : {

            get(){
                return this.InvoiceGetConcepto;
            },
            set(value){
                this.$store.dispatch('invoiceSetConcepto', value)
            }
        },

        PtoVta(){
            return this.zeroLeft(this.InvoiceGetPtoVta, 5);
        },

        CbteNro(){
            return this.zeroLeft(this.InvoiceGetCbteNro, 8);
        },

        Concepto(){

            if (this.InvoiceGetConcepto > 1) {
                return true;
            }

            return false;
        }
    }
    


};
</script>
<style scoped>
    .flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .flex .item-flex{
        margin-left: .5rem;
        margin-right: .5rem;
        margin-bottom: .5rem;
    }
    .bg{
        background-color: #f2f2f2;
    }
    .mg{
        margin: 2rem;
        border: 1px solid #ece8d9;
    }
    .margin-top{
        margin-top: 25px;
    }
    .margin-top-minimal{
        margin-top: 24px;
    }
    .margin-bottom{
        margin-bottom: 0px;
    }

</style>
