<template>
    <q-select 
        class="col"
        v-model="model"
        use-input
        option-label="label"
        option-value="id"
        label="Cliente"
        :options="options"
        @filter="filterFn"
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

        async filterFn(search){
            const response = await this.$store.dispatch('searchCustomerByName', search)

            console.log(response.data)
            const www = response.data.map((el)=>{
                console.log({
                    id : el.id,
                    label : el.name,
                })
                return {
                    id : el.id,
                    label : el.name,
                }
            });

            console.log('www')
            console.log(www)
            this.options = www
            console.log('www')
        }
    }
}
</script>

<style>

</style>