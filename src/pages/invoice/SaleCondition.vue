<template>
    <div>
        <q-select outlined 
            bottom-slots 
            v-model="saleCondition" 
            :options="options" 
            label="Condición de venta"  
            :dense="dense" 
            :options-dense="denseOpts"
            :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
            :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : null"
        >
            <template v-slot:append>
                <q-icon v-if="saleCondition !== ''" name="close" @click.stop="saleCondition = ''" class="cursor-pointer" />
            </template>

            <template v-slot:after>
                <q-btn round dense flat icon="add_circle" @click="open_dialog = true">
                    <q-tooltip class="bg-amber text-black shadow-4" :offset="[10, 10]">
                        Ingresar condición de venta
                    </q-tooltip>
                </q-btn>
            </template>
        </q-select>

        <q-dialog v-model="open_dialog">
            <q-card style="width: 700px; max-width: 80vw;">
                <q-toolbar>
                    <!-- <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                    </q-avatar>
                    -->
                <q-toolbar-title><span class="text-weight-bold">Ingresar nueva condición de venta </span></q-toolbar-title>
                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                    <div class="row justify-between">
                        <q-input class="col-md-9" outlined dense v-model="saleCondition" label="Condición de venta" />
                        <q-btn :loading="Loading" color="secondary" @click="saveCondition" label="Button" />
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {

    data(){
        return{
            options : [],
            dense : true,
            denseOpts : true,
            open_dialog : false,
        }
    },

    methods : {

        async saveCondition(){

            this.startLoading();
            
            const saleCondition = await this.$store.dispatch('createTermOfSale', {term : this.saleCondition})
                .catch((err) => console.log(err.response.data))
                .finally(()=> this.stopLoading())
            
            if (saleCondition) {
                console.log(saleCondition)
                this.saleCondition = {
                    id : saleCondition.id,
                    name : saleCondition.name,
                }

                this.open_dialog = false;
            }
        }
    },

    computed : {

        saleCondition : {
            get(){
                return this.InvoiceGetTermOfSale;
            },
            set(value){
                this.$store.dispatch('invoiceSetTermOfSale', value)
            }
        },

        ...mapGetters(['InvoiceGetTermOfSale'])
        
    },

    async mounted(){

        const sale_conditions = await this.$store.dispatch('getTermOfSale')

        if (sale_conditions) {
            this.options = sale_conditions.data.map(sc => {
                return {
                    id : sc.id,
                    name : sc.attributes.name
                }
            });
        }
    }
}
</script>

<style>

</style>