import Service from "./Service";

const resource = '/api/v1/sale_invoice_type';

export default {

    get(){
        return Service.get(resource);
    },

    create(payload){
        return Service.post(resource, payload);
    },

    searchByName(query){

        let q = {};

        if (typeof query === 'object') {
            
            for (const key in query) {

                console.log(`${key}: ${query[key]}`);
                q[key] = query[key]
            }

        }else{
            q = {'search' : query}
        }
        return Service.get(resource, {
            params : q
        })
    }
}