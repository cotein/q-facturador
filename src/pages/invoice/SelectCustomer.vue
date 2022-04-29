<template>
    <q-select 
        class="col"
        v-model="model"
        use-input
        input-debounce="500"
        label="Cliente"
        :options="Options"
        @input-value="searchData"
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
            const response = await this.$store.dispatch('searchCustomerByName', search)

            console.log(response.data)
            this.options = response.data.map((el)=>{
                console.log({
                    id : el.id,
                    label : el.name,
                })
                return {
                    id : el.id,
                    label : el.name,
                }
            });
        }
    },

    computed : {

        Options(){
            return this.options;
        }
    }
}
</script>

<style>

</style>