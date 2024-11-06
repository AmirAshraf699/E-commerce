import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ShopPage from "@/views/ShopPage.vue";
import ShopDetail from "@/views/ShopDetail.vue";
import ContactUs from "@/views/ContactUs.vue";
import CartPage from "@/views/CartPage.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";
import TestimonialsPage from "@/views/TestimonialsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/shop-page",
    name: "shop-page",
    component: ShopPage,
  },
  {
    path: "/shop-details",
    name: "shop-details",
    component: ShopDetail,
  },
  {
    path: "/cart-page",
    name: "cart-page",
    component: CartPage,
  },
  {
    path: "/checkout-page",
    name: "checkout-page",
    component: CheckoutPage,
  },
  {
    path: "/testimonials-page",
    name: "testimonials-page",
    component: TestimonialsPage,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
