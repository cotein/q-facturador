<template>
    <q-input 
        bottom-slots 
        v-model="search_number" 
        label="DNI - CUIL - CUIT" 
        counter 
        maxlength="11" 
        dense="dense"
        :rules="[val => isNumeric(val) || 'Sólo se aceptan números', val => length(val) || 'El número debe contener al menos 6 caracteres']"
    >
        <template v-slot:append>
            <q-btn round dense flat icon="search" 
                :loading="Spinner"
                @click="searchPersonAtAFIP"
                :disabled="! isNumeric(search_number)"
            >
                <q-tooltip class="bg-amber text-black shadow-4" :offset="[10, 10]">
                    Buscar
                </q-tooltip>
            </q-btn>
        </template>
    </q-input>
</template>

<script>
import {mapGetters} from 'vuex';
import wsPucCheckResponseMixin from './../../mixins/wsPucCheckResponseMixin'
export default {

    name : 'SearchPerson',

    data() {
        return {
            person : null,
            personIsArray : false,
            personaSelected : null
        }
    },

    mixins : [wsPucCheckResponseMixin],

    methods : {

        isNumeric(value) {
            return /^\d+$/.test(value);
        },

        length(value){
            if (value != null) {
                if (value.toString().length < 6) {
                    return false;
                }
                return true;
            }
        },

        async searchPersonAtAFIP()
        {
            this.$store.dispatch('setPersonIsArrayAction', false);

            const person = await this.searchPerson(this.SearchNumberGetter);
            
            if (person) {
                console.log('####################')
                console.log(person.data)
                console.log('####################')
                this.$store.dispatch('setPersonAction', person.data);
                this.wsPucCheckResponse(this.PersonGetter)
            }
        },

        async searchPerson(number){

            this.startSpinner();

            const person = await this.$store.dispatch('searchPersonAtAFIP', number)
                .catch((err)=>{
                    this.$q.notify({
                        type: 'negative',
                        message: err.response.data.message,
                        icon: 'info'
                    });
                })
                .finally(()=>this.stopSpinner());
            if (person) {
                
                return person;
            }    
        },
        
    }, 

    computed : {

        ...mapGetters(['SearchNumberGetter', 'PersonGetter']),

        search_number : {
            get(){
                return this.SearchNumberGetter;
            },
            set(search_number){
                this.$store.dispatch('setSearchNumberAction', search_number)
            }
        },
 
        IsPersonArray(){

            return this.personIsArray;
        }
    },

}
</script>

<style scoped>
    .margin-top{
        margin-top: 15px;
    }
</style>