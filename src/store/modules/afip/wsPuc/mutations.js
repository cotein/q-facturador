export const SET_SEARCH_NUMBER = (state, search_number) => state.search_number = search_number;

export const SET_PERSON = (state, person) => state.person = person;

export const SET_PERSON_IS_ARRAY = (state, value) => state.personIsArray = value;

export const SET_PERSON_INITIAL_STATUS = (state) => {
    state.search_number = null;
    state.person = null;
    state.personIsArray = false;
    state.personFound = {
        name : '',
        last_name : '',
        number : '',
        afip_inscription_id : '', //responssable inscripto
        afip_inscription_name : '',
        document_type_id : '',
        document_type_name : '',
        afip_data : '',
        status_id : 1, //activo
        address : {
            
        }
    }
}

export const SET_PERSON_FOUND_NAME = (state, name) => state.personFound.name = name;

export const SET_PERSON_FOUND_LAST_NAME = (state, last_name) => state.personFound.last_name = last_name;

export const SET_PERSON_FOUND_NUMBER = (state, number) => state.personFound.number = number;

export const SET_PERSON_AFIP_INSCRIPTION_ID = (state, afip_inscription_id) => state.personFound.afip_inscription_id = afip_inscription_id;

export const SET_PERSON_AFIP_INSCRIPTION_NAME = (state, afip_inscription_name) => state.personFound.afip_inscription_name = afip_inscription_name;

export const SET_PERSON_DOCUMENT_TYPE_ID = (state, document_type_id) => state.personFound.document_type_id = document_type_id;

export const SET_PERSON_DOCUMENT_TYPE_NAME = (state, document_type_name) => state.personFound.document_type_name = document_type_name;

export const SET_PERSON_AFIP_DATA = (state, afip_data) => state.personFound.afip_data = afip_data;


