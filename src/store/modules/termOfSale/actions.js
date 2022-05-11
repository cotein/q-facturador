import TermOfSale from "./../../../services/TermOfSale";

export const getTermOfSale = async (_,) => {

    try {
        const response = await TermOfSale.get();

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const searchTermOfSaleByName = async (_, query) => {

    try {
        const response = await TermOfSale.searchByName(query);

        return response.data;

    } catch (error) {
        throw error;
    }
}