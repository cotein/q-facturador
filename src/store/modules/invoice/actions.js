import SaleInvoiceTypeService from "./../../../services/SaleInvoiceTypeService";
import UtilsDate from "./../../../utils/date/UtilsDate";

export const invoiceSetCustomer = ({commit}, customer) => {
    commit('INVOICE_SET_CUSTOMER', customer)
}

export const invoiceSetDateInvoice = ({commit}, date_invoice) => {
    commit('INVOICE_SET_DATE_INVOICE', date_invoice)
}

export const invoiceSetDescription = ({commit}, description) => {
    commit('INVOICE_SET_DESCRIPTION', description)
}

export const invoiceSetInvoiceType = ({commit}, invoice_type) => {
    commit('INVOICE_SET_INVOICE_TYPE', invoice_type)
}

export const invoiceSetPtoVta = ({commit}, pto_vta) => {
    commit('INVOICE_SET_PTO_VTA', pto_vta)
}

export const invoiceSetCbteNro = ({commit}, cbte_nro) => {
    commit('INVOICE_SET_CBTE_NRO', cbte_nro)
}

export const invoiceSetConcepto = ({commit}, concepto) => {
    commit('INVOICE_SET_CONCEPTO', concepto)
}

export const invoiceSetDateSrvFrom = ({commit}, value) => {
    commit('INVOICE_SET_DATE_SRV_FROM', value)
}

export const invoiceSetDateSrvTo = ({commit}, value) => {
    commit('INVOICE_SET_DATE_SRV_TO', value)
}

export const invoiceSetDateSrvVtoPago = ({commit}, value) => {
    commit('INVOICE_SET_DATE_SRV_VTO_PAGO', value)
}

export const invoiceSetIva = ({commit}, value) => {
    commit('INVOICE_SET_IVA', value)
    commit('INVOICE_UPDATE_IMPORTS_VALUES')
}

export const invoiceSetNetoImport = ({commit}, value) => {
    commit('INVOICE_SET_NETO_IMPORT', value)
    commit('INVOICE_UPDATE_IMPORTS_VALUES')
}

export const invoiceSetIvaImport = ({commit}, value) => {
    commit('INVOICE_SET_IVA_IMPORT', value)
    commit('INVOICE_UPDATE_IMPORTS_VALUES')
}

export const invoiceSetBonificationImport = ({commit}, value) => {
    commit('INVOICE_SET_BONIFICATION_IMPORT', value)
    commit('INVOICE_UPDATE_IMPORTS_VALUES')
}

export const invoiceSetTotalImport = ({commit}, value) => {
    commit('INVOICE_SET_TOTAL_IMPORT', value)
}

export const invoiceSetTermOfSale = ({commit}, value) => {
    commit('INVOICE_SET_TERM_OF_SALE', value)
}

export const searchSaleinvoiceTypeByName = async (_, query) => {

    try {
        const response = await SaleInvoiceTypeService.searchByName(query);

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const prepareInvoiceToAfip = (context) => {

    const invoice  = context.state;

    let iva = {
        AlicIva : {
            Id : '',
            BaseImp : '',
            Importe : ''
        }
    }

    let FECAEDetRequest = {}

        FECAEDetRequest.Concepto      = invoice.concepto;//Concepto puede ser 1 produ| 86=CUIL
        FECAEDetRequest.DocNro        = invoice.customer.number;//Documento NÃºmero:CUIT
        FECAEDetRequest.CbteDesde     = invoice.cbte_nro;//Comprobante desde
        FECAEDetRequest.CbteHasta     = invoice.cbte_nro;//Comprobante hasta
        FECAEDetRequest.CbteFch       = UtilsDate.yearMonthDateWhithOutLine(invoice.date_invoice) //Fecha del comprobante
        FECAEDetRequest.DocTipo       = invoice.customer.afip_document_type_code;//Documento tipo: 80=CUIT | 96=DNI 
        FECAEDetRequest.ImpTotal      = invoice.imports.total;//Importe total: nng + ex + ng + todos los ivas + tributos
        FECAEDetRequest.ImpTotConc    = 0;//Importe neto NO gravado
        FECAEDetRequest.ImpNeto       = invoice.imports.neto;//Importe neto gravadoctos, 2 servicios o 3 productos y servicios
        FECAEDetRequest.ImpOpEx       = 0//Importe exento
        FECAEDetRequest.ImpTrib       = 0;//Suma de los importes del Array Tributos
        FECAEDetRequest.ImpIVA        = invoice.imports.iva;//Suma de los importes del Array IVA
        FECAEDetRequest.FechServDesde = '';//Fecha inicio del Servicio - Si se factura productos no es necesario
        FECAEDetRequest.FechServHasta = '';//Fecha fin del Servicio
        FECAEDetRequest.FchVtoPago    = UtilsDate.yearMonthDateWhithOutLine(invoice.date_invoice) ;//Fecha de Vencimiento de pago: Debe ser >= a la fecha del comprobante
        FECAEDetRequest.MonId         = 'PES' ;//Moneda del comprobante
        FECAEDetRequest.MonCotiz      = 1;//CotizaciÃ³n de la moneda
        FECAEDetRequest.Iva           = iva
    
    console.log(FECAEDetRequest)
}
export const generateInvoice = async (_, payload) => {

}


