<template>
  <PagesHeading title="Testimonials" />
  <div class="testimonials">
    <v-container>
      <div class="title">
        <h2 class="head">Our Testimonial</h2>
        <p class="desc">Our Client Saying!</p>
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          xxl="6"
          v-for="testi in testimonials"
          :key="testi.id"
        >
          <div class="parent">
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
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PagesHeading from "@/components/global/PagesHeading.vue";
import { counterStore } from "@/store/index";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(counterStore, ["testimonials"]),
  },
  components: {
    PagesHeading,
  },
};
</script>

<style lang="scss" scoped>
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
  .v-row {
    .parent {
      background-color: var(--bs-light);
      padding: 20px;
      border-radius: 10px;
      width: 100%;
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
}
</style>
