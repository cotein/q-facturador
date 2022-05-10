import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import loading_mixin from "./../mixins/loadingMixin";
Vue.mixin(loading_mixin);

import auth from "./modules/auth" ;
import settings from "./modules/settings";
import customer from "./modules/customer";
import customer_multiselect from "./modules/customer/multiselect";
import customer_new from "./modules/customer/new";
import customer_list from "./modules/customer/list";
import invoice from "./modules/invoice";
import invoice_multiselect from "./modules/invoice/multiselect";
import afip_wsfev1 from "./modules/afip/wsFeV1";
import iva_multiselect from "./modules/iva/multiselect";
import term_of_sale from "./modules/termOfSale"
import term_of_sale_multiselect from "./modules/termOfSale/multiselect"

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      settings,
      afip_wsfev1,
      auth,
      customer,
      customer_list,
      customer_new,
      customer_multiselect,
      invoice,
      invoice_multiselect,
      iva_multiselect,
      term_of_sale,
      term_of_sale_multiselect
  },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
