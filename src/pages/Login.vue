<template>
    <q-page
        class="window-height window-width row flex justify-center "
        style="background: linear-gradient(#8274C5, #5A4A9F);"
    >
        <div class="col-4 col-offset-4 q-ma-lg bg-grey-2">
            <header class="q-pa-lg">
                <span class="text-h5 flex justify-center">INICIAR SESION</span>
            </header>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md q-pa-lg"
                >
                    <q-input
                        filled
                        v-model="email"
                        label="E-mail"
                        hint="Ingree su email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                    />

                    <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Campo requerido']"

                    />

                    <div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
        </div>
    </q-page>
</template>

<script>
export default {

    name: 'Login',

    data () {
        return {
            email: "randy.hamill@example.com", //casa : randy.hamill@example.com
            password: "password", //laburo : xernser@example.org
        }
    },

    methods : {

        onSubmit(){

        },

        onReset(){

        }
    }
}
</script>

<style>
    .bg-grey-2{
        background-color: #e7eaf6;
    }
</style>