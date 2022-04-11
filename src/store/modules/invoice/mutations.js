export const INVOICE_SET_CUSTOMER = (state, customer) => state.customer = customer;

export const INVOICE_SET_DATE_INVOICE = (state, date_invoice) => state.date_invoice = date_invoice;

export const INVOICE_SET_DESCRIPTION = (state, description) => state.description = description;

export const INVOICE_SET_INVOICE_TYPE = (state, invoice_type) => state.invoice_type = invoice_type;

export const INVOICE_SET_PTO_VTA = (state, pto_vta) => state.pto_vta = pto_vta;

export const INVOICE_SET_CBTE_NRO = (state, cbte_nro) => state.cbte_nro = cbte_nro;

export const INVOICE_SET_CONCEPTO = (state, concepto) => state.concepto = concepto;

export const INVOICE_SET_DATE_SRV_FROM = (state, FchServDesde) => state.srv.FchServDesde = FchServDesde;

export const INVOICE_SET_DATE_SRV_TO = (state, FchServHasta) => state.srv.FchServHasta = FchServHasta;

export const INVOICE_SET_DATE_SRV_VTO_PAGO = (state, FchVtoPago) => state.srv.FchVtoPago = FchVtoPago;

export const INVOICE_SET_IVA = (state, iva) => state.iva = iva;

export const INVOICE_SET_NETO_IMPORT = (state, neto) => state.imports.neto = neto;

export const INVOICE_SET_IVA_IMPORT = (state, iva) => state.imports.iva = iva;

export const INVOICE_SET_BONIFICATION_IMPORT = (state, bonification) => state.imports.bonification = bonification;

export const INVOICE_SET_TOTAL_IMPORT = (state, total) => state.imports.total = total;

export const INVOICE_SET_TERM_OF_SALE = (state, term_of_sale) => state.term_of_sale = term_of_sale;

export const INVOICE_UPDATE_IMPORTS_VALUES = (state) => {
    
    let bonification = parseFloat(state.imports.bonification);

    let subtotal = parseFloat(state.imports.neto) - bonification;

    let iva_percentage = parseFloat(state.iva.percentage);

    let iva_import = parseFloat(subtotal * iva_percentage / 100);

    let total = subtotal + iva_percentage;

    state.imports.iva = iva_import;

    state.imports.total = total;
}