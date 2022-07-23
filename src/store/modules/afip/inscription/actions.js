import AfipInscriptionService from "../../../../services/AfipInscriptionService";

export const afipSetInscriptions = ({commit}, value) => commit('AFIP_SET_INSCRIPTIONS', value);

export const afipSetInscription = ({commit}, value) => commit('AFIP_SET_INSCRIPTION', value);

export const getAfipInscriptions = async (_) => {

    try {
        const inscriptions = await AfipInscriptionService.get();

        return inscriptions.data;

    } catch (error) {
        throw error;
    }
}