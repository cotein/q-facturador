<template>
    <div>
        <q-btn
            padding="xs"
            color="red"
            icon="person_off"
            @click="open_dialog=true"
            :loading="Loading"
        >
            <q-tooltip>
                Eliminar cliente
            </q-tooltip>
        </q-btn>
        <q-dialog v-model="open_dialog" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <q-avatar icon="person" color="red" text-color="white" />
                    <span class="q-ml-sm">Va a eliminar el cliente seleccionado, ¿Desea continuar?</span>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="default" v-close-popup />
                    <q-btn @click="deleteCustomer" flat label="Aceptar" color="primary" v-close-popup  />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import loading_mixin from './../../../mixins/loadingMixin';
export default {

    name : 'buttonDeleteCustomer',

    props : {
        customer_id : {require : false}
    },

    mixins : [loading_mixin],

    data(){
        return {
            open_dialog : false
        }
    },

    methods : {

        async deleteCustomer(){

            this.startLoading();

            const response = await this.$store.dispatch('deleteCustomer', this.customer_id)
                .finally(() => this.stopLoading())

            if (response) {
                this.$q.notify({
                    type: 'success',
                    message: 'Cliente eliminado correctamente',
                    icon: 'announcement',
                    color : 'secondary'
                });
            }
        },

    },
}
</script>