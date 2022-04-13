<template>
        <tableCustomer :list="[]"/>
</template>

<script>
import tableCustomer from "./tableCustomer.vue";
export default {

    name : 'WrapperTable',

    components : {tableCustomer}
}
</script>

<style>

</style>