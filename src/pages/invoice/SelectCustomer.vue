<template>
    <q-select 
        class="col"
        v-model="model"
        use-input
        fill-input
        emit-value
        hide-selected
        input-debounce="10"
        label="Cliente"
        :options="Options"
        @filter="searchData"
    />
</template>

<script>
export default {

    name : 'SelectCustomer',

    data(){
        return {
            model : null,
            options : []
        }
    },

    methods : {
        
        async searchData(search){
            console.log(search)
            const response = await this.$store.dispatch('searchCustomerByName', search)

            console.log(response.data)
            this.options = response.data;
            /* this.options = response.data.filter((el)=>{
                console.log(el)
                el.name.includes(search)
                let customer = {
                    id : el.id,
                    label : el.name,
                }

                this.setModel(customer)
            }); */
        },

       /*  setModel(s){
            this.model = s
        } */
    },

    computed : {

        Options(){
            console.log('this.options dentro de computed')
            console.log(this.options)
            console.log('this.options dentro de computed')
            return this.options;
        }
    }
}
</script>

<style>

</style>