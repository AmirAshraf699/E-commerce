<template>
  <div class="cart">
    <v-container fluid>
      <PagesHeading title="Cart" />
      <div class="cart-content">
        <div class="table">
          <table class="cart-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cartItem in cartProducts" :key="cartItem.id">
                <td class="image">
                  <img :src="cartItem.img" alt="" width="100px" />
                </td>
                <td>{{ cartItem.name }}</td>
                <td>{{ cartItem.price }}</td>
                <td class="button">
                  <button
                    class="count"
                    @click="
                      cartItem.count > 0
                        ? cartItem.count--
                        : cartItem.count == 0
                    "
                  >
                    <v-icon>mdi-minus</v-icon>
                  </button>
                  <span>{{ cartItem.count }}</span>
                  <button class="count" @click="cartItem.count++">
                    <v-icon>mdi-plus</v-icon>
                  </button>
                </td>
                <td>{{ cartItem.price * cartItem.count }}$</td>
                <td class="end">
                  <button class="close">
                    <v-icon>mdi-close</v-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="coupon">
          <form action="">
            <input
              type="text"
              class="coupon-input"
              name="coupon"
              placeholder="Coupon Code"
            />
            <input
              type="submit"
              value="Apply Coupon"
              class="coupon-button"
              @submit.stop.prevent
            />
          </form>
        </div>
        <div class="cart-total">
          <h3>Cart Total</h3>
          <div class="cart-info">
            <div class="subtotal">
              <span class="title">Subtotal:</span>
              <span class="desc">$96.00</span>
            </div>
            <div class="shipping">
              <span class="title">Shipping:</span>
              <span class="desc">$3.00</span>
            </div>
            <div class="total">
              <span class="title">Total:</span>
              <span class="desc">$99.00</span>
            </div>
            <div class="link">
              <a href="#" class="checkout">proceed checkout</a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import PagesHeading from "@/components/global/PagesHeading.vue";

export default {
  data() {
    return {
      cartProducts: [
        {
          id: 1,
          img: new URL("@/assets/images/Banana.jpg", import.meta.url).href,
          name: "Banana",
          price: 2.99,
          count: 1,
        },
        {
          id: 2,
          img: new URL("@/assets/images/Botatos.webp", import.meta.url).href,
          name: "Botatos",
          price: 2.88,
          count: 1,
        },
        {
          id: 3,
          img: new URL("@/assets/images//broccoli.jpg", import.meta.url).href,
          name: "Brocoli",
          price: 2.77,
          count: 1,
        },
      ],
    };
  },
  components: {
    PagesHeading,
  },
};
</script>

<style lang="scss" scoped>
.cart {
  .cart-content {
    padding-top: 100px;
    padding-bottom: 100px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    .table {
      text-align: left;
      .cart-table {
        width: 100%;
        border-collapse: collapse;
        td,
        th {
          padding: 20px 10px;
        }
        thead {
          border-bottom: 1px solid var(--bs-dark);
          th {
            color: var(--bs-gray);
          }
        }
        tbody {
          tr {
            border-bottom: 1px solid var(--bs-gray-light);
            td {
              color: var(--bs-gray-dark);
              &.image {
                img {
                  width: 70px;
                  height: 70px;
                  border-radius: 50%;
                }
              }
              &.button {
                span {
                  display: inline-block;
                  transform: translateY(-3px);
                }
                button.count:first-of-type {
                  margin-right: 20px;
                }
                button.count:last-of-type {
                  margin-left: 20px;
                }
              }
              &.end {
                button.close {
                  color: var(--bs-red);
                }
              }
              button.count,
              button.close {
                width: 30px;
                height: 30px;
                background-color: var(--bs-gray-light);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                .v-icon {
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  .coupon {
    width: 90%;
    form {
      width: 100%;
      margin: 50px auto;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 20px;
      max-width: 100%;
      .coupon-input {
        padding: 20px 10px;
        border-bottom: 1px solid var(--bs-gray-light);
        border-radius: 8px;
        &:focus {
          outline: none;
        }
      }
      .coupon-button {
        color: var(--bs-primary);
        cursor: pointer;
        border: 2px solid var(--bs-secondary);
        padding: 15px 20px;
        border-radius: 30px;
        transition: 0.3s;
        &:hover {
          background-color: var(--bs-secondary);
          color: var(--bs-white);
        }
      }
    }
  }
  .cart-total {
    width: 350px;
    max-width: 100%;
    margin-left: auto;
    background-color: var(--bs-light);
    padding: {
      top: 20px;
      bottom: 20px;
    }
    border-radius: 10px;
    text-align: left;
    h3 {
      font-size: 40px;
      margin-bottom: 20px;
      color: var(--bs-dark);
      padding: {
        left: 20px;
        right: 20px;
      }
    }
    .cart-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: {
          left: 20px;
          right: 20px;
        }
        &.total {
          padding: {
            top: 20px;
            bottom: 20px;
          }
          border: 1px solid;
          border-color: var(--bs-gray-light) transparent;
        }
        .title {
          font-size: 20px;
          color: var(--bs-dark);
          font-weight: 600;
        }
        .desc {
          font-size: 18px;
          color: var(--bs-gray-dark);
        }
      }
      .link {
        a {
          text-transform: uppercase;
          color: var(--bs-primary);
          border: 2px solid var(--bs-secondary);
          padding: 15px 20px;
          border-radius: 30px;
          transition: 0.3s;
          font-size: 15px;
          font-weight: bold;
          &:hover {
            background-color: var(--bs-secondary);
            color: var(--bs-white);
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .cart {
    .cart-content {
      .table {
        width: 100%;
        overflow-x: scroll;
        .cart-table {
          min-width: 700px;
        }
      }
    }
    .coupon {
      width: 100%;
      form {
        .coupon-input {
          padding: 15px 5px;
        }
        .coupon-button {
          padding: 10px 15px;
        }
      }
    }
  }
}
</style>
