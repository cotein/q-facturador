export const SET_CUSTOMERS_LIST = (state, customers) => state.customers = customers;

export const REMOVE_CUSTOMER_FROM_LIST = (state, value) => {
    const index = state.customers.findIndex(customer => customer.id == value);
    state.customers.splice(index, 1);
}