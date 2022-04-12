<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container transition-show="fade">
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            appear
            :duration="300"
        >
            <router-view />
        </transition>
    </q-page-container>
  </q-layout>
</template>