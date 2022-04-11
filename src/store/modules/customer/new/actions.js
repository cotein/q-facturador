import CustomerService from "../../../../services/CustomerService";

export const getCustomers = async (_) => {

    try {
        const response = await CustomerService.get();

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const createCustomer = async (_, payload) => {

    try {
        const response = await CustomerService.create(payload);

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const searchCustomerByName = async (_, query) => {

    try {
        const response = await CustomerService.searchByName(query);

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const set_customer_list = ({commit}, value) => {
    commit('SET_CUSTOMERS_LIST', value);
}