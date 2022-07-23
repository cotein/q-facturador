import CustomerService from "../../../../services/CustomerService";

export const getCustomers = async (_) => {

    try {
        const response = await CustomerService.get();

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const removeCustomerFromList = ({commit}, value) => commit('REMOVE_CUSTOMER_FROM_LIST', value);

export const set_customer_list = ({commit}, value) => {
    commit('SET_CUSTOMERS_LIST', value);
}