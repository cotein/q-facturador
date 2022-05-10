<template>
    <q-table
        title="Listado de clientes"
        :data="list"
        :columns="Columns"
        row-key="name"
        class="q-mt-lg"
        no-data-label="Sin clientes para mostrar"
        loading-label="Búscando datos"
        :loading="Loading"
    >
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="last_name" :props="props">
                    {{ props.row.attributes.last_name }}
                </q-td>
                <q-td key="name" :props="props">
                    {{ props.row.attributes.name }}
                </q-td>
                <q-td key="document_type" :props="props">
                    {{ props.row.attributes.afip_document_type_name }}
                </q-td>
                <q-td key="number" :props="props">
                    {{ props.row.attributes.number }}
                </q-td>
                <q-td key="actions" :props="props">
                    <buttonDeleteCustomer :customer_id="props.row.id" />
                </q-td>
            </q-tr>
        </template>
    </q-table>
</template>

<script>
const columns = [
    {
        name: 'last_name',
        required: true,
        label: 'Apellido',
        align: 'left',
        field : 'apellido',
        //field: row => row.last_name,
        //format: val => `${val}`,
        sortable: true
    },
    {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'left',
        field : 'name',
        //field: row => row.name,
        //format: val => `${val}`,
        sortable: true
    },
    {
        name: 'document_type',
        required: true,
        label: 'Documento',
        align: 'left',
        field : 'document_type',
        //field: row => row.name,
        //format: val => `${val}`,
        sortable: true
    },
    {
        name: 'number',
        required: true,
        label: 'Número',
        align: 'left',
        field : 'number',
        //field: row => row.name,
        //format: val => `${val}`,
        sortable: true
    },
    {
        name: 'actions',
        required: true,
        label: 'Acciones',
        align: 'center',
        field : 'actions',
        //field: row => row.name,
        //format: val => `${val}`,
        sortable: false
    },
]

import buttonDeleteCustomer from './buttonDeleteCustomer.vue'
export default {

    name : 'table',

    props : {
        list : {
            type : Array,
            required : true
        },
    },

    components : {buttonDeleteCustomer},

    computed : {

        Columns(){
            return columns;
        }
    }


}
</script>

<style>

</style>