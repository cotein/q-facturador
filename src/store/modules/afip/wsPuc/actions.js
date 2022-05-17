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