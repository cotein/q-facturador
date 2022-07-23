import Service from "./Service";

const resource = '/api/v1/afip_inscription';

export default {

    get(){
        return Service.get(resource);
    }
    
}