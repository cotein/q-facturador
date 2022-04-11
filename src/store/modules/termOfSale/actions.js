import TermOfSale from "./../../../services/TermOfSale";

export const searchTermOfSaleByName = async (_, query) => {

    try {
        const response = await TermOfSale.searchByName(query);

        return response.data;

    } catch (error) {
        throw error;
    }
}