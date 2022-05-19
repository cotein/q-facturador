<template>
    <q-select 
        class="col"
        v-model="customer"
        outlined 
        use-input
        fill-input
        emit-value
        :dense="true"
        hide-selected
        input-debounce="0"
        label="Cliente"
        :options="Options"
        @filter="searchData"
    >
        <template v-slot:after v-if="display_button_add_customer">
            <q-btn round dense flat icon="person_add" @click="open_dialog = true">
                <q-tooltip class="bg-amber text-black shadow-4" :offset="[10, 10]">
                    Ingresar nuevo Cliente, buscar en AFIP
                </q-tooltip>
            </q-btn>
        </template>

        <q-dialog v-model="open_dialog">
            <q-card style="width: 700px; max-width: 80vw;">
                <q-toolbar>
                    <q-toolbar-title><span class="text-subtitle1">Buscar Sujeto en AFIP por DNI - CUIL - CUIT </span></q-toolbar-title>
                        <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                    <search-people />
                </q-card-section>

                <q-separator />
                
                <q-card-section v-if="PersonIsArrayGetter">
                    <q-select outlined v-model="search_number" :options="Options" label="Concepto" :dense="true"/>
                </q-card-section>

                <DisplayPersonData />
            </q-card>
        </q-dialog>
    </q-select>
</template>
<script>
import {mapGetters} from 'vuex';
import searchPeople from "./../../components/afip/SearchPerson";
import DisplayPersonData from "./../../components/afip/DisplayPersonData";
export default {
    
    name : 'QSelectCustomerGlobal',

    props : {
        display_button_add_customer : {
            required : true,
            type : Boolean
        }
    },
    
    components : {searchPeople, DisplayPersonData },

    data(){
        return{
            open_dialog : false
        }
    },

    methods : {
        
        async searchData(search, update){

            const response = await this.$store.dispatch('searchCustomerByName', search)
            .catch((err) => {
                console.log(err.response.data)
            })

            if (response) {
                console.log(response.data)
                update(()=> {

                    this.options = response.data.map((el)=>{
                        return {
                            id : el.id,
                            label : el.name,
                            //number : el.number,
                        }
                    }); 
                });
            }
        },

    },

    computed : {

        ...mapGetters([
            'PersonIsArrayGetter',
            'SearchNumberGetter',
            'PersonGetter'
        ]),

        search_number : {
            get(){
                return this.SearchNumberGetter;
            },
            set(search_number){
                this.$store.dispatch('setSearchNumberAction', search_number)
            }
        },

        Options(){

            return this.PersonGetter.idPersonaListReturn.idPersona;
        }
    }

}
</script>
