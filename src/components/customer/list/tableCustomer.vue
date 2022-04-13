<template>
    <q-table
        title="Listado de clientes"
        :data="list"
        :columns="Columns"
        row-key="name"
        class="q-mt-lg"
        no-data-label="Sin clientes para mostrar"
        :loading="true"
    />
</template>

<script>
const columns = [
    {
        name: 'name',
        required: true,
        label: 'Apellido',
        align: 'left',
        field : 'apellido',
        //field: row => row.name,
        //format: val => `${val}`,
        sortable: true
    },
]
export default {

    name : 'table',

    props : {
        list : {
            type : Array,
            required : true
        }
    },

    computed : {

        Columns(){
            return columns;
        }
    }


}
</script>

<style>

</style>