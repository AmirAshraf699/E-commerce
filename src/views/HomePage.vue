<template>
  <div class="home">
    <HomeLanding />
    <HomeFeatures />
    <OrganicProducts />
    <HomeDiscount />
    <RelateProducts />
    <ExoticFruits />
    <BestSaller />
    <AboutUs />
    <HomeTesti />
  </div>
</template>

<script>
import RelateProducts from "@/components/global/RelateProducts.vue";
import AboutUs from "@/components/homepage/AboutUs.vue";
import BestSaller from "@/components/homepage/BestSaller.vue";
import ExoticFruits from "@/components/homepage/ExoticFruits.vue";
import HomeDiscount from "@/components/homepage/HomeDiscount.vue";
import HomeFeatures from "@/components/homepage/HomeFeatures.vue";
import HomeLanding from "@/components/homepage/HomeLanding.vue";
import HomeTesti from "@/components/homepage/HomeTesti.vue";
import OrganicProducts from "@/components/homepage/OrganicProducts.vue";
export default {
  components: {
    HomeLanding,
    HomeFeatures,
    OrganicProducts,
    HomeDiscount,
    RelateProducts,
    ExoticFruits,
    BestSaller,
    AboutUs,
    HomeTesti,
  },
};
</script>
