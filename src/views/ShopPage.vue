<template>
  <div class="shop-page">
    <PagesHeading title="Shop" />
    <v-container fluid>
      <div class="title">
        <h2>Fresh fruits shop</h2>
        <div class="search">
          <input type="search" placeholder="Keywords" />
          <button><v-icon>mdi-magnify</v-icon></button>
        </div>
      </div>
      <div class="options">
        <form action="">
          <label for="fruit"> Default Sorting: </label>
          <select name="fruit" id="fruit">
            <option value="Nothing">Nothing</option>
            <option value="Popularity">Popularity</option>
            <option value="Organic">Organic</option>
            <option value="Fantastic">Fantastic</option>
          </select>
        </form>
      </div>
      <div class="content">
        <ShopProducts />
        <div class="products">
          <div class="products-parent">
            <div
              class="products-containers"
              v-for="fruit in fruits"
              :key="fruit.id"
            >
              <v-card elevation="0">
                <div class="fruits-card">
                  <span class="logo">fruits</span>
                  <div class="image">
                    <img :src="fruit.img" alt="" />
                  </div>
                  <div class="info">
                    <h4>{{ fruit.name }}</h4>
                    <p class="desc">{{ fruit.desc }}</p>
                    <div class="add">
                      <span class="price">{{ fruit.price }}</span>
                      <a href="#">
                        <v-icon>mdi-shopping</v-icon>
                        <span>Add to cart</span>
                      </a>
                    </div>
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import PagesHeading from "@/components/global/PagesHeading.vue";
import ShopProducts from "@/components/global/ShopProducts.vue";

export default {
  data() {
    return {
      amount: 1,
      categories: [
        {
          id: 1,
          fruitsName: "Apple",
          sellNum: 3,
        },
        {
          id: 2,
          fruitsName: "Orange",
          sellNum: 5,
        },
        {
          id: 3,
          fruitsName: "Strawbery",
          sellNum: 0,
        },
        {
          id: 4,
          fruitsName: "Banana",
          sellNum: 8,
        },
        {
          id: 5,
          fruitsName: "Pumpikn",
          sellNum: 5,
        },
      ],
      featuredProducts: [
        {
          id: 1,
          img: new URL("@/assets/images/apple.avif", import.meta.url).href,
          name: "Big Apple",
          rate: "4",
          price: "2.99$",
          discount: "4.11$",
        },
        {
          id: 2,
          img: new URL("@/assets/images/strawbery.jpg", import.meta.url).href,
          name: "Big Strawbery",
          rate: "4.5",
          price: "2.77$",
          discount: "4.5$",
        },
        {
          id: 3,
          img: new URL("@/assets/images/broccoli.jpg", import.meta.url).href,
          name: "Big Broccoli",
          rate: "5",
          price: "2.88$",
          discount: "4.13$",
        },
      ],
      fruits: [
        {
          id: 1,
          img: new URL("@/assets/images/apple.avif", import.meta.url).href,
          name: "Apple",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$4.99 / kg",
        },
        {
          id: 2,
          img: new URL("@/assets/images/graps.jpeg", import.meta.url).href,
          name: "Graps",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$4.55 / kg",
        },
        {
          id: 3,
          img: new URL("@/assets/images/strawbery.jpg", import.meta.url).href,
          name: "Strewbery",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$3.99 / kg",
        },
        {
          id: 4,
          img: new URL("@/assets/images/apricot.jpg", import.meta.url).href,
          name: "Apricot",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$3.89/ kg",
        },
        {
          id: 5,
          img: new URL("@/assets/images/Banana.jpg", import.meta.url).href,
          name: "Banana",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$5.99 / kg",
        },
        {
          id: 6,
          img: new URL("@/assets/images/orange.jpg", import.meta.url).href,
          name: "Orange",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$5.50 / kg",
        },
        {
          id: 7,
          img: new URL("@/assets/images/berries.webp", import.meta.url).href,
          name: "Berries",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$4.30 / kg",
        },
        {
          id: 8,
          img: new URL("@/assets/images/mango.webp", import.meta.url).href,
          name: "Mango",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$6.99 / kg",
        },
        {
          id: 9,
          img: new URL("@/assets/images/blueberry.jfif", import.meta.url).href,
          name: "Blueberry",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: "$4.99 / kg",
        },
      ],
    };
  },
  components: {
    PagesHeading,
    ShopProducts,
  },
};
</script>

