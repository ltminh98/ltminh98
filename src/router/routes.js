const routes = [
  {
    path: "/",
    // component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "homepage",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/page-1",
        component: () => import("pages/Page1.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
