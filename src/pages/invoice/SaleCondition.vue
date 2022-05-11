<template>
    <q-select outlined 
        bottom-slots 
        v-model="model" 
        :options="options" 
        label="Condición de venta"  
        :dense="dense" 
        :options-dense="denseOpts"
        :option-value="opt => Object(opt) === opt && 'id' in opt ? opt.id : null"
        :option-label="opt => Object(opt) === opt && 'name' in opt ? opt.name : null"
    >
        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
          <q-btn round dense flat icon="person" />
        </template>
      </q-select>
</template>

<script>
export default {

    data(){
        return{
            options : [],
            model : null,
            dense : true,
            denseOpts : true
        }
    },

    async mounted(){

        const sale_conditions = await this.$store.dispatch('getTermOfSale')

        if (sale_conditions) {
            this.options = sale_conditions;
        }
    }
}
</script>

<style>

</style>