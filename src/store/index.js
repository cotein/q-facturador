import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import loading_mixin from "./../mixins/loadingMixin";
Vue.mixin(loading_mixin);

/**AFIP */
import afip_document_type from "./modules/afip/document_type";
import afip_inscription from "./modules/afip/inscription";
import afip_wsfev1 from "./modules/afip/wsFeV1";
import afip_wsPuc from "./modules/afip/wsPuc";

import auth from "./modules/auth";
import company from "./modules/company";
import customer from "./modules/customer";
import customer_list from "./modules/customer/list";
import customer_new from "./modules/customer/new";
import invoice from "./modules/invoice";
import payment_methods from './modules/paymentMethod';
import settings from "./modules/settings";
import term_of_sale from "./modules/termOfSale";

export default function (/* { ssrContext } */) {
  	const Store = new Vuex.Store({
		modules: {
			afip_document_type,
			afip_inscription,
			afip_wsfev1,
			afip_wsPuc,
			auth,
			company,
			customer_list,
			customer_new,
			customer,
			invoice,
			payment_methods,
			settings,
			term_of_sale,
	},

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
