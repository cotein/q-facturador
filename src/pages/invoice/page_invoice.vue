<template>
    <q-page
        class="q-ma-lg"
    >
            <q-card class="col-12">
                <q-card-section class="">
                    <div class="flex">
                        <SelectCustomer />
                        <div class="col"></div>
                        <q-input v-model="date" mask="date" :rules="['date']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date" mask="DD-MM-YYYY">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Cerrar" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                    <q-editor v-model="editor" min-height="15rem" />
                </q-card-section>

            </q-card>
            
    </q-page>
</template>
<script>
import {mapGetters} from 'vuex';
import SelectCustomer from './SelectCustomer.vue'
export default {

    name: "page_invoice",

    components : {SelectCustomer},
    
    data(){
        return {
            date : new Date,
            editor : ''
        }
    }
 
};
</script>
