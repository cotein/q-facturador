import AfipService from "../../../../services/external/afip/WsFeV1Service";

export const searchPersonAtAFIP = async (_, number) => {

    try {

        return await AfipService.searchPersonAtAFIP(number);
        
    } catch (error) {
        throw error
    }
}

export const setSearchNumberAction = ({commit}, search_number) => commit('SET_SEARCH_NUMBER', search_number);

export const setPersonAction = ({commit}, person) => commit('SET_PERSON' , person);

export const setPersonIsArrayAction = ({commit}, value) => commit('SET_PERSON_IS_ARRAY', value);

export const setPersonInitialStatus = ({commit}) => commit('SET_PERSON_INITIAL_STATUS');

export const setPersonFoundName = ({commit}, name) => commit('SET_PERSON_FOUND_NAME', name);

export const setPersonFoundLastName = ({commit}, last_name) => commit('SET_PERSON_FOUND_LAST_NAME', last_name);

export const setPersonFoundNumber = ({commit}, number) => commit('SET_PERSON_FOUND_NUMBER', number);

export const setPersonAfipInscriptionId = ({commit}, afip_inscription_id) => commit('SET_PERSON_AFIP_INSCRIPTION_ID', afip_inscription_id);

export const setPersonAfipInscriptionName = ({commit}, afip_inscription_name) => commit('SET_PERSON_AFIP_INSCRIPTION_NAME', afip_inscription_name);

export const setPersonDocumentTypeId = ({commit}, document_type_id) => commit('SET_PERSON_DOCUMENT_TYPE_ID', document_type_id);

export const setPersonDocumentTypeName = ({commit}, document_type_name) => commit('SET_PERSON_DOCUMENT_TYPE_NAME', document_type_name);

export const setPersonAfipData = ({commit}, afip_data) => commit('SET_PERSON_AFIP_DATA', afip_data);