export default {

    data() {
        return {
            spinner: false,
            message : ''
        };
    },

    methods: {
        
        startSpinner() {
            this.spinner = true;
        },

        stopSpinner() {
            this.spinner = false;
        },

        setMessage(value){
            this.message = value;
        }

    },

    computed : {

        Spinner(){
            return this.spinner;
        },

        Message(){
            return this.message;
        }
    }
}