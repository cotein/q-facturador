<template>
    <q-page
        class="q-ma-xl"
    >
        <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-7">
                <q-img
                    src="~/assets/img-login.svg"
                    spinner-color="primary"
                    spinner-size="82px"
                />
            </div>
            <div class="col-lg-5 col-md-5 col-sm-5">
                <span class="text-h5 flex justify-center q-ma-xl text-login" >INICIAR SESIÓN</span>
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
                        <q-btn class="full-width" label="Aceptar" type="submit" color="primary"/>
                    </div>
                </q-form>
            </div>
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

<style lang="scss">
    .text-login{
        color: $blue-grey-4;
    }
</style>