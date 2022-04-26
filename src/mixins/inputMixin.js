export default {

    data(){
        return {
            disabledInput : false
        }
    },

    methods : {

        enableInput(){
            this.disabledInput = false;
        },

        disabled_Input(){
            this.disabledInput = true;
        }
    },

    computed : {

        isDisabledInput(){
            return this.disabledInput
        }
    }
}