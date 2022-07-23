<template>
    <q-select 
        outlined
        v-model="yes_or_not"
        :options="YES_OR_NOT"
        label="Tipo de Documento"
        :dense="true"
        :options-dense="true"
        :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
        :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : null"
        />
</template>

<script>
    const YES_OR_NOT = [
        {id : 0, name : 'NO'},
        {id : 1, name : 'YES'},
    ]
    export default {

        name : 'q-select-yes-or-not',
        
    }
</script>
