<template>
  <q-layout view="lHh Lpr lff">
    <q-header dark class="bg-green">
      <q-toolbar>
        <q-avatar>
          <img src="icons/favicon-32x32.png" />
        </q-avatar>
        <q-toolbar-title>
          Landing Page Templates
        </q-toolbar-title>
        <q-space />
        <q-btn flat to="/contactenos">Contáctenos</q-btn>
        <q-btn flat to="/login">Iniciar Sesión</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Footer from "../components/landing/Footer";

export default {
  name: "Landing",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  components: {
    Footer
  }
};
</script>
