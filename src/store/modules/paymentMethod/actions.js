import PaymentMethodService from "./../../../services/PaymentMethodService";

export const getPaymentMethods = async (_) => {

    try {
        const response = await PaymentMethodService.get();

        return response.data;

    } catch (error) {
        throw error;
    }
}
