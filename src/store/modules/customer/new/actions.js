import CustomerService from "../../../../services/CustomerService";

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

export const deleteCustomer = async (_, customer) => {

    try {
        const response = await CustomerService.delete(customer);

        return response.data;

    } catch (error) {
        throw error;
    }
}