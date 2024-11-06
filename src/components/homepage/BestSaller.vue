<template>
  <div class="best-saller">
    <v-container fluid>
      <div class="title">
        <h2>Bestseller Products</h2>
        <p>
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </p>
      </div>
      <v-row class="first">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="4"
          xxl="4"
          v-for="first in firstProducts"
          :key="first.id"
        >
          <div class="first-products">
            <div class="image">
              <img :src="first.img" alt="" />
            </div>
            <div class="info">
              <h3>{{ first.title }}</h3>
              <v-rating
                :model-value="first.value"
                half-increments
                color="var(--bs-primary)"
                active-color="var(--bs-primary)"
                density="compact"
                readonly
              >
              </v-rating>
              <p class="price">{{ first.price }}</p>
              <AddButton />
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="last">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="3"
          xl="3"
          xxl="3"
          v-for="second in secondProducts"
          :key="second.id"
        >
          <div class="second-products">
            <img :src="second.img" alt="" />
            <div class="info">
              <h3>{{ second.title }}</h3>
              <v-rating
                :model-value="second.value"
                half-increments
                color="var(--bs-primary)"
                active-color="var(--bs-primary)"
                density="compact"
                readonly
              >
              </v-rating>
              <p>{{ second.price }}</p>
              <AddButton style="margin: 0 auto" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddButton from "../global/AddButton.vue";

export default {
  components: {
    AddButton,
  },
  data() {
    return {
      firstProducts: [
        {
          id: 1,
          title: "Organic orange",
          value: "4.5",
          price: "3.12 $",
          img: new URL("@/assets/images/orange.jpg", import.meta.url).href,
        },
        {
          id: 2,
          title: "Organic berries",
          value: "4",
          price: "4.15 $",
          img: new URL("@/assets/images/berries.webp", import.meta.url).href,
        },
        {
          id: 3,
          title: "Organic banaba",
          value: "5",
          price: "2.19 $",
          img: new URL("@/assets/images/Banana.jpg", import.meta.url).href,
        },
        {
          id: 4,
          title: "Organic apricot",
          value: "3.5",
          price: "6.44 $",
          img: new URL("@/assets/images/apricot.jpg", import.meta.url).href,
        },
        {
          id: 5,
          title: "Organic grapes",
          value: "5",
          price: "2.99 $",
          img: new URL("@/assets/images/graps.jpeg", import.meta.url).href,
        },
        {
          id: 6,
          title: "Organic apple",
          value: "4.5",
          price: "3.45 $",
          img: new URL("@/assets/images/apple.avif", import.meta.url).href,
        },
      ],
      secondProducts: [
        {
          id: 1,
          title: "Organic orange",
          value: "4.5",
          price: "3.12 $",
          img: new URL("@/assets/images/orange.jpg", import.meta.url).href,
        },
        {
          id: 2,
          title: "Organic berries",
          value: "4",
          price: "4.15 $",
          img: new URL("@/assets/images/berries.webp", import.meta.url).href,
        },
        {
          id: 3,
          title: "Organic banaba",
          value: "5",
          price: "2.19 $",
          img: new URL("@/assets/images/Banana.jpg", import.meta.url).href,
        },
        {
          id: 4,
          title: "Organic apricot",
          value: "3.5",
          price: "6.44 $",
          img: new URL("@/assets/images/apricot.jpg", import.meta.url).href,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.best-saller {
  padding: {
    top: 100px;
    bottom: 100px;
  }
  .title {
    margin-bottom: 40px;
    h2 {
      font-size: 60px;
      color: var(--bs-dark);
      font-weight: 700;
    }
    p {
      width: 700px;
      max-width: 100%;
      color: var(--bs-gray);
      margin: 0 auto;
    }
  }
  .v-row.first {
    .first-products {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      width: 100%;
      background-color: var(--bs-light);
      padding: 20px;
      border-radius: 10px;
      .image {
        img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
        }
      }
    }
  }
  .v-row.last {
    .second-products {
      width: 100%;
      img {
        width: 100%;
        max-width: 100%;
        height: 200px;
        border-radius: 10px;
      }
    }
  }
  .info {
    h3 {
      color: var(--bs-dark);
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: bold;
      color: var(--bs-dark);
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 960px) {
  .best-saller {
    .title {
      h2 {
        font-size: 50px;
      }
      p {
        width: 600px;
      }
    }
    .v-row.first {
      .first-products {
        justify-content: center;
        width: 80%;
        margin: 0 auto;
        .image {
          img {
            width: 300px;
            height: 300px;
          }
        }
      }
    }
    .v-row.last {
      .second-products {
        width: 80%;
        margin: 0 auto;
        img {
          width: 400px;
          height: 300px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .best-saller {
    .title {
      h2 {
        font-size: 40px;
      }
      p {
        width: 5600px;
      }
    }
    .v-row.first {
      .first-products {
        width: 70%;
        .image {
          img {
            width: 140px;
            height: 140px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .best-saller {
    .title {
      h2 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      p {
        width: 100%;
      }
    }
    .v-row.first {
      .first-products {
        width: 100%;
        .image {
          img {
            width: 120px;
            height: 120px;
          }
        }
      }
    }
    .v-row.last {
      .second-products {
        width: 100%;
        img {
          width: 100%;
          height: 300px;
        }
      }
    }
  }
}
</style>
