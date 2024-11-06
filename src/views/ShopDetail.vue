<template>
  <div class="shop-details">
    <PagesHeading title="Shop Details" />
    <v-container fluid>
      <div class="content">
        <div class="details">
          <div class="broccoli">
            <div class="image">
              <img src="@/assets/images/broccoli-item.jpg" alt="" />
            </div>
            <div class="info">
              <h3>Brocoli</h3>
              <p class="cate">Category: Vegetables</p>
              <p class="price">3,35 $</p>
              <v-rating
                model-value="4"
                half-increments
                size="18"
                color="var(--bs-dark)"
                active-color="var(--bs-primary)"
              ></v-rating>
              <div class="desc">
                <p class="top">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc
                </p>
                <p class="bottom">
                  Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                  peacock flounder; chain pickerel hatchetfish, pencilfish
                  snailfish
                </p>
              </div>
              <div class="count-holder">
                <button class="minus" @click="decreaseCount">
                  <v-icon>mdi-minus</v-icon>
                </button>
                <span class="count">{{ count }}</span>
                <button class="plus" @click="increaseCount">
                  <v-icon>mdi-plus</v-icon>
                </button>
              </div>
              <AddButton />
            </div>
          </div>
          <div class="review-parent">
            <v-container fluid>
              <div class="buttons">
                <button class="desc" @click="this.show = 'description'">
                  Description
                </button>
                <button class="rev" @click="this.show = 'reviews'">
                  Reviews
                </button>
              </div>
              <div class="review-content">
                <div class="description" v-if="this.show == 'description'">
                  <p class="one">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                    Susp endisse ultricies nisi vel quam suscipit
                  </p>
                  <p class="two">
                    Sabertooth peacock flounder; chain pickerel hatchetfish,
                    pencilfish snailfish filefish Antarctic icefish goldeye
                    aholehole trumpetfish pilot fish airbreathing catfish,
                    electric ray sweeper.
                  </p>
                  <table class="product-desc">
                    <tbody>
                      <tr class="light">
                        <td>Weight</td>
                        <td>1 kg</td>
                      </tr>
                      <tr>
                        <td>Country of Origin</td>
                        <td>Agro Farm</td>
                      </tr>
                      <tr class="light">
                        <td>Quality</td>
                        <td>Organic</td>
                      </tr>
                      <tr>
                        <td>Сheck</td>
                        <td>Healthy</td>
                      </tr>
                      <tr class="light">
                        <td>Min Weight</td>
                        <td>250 Kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="reviews" v-else-if="this.show == 'reviews'">
                  <div class="review" v-for="rev in reviews" :key="rev.id">
                    <img :src="rev.img" alt="" />
                    <div class="info">
                      <span class="date">{{ rev.date }}</span>
                      <div class="rate">
                        <h3 class="name">{{ rev.name }}</h3>
                        <v-rating
                          :model-value="rev.rate"
                          color="var(--bs-gray)"
                          active-color="var(--bs-secondary)"
                          size="20"
                          readonly
                        >
                        </v-rating>
                      </div>
                      <p class="comment">{{ rev.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="replay">
                <h3>Leave a Replay</h3>
                <div class="form">
                  <form action="">
                    <div class="top">
                      <div class="name">
                        <input
                          type="text"
                          class="name"
                          name="name"
                          placeholder="Your Name"
                        />
                        <span class="outline"></span>
                      </div>
                      <div class="email">
                        <input
                          type="email"
                          class="email"
                          name="email"
                          placeholder="Your Email"
                        />
                        <span class="outline"></span>
                      </div>
                    </div>
                    <div class="textarea">
                      <textarea
                        name="review"
                        placeholder="your review"
                      ></textarea>
                      <span class="outline"></span>
                    </div>
                    <div class="post">
                      <div class="post-rate">
                        <span>Please rate :</span>
                        <div class="stars">
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                          <v-icon>mdi-star</v-icon>
                        </div>
                      </div>
                      <input
                        type="submit"
                        class="post-comment"
                        value="Post Comment"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </v-container>
          </div>
        </div>
        <ShopProducts />
      </div>
      <RelateProducts />
    </v-container>
  </div>
</template>

<script>
import PagesHeading from "@/components/global/PagesHeading.vue";
import RelateProducts from "@/components/global/RelateProducts.vue";
import ShopProducts from "@/components/global/ShopProducts.vue";
import AddButton from "@/components/global/AddButton.vue";

export default {
  data() {
    return {
      count: 0,
      show: "description",
      reviews: [
        {
          id: 1,
          img: new URL("@/assets/images/avater-1.jpg", import.meta.url).href,
          date: "April 12, 2024",
          name: "Jason Smith",
          comment:
            "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
          rate: 4,
        },
        {
          id: 2,
          img: new URL("@/assets/images/avatar-2.png", import.meta.url).href,
          date: "April 16, 2024",
          name: "Sam Peters",
          comment:
            "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit",
          rate: 3,
        },
      ],
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
      if (this.count < 0) {
        this.count = 0;
      }
    },
  },
  components: {
    PagesHeading,
    ShopProducts,
    RelateProducts,
    AddButton,
  },
};
</script>

<style lang="scss" scoped>
.shop-details {
  padding-bottom: 100px;
  .content {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    gap: 20px;
    .details {
      flex: 1;
      .broccoli {
        display: flex;
        gap: 20px;
        .image {
          img {
            width: 700px;
            max-width: 100%;
            border: 1px solid var(--bs-gray-light);
            border-radius: 20px;
          }
        }
        .info {
          text-align: left;
          h3 {
            font-size: 25px;
            margin-bottom: 0;
            color: var(--bs-dark);
            font-weight: 900;
          }
          .cate {
            margin-top: 15px;
            margin-bottom: 15px;
            color: var(--bs-gray);
            font-size: 18px;
          }
          .price {
            color: var(--bs-dark);
            font-weight: 900;
            font-size: 18px;
            margin-bottom: 10px;
          }
          .desc {
            margin-top: 20px;
            margin-bottom: 20px;
            color: var(--bs-gray);
            .top {
              margin-bottom: 20px;
            }
          }
          .count-holder {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 20px;
            button {
              width: 30px;
              height: 30px;
              background-color: var(--bs-light);
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              border: 1px solid var(--bs-gray-light);
              .v-icon {
                font-size: 25px;
                font-weight: bold;
                color: var(--bs-dark);
              }
            }
          }
        }
      }
      .review-parent {
        padding-top: 100px;
        color: var(--bs-gray);
        .buttons {
          text-align: left;
          margin-bottom: 15px;
          border-bottom: 1px solid var(--bs-gray-light);
          button {
            width: 120px;
            color: var(--bs-primary);
            height: 50px;
            transition: 0.3s;
            &:hover {
              color: var(--bs-green);
            }
          }
        }
        p {
          text-align: left;
          margin-bottom: 20px;
        }
        table {
          border-collapse: collapse;
          tr {
            &.light {
              background-color: var(--bs-light);
            }
            td {
              width: 200px;
              height: 40px;
            }
          }
        }
        .reviews {
          .review {
            display: flex;
            align-items: center;
            gap: 20px;
            &:not(:last-of-type) {
              margin-bottom: 20px;
            }
            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
            }
            .info {
              flex: 1;
              text-align: left;
              .date {
                font-size: 14px;
                color: var(--bs-gray);
              }
              .rate {
                display: flex;
                align-items: center;
                justify-content: space-between;
                h3 {
                  font-weight: 500;
                  font-size: 25px;
                  color: var(--bs-gray-dark);
                }
              }
            }
          }
        }
        .replay {
          margin-top: 50px;
          text-align: left;
          h3 {
            font-size: 25px;
            color: var(--bs-dark);
            font-weight: 800;
            margin-bottom: 20px;
          }
          .form {
            width: 100%;
            form {
              .top {
                display: flex;
                gap: 20px;
                align-items: center;
                div {
                  flex: 1;
                  position: relative;
                  input {
                    width: 100%;
                    padding: 5px 10px;
                    border-bottom: 1px solid var(--bs-gray-light);
                    border-radius: 10px;
                    &:focus {
                      outline: none;
                    }
                    &:focus + span {
                      outline-color: var(--bs-primary);
                    }
                  }
                }
              }
              .textarea {
                position: relative;
                width: 100%;
                height: 300px;
                margin-top: 20px;
                textarea {
                  width: 100%;
                  height: 100%;
                  padding: 5px 10px;
                  border-bottom: 1px solid var(--bs-gray-light);
                  resize: none;
                  &:focus {
                    outline: none;
                  }
                  &:focus + span {
                    outline-color: var(--bs-primary);
                  }
                }
              }
              .post {
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .post-rate {
                  display: flex;
                  align-items: center;
                  span {
                    font-size: 18px;
                  }
                  .stars {
                    font-size: 12px;
                    margin-left: 10px;
                  }
                }
                .post-comment {
                  color: var(--bs-primary);
                  cursor: pointer;
                  border: 2px solid var(--bs-secondary);
                  padding: 15px 25px;
                  border-radius: 30px;
                  transition: 0.3s;
                  font-weight: bold;
                  &:hover {
                    background-color: var(--bs-secondary);
                    color: var(--bs-white);
                  }
                }
              }
              .outline {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                outline-width: 4px;
                outline-style: solid;
                outline-color: transparent;
                border-radius: 10px;
                z-index: -1;
                transition: 0.3s;
                opacity: 0.5;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .shop-details {
    .content {
      flex-direction: column;
      width: 80%;
      gap: 50px;
      margin-left: auto;
      margin-right: auto;
      .details {
        .broccoli {
          flex-direction: column;
          .image {
            img {
              width: 100%;
            }
          }
          .info {
            .count-holder {
              margin-bottom: 30px;
            }
          }
        }
        .review-parent {
          .replay {
            .form {
              form {
                .top {
                  flex-direction: column;
                  align-items: center;
                  div {
                    width: 100%;
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

@media (max-width: 767px) {
  .shop-details {
    .content {
      width: 90%;
    }
  }
}
@media (max-width: 600px) {
  .shop-details {
    .content {
      width: 100%;
    }
  }
}
</style>
