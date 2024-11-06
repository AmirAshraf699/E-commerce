<template>
  <div class="home-products">
    <v-container fluid>
      <h2 class="product-title">Our Organic Products</h2>
      <ul class="buttons">
        <li>
          <v-btn
            @click="fruitsName = 'all'"
            style="text-transform: inherit; font-weight: bold"
            rounded="xl"
            >All Products</v-btn
          >
        </li>
        <li>
          <v-btn
            @click="fruitsName = 'fruits'"
            style="text-transform: inherit; font-weight: bold"
            rounded="xl"
            >Fruits</v-btn
          >
        </li>
        <li>
          <v-btn
            @click="fruitsName = 'vegetables'"
            style="text-transform: inherit; font-weight: bold"
            rounded="xl"
            >Vegetables</v-btn
          >
        </li>
        <li>
          <v-btn
            @click="fruitsName = 'herbs'"
            style="text-transform: inherit; font-weight: bold"
            rounded="xl"
            >Herbs</v-btn
          >
        </li>
      </ul>
      <div class="content">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'fruits'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/mango.webp"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Mango</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'fruits'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/orange.jpg"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Orange</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'fruits'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/Banana.jpg"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Banana</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'vegetables'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/Botatos.webp"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Botatos</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'vegetables'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
                v-if="fruitsName == 'all' || fruitsName == 'vegetables'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/cucumber.webp"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Cucumber</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'vegetables'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/tomato.avif"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Tomatos</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'herbs'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/mint.jpg"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Mint</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            xxl="3"
            v-if="fruitsName == 'all' || fruitsName == 'herbs'"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="position-relative"
                v-bind="props"
                :elevation="isHovering ? '15' : '0'"
              >
                <div class="image">
                  <span>fruits</span>
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      src="@/assets/images/thyme.webp"
                      v-bind="props"
                      :style="isHovering ? 'scale: 1.2' : 'scale: 1'"
                      style="transition: 0.3s"
                      width="100%"
                      height="200px"
                      alt="Mango"
                    />
                  </v-hover>
                </div>
                <div class="info">
                  <v-card-title>Thyme</v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia reiciendis tenetur.
                  </v-card-text>
                  <div class="price">
                    <span class="money">$4.99 / kg</span>
                    <AddButton />
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
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
      fruitsName: "all",
    };
  },
  mounted() {
    this.fruitsName = "all";
  },
};
</script>

<style lang="scss">
.home-products {
  .product-title {
    font-size: 40px;
    margin-bottom: 30px;
    color: var(--bs-gray);
    font-weight: 500;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    gap: 20px;
    flex-wrap: wrap;
  }
  .content {
    .v-row {
      .v-col-12 {
        .v-card {
          border-radius: 15px;
          overflow: hidden;
          .image {
            width: 100%;
            height: 200px;
            overflow: hidden;
            position: relative;
            span {
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
          }
          .info {
            width: 100%;
            border: 1px solid;
            border-color: transparent var(--bs-secondary) var(--bs-secondary)
              var(--bs-secondary);
            border-radius: 0 0 16px 16px;
            .v-card-title {
              color: var(--bs-dark);
              font-size: 25px;
              margin-top: 15px;
            }
            .v-card-text {
              color: var(--bs-gray);
              font-size: 18px;
            }
            .price {
              display: flex;
              justify-content: space-around;
              align-items: center;
              margin-bottom: 15px;
              span {
                display: block;
              }
              .money {
                color: var(--bs-dark);
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
