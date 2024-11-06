<template>
  <div class="home-features">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          xxl="3"
          v-for="feat in features"
          :key="feat.id"
        >
          <div class="feat">
            <div class="icon">
              <v-icon>{{ feat.icon }}</v-icon>
            </div>
            <p class="desc">{{ feat.desc }}</p>
            <span>{{ feat.offer }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: "1",
          icon: "mdi-car-side",
          desc: "Free Shipping",
          offer: "Free on order over $300",
        },
        {
          id: "2",
          icon: "mdi-shield-account",
          desc: "Security Payment",
          offer: "100% security payment",
        },
        {
          id: "3",
          icon: "mdi-arrow-expand",
          desc: "30 Day Return",
          offer: "30 day money guarantee",
        },
        {
          id: "4",
          icon: "mdi-phone",
          desc: "24/7 Support",
          offer: "Support every time fast",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.home-features {
  padding: {
    top: 100px;
    bottom: 100px;
  }
  .feat {
    background-color: var(--bs-light);
    padding: 20px;
    border-radius: 15px;
    .icon {
      position: relative;
      background-color: var(--bs-warning);
      color: var(--bs-white);
      width: fit-content;
      margin: 0 auto 50px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: 900;
      &::before {
        position: absolute;
        content: "";
        border: 30px solid;
        border-color: var(--bs-warning) transparent transparent;
        bottom: -45px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
      }
    }
    .desc {
      color: var(--bs-dark);
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    span {
      color: var(--bs-gray);
    }
  }
}
</style>
