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
                    @submit="login"
                    @reset="onReset"
                    class="q-gutter-md q-pa-lg"
                >
                    <q-input
                        filled
                        v-model="email"
                        label="E-mail"
                        hint="Ingrese su email"
                        lazy-rules
                        :disable="isDisabledInput"
                        :rules="[ val => val && val.length > 0 || 'Campo requerido']"
                    />

                    <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        hint="Ingrese su password"
                        lazy-rules
                        :disable="isDisabledInput"
                        :rules="[ val => val && val.length > 0 || 'Campo requerido']"

                    />

                    <div>
                        <q-btn 
                            :loading="Loading"
                            class="full-width" 
                            label="Aceptar" 
                            type="submit" 
                            color="primary"/>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>

<script>
import inputMixin from "./../mixins/inputMixin";
import loadingMixin from "./../mixins/loadingMixin";
import UserHttpService from "./../services/UserHttpService";
export default {

    name: "Login",

    mixins : [loadingMixin, inputMixin],

    data() {
        return {
            email: "randy.hamill@example.com", //casa : randy.hamill@example.com
            password: "password", //laburo : xernser@example.org
        };
    },

    methods: {

        async login() {

            this.startLoading();

            this.disabled_Input();

            const { email, password } = this;

            const login = await this.$store.dispatch('login', {email, password})
            .catch((err) => {
                this.$q.notify({
                    type: 'negative',
                    message: 'No se pudo conectar al servidor',
                    icon: 'announcement'
                });
            })
            .finally(() => {
                this.enableInput();
                this.stopLoading();
            });

            if (login) {
                console.log('login')
                console.log(login)
                
                console.log('login')
                sessionStorage.setItem("user-token", login.data.access_token);
                
                setTimeout(async () => {
                    const me = await UserHttpService.me();
                    console.log('me')
                    console.log(me)
                    console.log('me')
                    this.$store.dispatch('doLogin', me.data.data)

                    this.$router.push("/customer");
                }, 1000);
                
                
            }
        },

        onReset(){

        }
    },
}
</script>

<style lang="scss">
    .text-login{
        color: $blue-grey-4;
    }
</style>