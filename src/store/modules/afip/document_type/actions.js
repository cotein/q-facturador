import AfipDocumentTypeService from "../../../../services/AfipDocumentTypeService";

export const afipSetDocumentTypes = ({commit}, value) => commit('AFIP_SET_DOCUMENT_TYPES', value);

export const afipSetDocumentType = ({commit}, value) => commit('AFIP_SET_DOCUMENT_TYPE', value);

export const getAfipDocumentType = async (_) => {

    try {
        const document_type = await AfipDocumentTypeService.get();

        return document_type.data;

    } catch (error) {
        throw error;
    }
}