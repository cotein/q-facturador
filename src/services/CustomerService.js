import Service from "./Service";

const resource = '/api/v1/customer';

export default {

    get(){
        return Service.get(resource);
    },

    create(customer){
        return Service.post(resource, customer);
    },

    delete(customer){
        return Service.delete(resource + '/' + customer);
    },

    searchByName(query){
        return Service.get(resource, {
            params : {
                search : query
            }
        })
    }
}