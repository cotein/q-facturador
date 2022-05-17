<template>
    <div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
        >
            <q-tab name="Principal" label="Principal" />
            <q-tab name="Remitos" label="Remitos" />
            <q-tab name="Texto libre" label="Texto libre" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Principal">
                <div class="text-h6">Principal</div>
                
            </q-tab-panel>

            <q-tab-panel name="Remitos">
                <div class="text-h6">Remitos</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="Texto libre">
                <div class="text-h6">Texto libre</div>
                <TabEditor />
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
import TabEditor from "./TabEditor.vue";


export default {

    components : {TabEditor},

    data(){
        return {
            tab : 'mails'
        }
    }
}
</script>

<style>

</style>