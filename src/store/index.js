import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import loading_mixin from "./../mixins/loadingMixin";
Vue.mixin(loading_mixin);

import auth from "./modules/auth" ;
import settings from "./modules/settings";
import customer from "./modules/customer";
import customer_new from "./modules/customer/new";
import customer_list from "./modules/customer/list";
import invoice from "./modules/invoice";
import afip_wsfev1 from "./modules/afip/wsFeV1";
import term_of_sale from "./modules/termOfSale"
import payment_methods from './modules/paymentMethod'

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      settings,
      afip_wsfev1,
      auth,
      customer,
      customer_list,
      customer_new,
      invoice,
      term_of_sale,
      payment_methods
  },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
