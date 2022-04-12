import Service from "./Service";

export default {
    
    async login(payload){
        
        const {email, password} = payload;
        
        try {
            return await Service.post('/oauth/token', {
                client_id: process.env.APP_SERVER_CLIENT_ID,
                client_secret: process.env.APP_SERVER_CLIENT_SECRET,
                grant_type: process.env.APP_GRANT_TYPE,
                username: email,
                password: password,
                scope: '*', 
            })

        } catch (error) {
            throw error;
        }
    },

    async register (payload){

        try {
            return await Service.post('/api/v1/user', payload);
        } catch (error) {
            throw error;            
        }
    }
}