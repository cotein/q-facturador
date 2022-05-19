<template>
   <q-card-section>
        <q-item>
            <q-item-section avatar>
                <q-avatar>
                    <q-icon name="account_circle" size="xl" />
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>name</q-item-label>
                    <q-item-label caption>
                        {{PersonDocumentTypeNameGetter}} ----------
                    </q-item-label>
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section avatar>
                <q-avatar>
                    <q-icon name="home" size="md" />
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>Domicilio</q-item-label>
                    <q-item-label caption>
                        direccion
                    </q-item-label>
            </q-item-section>
        </q-item>
        <q-item class="col justify-center">
            <q-item-section top avatar>
                <q-btn color="primary" icon="check" label="Guardar" />
            </q-item-section>
        </q-item>
    </q-card-section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {

    props : {
        person : {
            required : true,
        }
    },

    computed : {

        ...mapGetters([
            'PersonDocumentTypeNameGetter'
        ])
    }

}
</script>

<style>

</style>