import Service from "./Service";

const resource = '/api/v1/term_of_sale';

export default {

    get(){
        return Service.get(resource);
    },

    create(term){
        return Service.post(resource, term);
    },
    
    searchByName(query){
        return Service.get(resource, {
            params : {
                search : query
            }
        })
    }
}