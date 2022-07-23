import Service from "./Service";

const resource = '/api/v1/afip_document_type';

export default {

    get(){
        return Service.get(resource);
    }
    
}