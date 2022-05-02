<template>
    <q-select 
        class="col"
        v-model="model"
        use-input
        fill-input
        hide-selected
        input-debounce="10"
        label="Cliente"
        :options="Options"
        @filter="searchData"
        @input-value="setModel"
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
            this.options = response.data.filter((el)=>{
                console.log({
                    el
                })
                el.name.includes(search)
                let pp = {
                    id : el.id,
                    label : el.name,
                }

                this.setModel(pp)
            });
        },

        setModel(s){
            this.model = s
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