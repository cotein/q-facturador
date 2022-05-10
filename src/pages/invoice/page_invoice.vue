<template>
    <q-page
        class="q-ma-lg"
    >
            <q-card class="col-12">
                <q-card-section class="">
                    <div class="flex">
                        <SelectCustomer />
                        <div class="col"></div>
                        <DateSrvFrom />
                    </div>
                    <q-editor v-model="editor" min-height="15rem" />
                </q-card-section>

            </q-card>
            
    </q-page>
</template>
<script>
import {mapGetters} from 'vuex';
import SelectCustomer from './SelectCustomer.vue';
import DateSrvFrom from "./DateSrvFrom.vue"
export default {

    name: "page_invoice",

    components : {SelectCustomer, DateSrvFrom},
    
    data(){
        return {
            date : new Date,
            editor : ''
        }
    }
 
};
</script>
