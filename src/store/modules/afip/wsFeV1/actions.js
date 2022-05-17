import AfipService from "../../../../services/external/afip/WsFeV1Service";

export const ultimo_autorizado = async (_, payload) => {

    try {
        
        return await AfipService.ultimo_autorizado(payload);

    } catch (error) {
        throw error;
    }
}