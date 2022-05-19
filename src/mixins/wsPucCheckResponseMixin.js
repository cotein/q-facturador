import States from "./../utils/States";
const DocumentTypes = [
    {
        id : 1,
        afip_code : '0',
        name : 'CI Policía Federal',
    },

    {
        id : 2,
        afip_code : '1',
        name : 'CI Buenos Aires',
    },


    {
        id : 3,
        afip_code : '2',
        name : 'CI Catamarca',
    },


    {
        id : 4,
        afip_code : '3',
        name : 'CI Córdoba',
    },


    {
        id : 5,
        afip_code : '4',
        name : 'CI Corrientes',
    },


    {
        id : 6,
        afip_code : '5',
        name : 'CI Entre Ríos',
    },


    {
        id : 7,
        afip_code : '6',
        name : 'CI Jujuy',
    },


    {
        id : 8,
        afip_code : '7',
        name : 'CI Mendoza',
    },


    {
        id : 9,
        afip_code : '8',
        name : 'CI La Rioja',
    },


    {
        id : 10,
        afip_code : '9',
        name : 'CI Salta',
    },


    {
        id : 11,
        afip_code : '10',
        name : 'CI San Juan',
    },


    {
        id : 12,
        afip_code : '11',
        name : 'CI San Luis',
    },


    {
        id : 13,
        afip_code : '12',
        name : 'CI Santa Fe',
    },


    {
        id : 14,
        afip_code : '13',
        name : 'CI Santiago del Estero',
    },


    {
        id : 15,
        afip_code : '14',
        name : 'CI Tucumán',
    },


    {
        id : 16,
        afip_code : '16',
        name : 'CI Chaco',
    },


    {
        id : 17,
        afip_code : '17',
        name : 'CI Chubut',
    },


    {
        id : 18,
        afip_code : '18',
        name : 'CI Formosa',
    },


    {
        id : 19,
        afip_code : '19',
        name : 'CI Misiones',
    },


    {
        id : 20,
        afip_code : '20',
        name : 'CI Neuquén',
    },


    {
        id : 21,
        afip_code : '21',
        name : 'CI La Pampa',
    },


    {
        id : 22,
        afip_code : '22',
        name : 'CI Río Negro',
    },


    {
        id : 23,
        afip_code : '23',
        name : 'CI Santa Cruz',
    },


    {
        id : 24,
        afip_code : '24',
        name : 'CI Tierra del Fuego',
    },


    {
        id : 25,
        afip_code : '80',
        name : 'CUIT',
    },


    {
        id : 26,
        afip_code : '86',
        name : 'CUIL',
    },


    {
        id : 27,
        afip_code : '87',
        name : 'CDI',
    },


    {
        id : 28,
        afip_code : '89',
        name : 'LE',
    },


    {
        id : 29,
        afip_code : '90',
        name : 'LC',
    },


    {
        id : 30,
        afip_code : '91',
        name : 'CI extranjera',
    },


    {
        id : 31,
        afip_code : '92',
        name : 'en trámite',
    },


    {
        id : 32,
        afip_code : '93',
        name : 'Acta nacimiento',
    },


    {
        id : 33,
        afip_code : '94',
        name : 'Pasaporte',
    },


    {
        id : 34,
        afip_code : '95',
        name : 'CI Bs. As. RNP',
    },


    {
        id : 35,
        afip_code : '96',
        name : 'DNI',
    },


    {
        id : 36,
        afip_code : '99',
        name : 'Sin identificar/venta global diaria',
    },


    {
        id : 37,
        afip_code : '30',
        name : 'Certificado de Migración',
    },


    {
        id : 38,
        afip_code : '88',
        name : 'Usado por Anses para Padrón',
    },
]

export default {

    methods : {

        getDocumentType(document){

            DocumentTypes.forEach(element => {
                if (element.name == document) {
                    return element;
                }
            });
        },

        thisObjectHasThisProperty(object, property){
            return (object.hasOwnProperty(property)) ? true : false;
        },

        wsPucCheckResponse(person)
        {
            if (this.thisObjectHasThisProperty(person, 'idPersonaListReturn')) {
                if (this.thisObjectHasThisProperty(person.idPersonaListReturn, 'idPersona')) {
                    this.personIsArray = Array.isArray(person.idPersonaListReturn.idPersona);
                    this.$store.dispatch('setPersonIsArrayAction', true);
                }
            }

            if (this.thisObjectHasThisProperty(person, 'personaReturn')) {
                
                this.$store.dispatch('setPersonIsArrayAction', false);
                
                if (this.thisObjectHasThisProperty(person.personaReturn, 'datosGenerales')) {
                    
                    const document_type = this.getDocumentType(person.personaReturn.datosGenerales.tipoClave);
                    this.$store.dispatch('setPersonDocumentTypeName', document_type);

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
    }
}

