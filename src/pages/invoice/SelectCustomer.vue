<template>
    <q-select 
        class="col"
        v-model="model"
        use-input
        fill-input
        emit-value
        hide-selected
        input-debounce="0"
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
        
        async searchData(search, update){
            console.log(search)
            const response = await this.$store.dispatch('searchCustomerByName', search)

            console.log(response.data)
            //
            //this.options = response.data;
            update(()=> {

                this.options = response.data.map((el)=>{
                    return {
                        id : el.id,
                        label : el.name,
                    }
                }); 
            })
        },

    },

    computed : {

        Options(){
            console.log('this.options dentro de computed')
            console.log(this.options)
            console.log('this.options dentro de computed')
            return this.options;
        }
    },

}
</script>

<style>

</style>