<style lang="scss" scoped>
.shop-page {
  .title {
    margin-top: 80px;
    margin-bottom: 30px;
    text-align: left;
    h2 {
      color: var(--bs-dark);
      font-size: 40px;
      font-weight: 500;
    }
    .search {
      position: relative;
      display: flex;
      align-items: center;
      width: 300px;
      input[type="search"] {
        flex: 1;
        height: 50px;
        padding-left: 15px;
        border: 1px solid var(--bs-gray);
        border-radius: 10px 0 0 10px;
      }
      button {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bs-light);
        border: 1px solid;
        border-color: var(--bs-gray) var(--bs-gray) var(--bs-gray) transparent;
        border-radius: 0 10px 10px 0;
        .v-icon {
          color: var(--bs-gray);
        }
      }
    }
  }
  .options {
    background-color: var(--bs-light);
    border-radius: 10px;
    padding: 20px;
    width: fit-content;
    margin-left: auto;
    margin-bottom: 20px;
    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .content {
    display: flex;
    gap: 20px;
    .products {
      flex: 1;
      .products-parent {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        .products-containers {
          .v-card {
            overflow: hidden;
            position: relative;
            border-radius: 15px;
            transition: 0.3s;
            &:hover {
              box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.6) !important;
            }
            .fruits-card {
              position: relative;
              height: 100%;
              width: 100%;
              .logo {
                position: absolute;
                top: 15px;
                left: 15px;
                z-index: 3;
                font-size: 18px;
                padding: 3px 14px;
                border-radius: 8px;
                color: var(--bs-white);
                background-color: var(--bs-secondary);
              }
              .image {
                width: 100%;
                height: 180px;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                  transition: 0.3s;
                  &:hover {
                    scale: 1.2;
                  }
                }
              }
              .info {
                width: 100%;
                padding: 15px 20px;
                border: 1px solid var(--bs-secondary);
                border-radius: 0 0 14px 14px;
                h4 {
                  text-align: left;
                  font-size: 25px;
                  color: var(--bs-dark);
                  font-weight: normal;
                }
                .desc {
                  color: var(--bs-gray);
                  text-align: left;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  font-size: 18px;
                  line-height: 1.5;
                }
                .add {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  a {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    width: fit-content;
                    color: var(--bs-primary);
                    cursor: pointer;
                    border: 2px solid var(--bs-secondary);
                    padding: 8px 15px;
                    border-radius: 30px;
                    transition: 0.3s;
                    &:hover {
                      background-color: var(--bs-secondary);
                      color: var(--bs-white);
                    }
                  }
                  .price {
                    color: var(--bs-dark);
                    font-size: 18px;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .shop-page {
    width: 80%;
    margin: {
      left: auto;
      right: auto;
    }
    .title {
      .search {
        width: 100%;
      }
    }
    .options {
      margin: 20px auto;
      width: 100%;
    }
    .content {
      flex-direction: column;
      justify-content: center;
    }
  }
}
@media (max-width: 767px) {
  .shop-page {
    width: 590px;
    margin: 0 auto;
    .content {
      .products {
        .products-parent {
          grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
          .products-containers {
            .v-card {
              .fruits-card {
                .image {
                  height: 400px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .shop-page {
    width: 100%;
    .content {
      .products {
        .products-parent {
          .products-containers {
            .v-card {
              .fruits-card {
                .image {
                  height: 200px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
