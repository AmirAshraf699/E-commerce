<template>
  <div class="testimonials">
    <v-container fluid>
      <div class="title">
        <h2 class="head">Our Testimonial</h2>
        <p class="desc">Our Client Saying!</p>
      </div>
      <Swiper
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :modules="modules"
        :slides-per-view="2"
        :space-between="30"
        :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
        :autoplay="{ delay: 3000 }"
      >
        <swiper-slide v-for="testi in testimonials" :key="testi.id">
          <p>{{ testi.desc }}</p>
          <div class="line"></div>
          <div class="content">
            <img :src="testi.img" alt="" />
            <div class="info">
              <h3>{{ testi.name }}</h3>
              <p>{{ testi.state }}</p>
              <v-rating
                :model-value="testi.rate"
                half-increments
                color="var(--bs-dark)"
                active-color="var(--bs-primary)"
                size="18"
                readonly
              ></v-rating>
            </div>
            <div class="comma">
              <v-icon>mdi-comma</v-icon>
              <v-icon>mdi-comma</v-icon>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-prev"></div>
        <div class="swiper-next"></div>
        <div class="swiper-pagination"></div>
      </Swiper>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, Navigation, Pagination } from "swiper";
import { counterStore } from "@/store/index";
import { mapState } from "pinia";
export default {
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination],
    };
  },
  computed: {
    ...mapState(counterStore, ["testimonials"]),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.testimonials {
  padding-top: 100px;
  padding-bottom: 100px;
  .title {
    h2.head {
      color: var(--bs-primary);
    }
    p.desc {
      font-size: 50px;
      font-weight: bolder;
    }
  }
  .swiper {
    width: 90%;
    position: relative;
    overflow: visible;
    .swiper-wrapper {
      width: 100%;
      .swiper-slide {
        background-color: var(--bs-light);
        padding: 20px;
        border-radius: 10px;
        width: 45%;
        p {
          color: var(--bs-gray);
          text-align: left;
        }
        .line {
          width: 100%;
          height: 1px;
          background-color: var(--bs-secondary);
          margin: {
            top: 20px;
            bottom: 20px;
          }
        }
        .content {
          display: flex;
          align-items: center;
          img {
            margin-right: 20px;
            width: 100px;
            height: 100px;
            border-radius: 15px;
          }
          .info {
            flex: 1;
            text-align: left;
          }
          .comma {
            .v-icon {
              color: var(--bs-secondary);
            }
          }
        }
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      position: absolute;
      width: 60px;
      height: 30px;
      border: 2px solid var(--bs-secondary);
      border-radius: 20px;
      top: -30px;
      z-index: 5;
      &::after {
        font-size: 16px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bs-primary);
      }
    }
    .swiper-button-next {
      right: 10px;
    }
    .swiper-button-prev {
      left: 100%;
    }
    .swiper-pagination {
      position: absolute;
      bottom: -40px;
    }
  }
}
</style>
