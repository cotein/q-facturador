<template>
    <q-select 
        class="col"
        v-model="customer"
        outlined 
        use-input
        fill-input
        emit-value
        :dense="true"
        hide-selected
        input-debounce="0"
        label="Cliente"
        :options="Options"
        @filter="searchData"
    >
        <template v-slot:after v-if="display_button_add_customer">
            <q-btn round dense flat icon="person_add" @click="open_dialog = true">
                <q-tooltip class="bg-amber text-black shadow-4" :offset="[10, 10]">
                    Ingresar nuevo Cliente
                </q-tooltip>
            </q-btn>
        </template>
    </q-select>
</template>
<script>

export default {
    
    props : {
        display_button_add_customer : {
            required : true,
            type : Boolean
        }
    },
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
                            //number : el.number,
                        }
                    }); 
                });
            }
        },

    },

}
</script>
