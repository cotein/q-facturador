export const InvoiceGetCustomer = (state) => state.customer;

export const InvoiceGetDateInvoice = (state) => state.date_invoice;

export const InvoiceGetDescription = (state) => state.description;

export const InvoiceGetInvoiceType = (state) => state.invoice_type;

export const InvoiceGetPtoVta = (state) => state.pto_vta;

export const InvoiceGetCbteNro = (state) => state.cbte_nro;

export const InvoiceGetConcepto = (state) => state.concepto;

export const InvoiceGetDateSrvFrom = (state) => state.srv.FchServDesde;

export const InvoiceGetDateSrvTo = (state) => state.srv.FchServHasta;

export const InvoiceGetDateSrvVtoPago = (state) => state.srv.FchVtoPago;

export const InvoiceGetNeto = (state) => state.imports.neto;

export const InvoiceGetIva = (state) => state.imports.iva;

export const InvoiceGetBonification = (state) => state.imports.bonification;

export const InvoiceGetTotal = (state) => state.imports.total;

export const InvoiceGetTermOfSale = (state) => state.term_of_sale;