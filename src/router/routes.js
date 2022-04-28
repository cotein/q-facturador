
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'customer', component: () => import('src/pages/customer/list/index.vue') },
      { path: 'comprobantes/nuevo', component: () => import('src/pages/invoice/page_invoice.vue') },
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
