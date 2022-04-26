export default {

    data() {
        return {
            loading: false,
            message : ''
        };
    },

    methods: {
        
        startLoading() {
            this.loading = true;
        },

        stopLoading() {
            this.loading = false;
        },

        setMessage(value){
            this.message = value;
        }

    },

    computed : {

        Loading(){
            return this.loading;
        },

        Message(){
            return this.message;
        }
    }
}