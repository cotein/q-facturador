const state = {
    customer : null,
    invoice_type : null,
    date_invoice : null,
    description : null,
    pto_vta : null,
    cbte_nro : null,
    concepto : 1,
    term_of_sale : null,
    srv : {
        FchServDesde : null,
        FchServHasta : null,
        FchVtoPago : null
    },
    iva : {
        id : 6,
        name : '21%',
        percentage : 21,
        afip_code:"5"
    },
    imports : {
        neto : 0,
        iva : 0,
        bonification : 0,
        total : 0
    },
    afip : {
        
    }

}

export default state;