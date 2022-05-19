const state = {
    search_number : null,
    person : null,
    personIsArray : false,
    personFound : {
        name : '',
        last_name : '',
        number : '',
        afip_inscription_id : '',
        afip_inscription_name : '',
        document_type_id : '',
        document_type_name : '',
        afip_data : '',
        status_id : 1, //activo
        address : {
            country_id : 1, //argentina
            state_id : '',
            city : '',
            cp : '',
            address : '',
        }
    }
}

export default state;