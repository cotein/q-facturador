<template>
    <q-page
        class="q-ma-lg"
    >
            <q-card class="col-12">
                <q-card-section class="flex">
                    <SelectCustomer />
                    <div class="col"></div>
                    
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
            model : null
        }
    }
 
};
</script>
