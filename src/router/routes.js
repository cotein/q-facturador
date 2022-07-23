
const routes = [
  {
    path: "/",
    component: () => import("layouts/Landing.vue"),
    children: [
      { path: "", component: () => import("pages/Layout1.vue") },
      { path: "layout1", component: () => import("pages/Layout1.vue") },
      { path: "contactenos", component: () => import("pages/Layout2.vue") }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      //{ path: '', component: () => import('pages/Index.vue') },
      { path: 'clientes', component: () => import('src/pages/customer/list/index.vue') },
      { path: 'comprobantes/nuevo', component: () => import('src/pages/invoice/page_invoice.vue') },
      { path: 'empresa', component: () => import('src/pages/company/index.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LogAndRegLayout.vue'),
    children: [
      { path: 'login', name : 'login', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
