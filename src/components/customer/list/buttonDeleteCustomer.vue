<template>
    <q-btn
        padding="xs"
        color="red"
        icon="person_off"
        @click="deleteCustomer"
    >
        <q-tooltip>
            Eliminar cliente
        </q-tooltip>
    </q-btn>
</template>

<script>
export default {

    name : 'buttonDeleteCustomer',

    props : {
        customer_id : {require : false}
    },

    methods : {

        async deleteCustomer(){

            console.log('response');
            const response = await this.$store.dispatch('deleteCustomer', this.customer_id)

            console.log(response);
        }
    },

    mounted(){
        console.log(this.customer_id)
    }
}
</script>