<template>
    <q-input 
        bottom-slots 
        v-model="search_number" 
        label="DNI - CUIL - CUIT" 
        counter 
        maxlength="11" 
        :dense="dense"
        :rules="[val => isNumeric(val) || 'Sólo se aceptan números', val => length(val) || 'El número debe contener al menos 6 caracteres']"
    >
        <template v-slot:append>
            <q-btn round dense flat icon="search" 
                :loading="Loading"
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
export default {

    name : 'SearchPerson',

    data() {
        return {
            person : null,
            personIsArray : false,
            personaSelected : null
        }
    },

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

        thisObjectHasThisProperty(object, property){
            return (object.hasOwnProperty(property)) ? true : false;
        },

        async searchPersonAtAFIP()
        {
            this.$store.dispatch('setPersonIsArrayAction', false);

            const person = await this.searchPerson(this.SearchNumberGetter);
            
            if (person) {
                this.checkResponse(person);
                this.$store.dispatch('setPersonAction', person.data);
            }
        },

        async searchPerson(number){

            this.startLoading();

            const person = await this.$store.dispatch('searchPersonAtAFIP', number)
                .catch((err)=>{
                    this.$q.notify({
                        type: 'negative',
                        message: err.response.data,
                        icon: 'info'
                    });
                })
                .finally(()=>this.stopLoading());
            if (person) {
                
                return person;
            }    
        },

        checkResponse(person)
        {
            if (this.thisObjectHasThisProperty(person, 'idPersonaListReturn')) {
                if (this.thisObjectHasThisProperty(person.idPersonaListReturn, 'idPersona')) {
                    this.personIsArray = Array.isArray(person.idPersonaListReturn.idPersona);
                    this.$store.dispatch('setPersonIsArrayAction', true);
                }
            }

            /* if (this.thisObjectHasThisProperty(person, 'idPersonaListReturn')) {

                if(this.thisObjectHasThisProperty(person.idPersonaListReturn, 'idPersona'))
                { // ingreso dni, devuelve cuil
                    if(this.personIsArray)
                    {
                        this.person = person
                        
                    }else{
                        this.person = person;
                        //this.$store.dispatch('newCustomerSetNumber', parseInt(person.idPersonaListReturn.idPersona))
                    }
                    
                }
                
            } */

            if (this.thisObjectHasThisProperty(person, 'personaReturn')) {
                
                this.$store.dispatch('setPersonIsArrayAction', false);
                
                if (this.thisObjectHasThisProperty(person.personaReturn, 'datosGenerales')) {
                    
                     const purchase_document = {"id":25,"afip_code":"80","name":"CUIT"};
                    //this.$store.dispatch('newCustomerSetPurchaseDocument', purchase_document);

                    if (this.thisObjectHasThisProperty(person.personaReturn.datosGenerales, 'razonSocial')) {
                        const name = `${person.personaReturn.datosGenerales.razonSocial}`
                        //this.$store.dispatch('newCustomerSetName', name);
                    }else{
                        /** cuando es monotributista o responsable inscripto pesona fisica*/
                        const name = `${person.personaReturn.datosGenerales.apellido} ${person.personaReturn.datosGenerales.nombre}`
                        //this.$store.dispatch('newCustomerSetName', name);
                    }

                    if (this.thisObjectHasThisProperty(person.personaReturn.datosGenerales, 'domicilioFiscal')){

                        const id_provincia = person.personaReturn.datosGenerales.domicilioFiscal.idProvincia;

                        const index = this.Provinces.findIndex((provincia) => provincia.afip_code == id_provincia)

                        //this.$store.dispatch('newCustomerAddressSetState', this.Provinces[index]);
                        

                        if (parseInt(id_provincia) == 0) {
                            //this.$store.dispatch('newCustomerAddressSetCity', 'CIUDAD AUTONOMA BUENOS AIRES');
                        }else{
                            const city = person.personaReturn.datosGenerales.domicilioFiscal.localidad;
                            //this.$store.dispatch('newCustomerAddressSetCity', city);
                        }
                        

                        const address = person.personaReturn.datosGenerales.domicilioFiscal.direccion;
                        //this.$store.dispatch('newCustomerAddressSetAddress', address);

                        const cp = person.personaReturn.datosGenerales.domicilioFiscal.codPostal;
                        //this.$store.dispatch('newCustomerAddressSetCp', cp);

                    }

                    if (this.thisObjectHasThisProperty(person.personaReturn, 'datosMonotributo')){
                        const inscription = {"id":6,"name":"Responsable Monotributo","short":"M"};
                        //this.$store.dispatch('newCustomerSetInscription', inscription);
                    }else{
                        const inscription = {"id":1,"name":"IVA Responsable Inscripto","short":"IRI"};
                        //this.$store.dispatch('newCustomerSetInscription', inscription);
                    }
                }

                /** CUIL */
                if (this.thisObjectHasThisProperty(person.personaReturn, 'errorConstancia'))
                {
                    const errors = person.personaReturn.errorConstancia.error;

                    let message = '';
                    
                    if (Array.isArray(errors)) {
                        
                        for (const key in errors) {
                            if (errors.hasOwnProperty.call(errors, key)) {
                                    message += errors[key] + '  ';
                            }
                        }
                    }else{
                        message = errors;
                    }

                    Vue.swal.fire({
                        title: 'Ingreso de clientes',
                        text : message,
                        icon : 'error',
                        width : '35%',
                        padding : '2rem',
                        backdrop : true,
                        time : 2000
                    });

                    this.person = person.personaReturn.errorConstancia

                    if (errors == 'La clave ingresada no es una CUIT') {
                        
                        //this.$store.dispatch('newCustomerSetNumber', parseInt(person.personaReturn.errorConstancia.idPersona));
                        
                        const name = `${person.personaReturn.errorConstancia.apellido} ${person.personaReturn.errorConstancia.nombre}`
                        //this.$store.dispatch('newCustomerSetName', name);

                        const purchase_document = {"id":26,"afip_code":"86","name":"CUIL"};
                        //this.$store.dispatch('newCustomerSetPurchaseDocument', purchase_document);

                        const inscription = {"id":5,"name":"Consumidor Final","short":"CF"};
                        //this.$store.dispatch('newCustomerSetInscription', inscription);
                    }

                }
            }

            //this.$store.dispatch('newCustomerSetAfipData', person);
        },
    }, 

    watch : {

        async personaSelected(n){

            this.spinner = true;

            const payload = {
                token : this.User.token,
                cuit : n
            }
            const person = await this.searchPerson(payload);

            if (person) {
                this.checkResponse(person);
            }
        }
    },

    computed : {

        ...mapGetters(['SearchNumberGetter']),

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