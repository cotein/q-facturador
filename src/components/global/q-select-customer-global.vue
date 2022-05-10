<template>
    <q-select 
        class="col"
        v-model="customer"
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
    
    name : 'QSelectCustomerGlobal',
    
    methods : {
        
        async searchData(search, update){

            const response = await this.$store.dispatch('searchCustomerByName', search)
            .catch((err) => {
                console.log(err.response.data)
            })

            if (response) {
                console.log(response.data)
                update(()=> {

                    this.options = response.data.map((el)=>{
                        return {
                            id : el.id,
                            label : el.name,
                        }
                    }); 
                });
            }
        },

    },

}
</script>
