import IvaService from "../../../../services/IvaService";

export const multiselectIvaSetOptions = ({commit}, options) => commit('MULTISELECT_IVA_SET_OPTIONS', options);

export const multiselectIvaUpdateValue = ({commit}, value) => commit('MULTISELECT_IVA_UPDATE_VALUE', value);

export const getIvas = async (_) => {

    try {
        const response = await IvaService.get();

        return response.data;

    } catch (error) {
        throw error;
    }
}
