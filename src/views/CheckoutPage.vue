<template>
  <div class="checkout">
    <PagesHeading title="Checkout" />
    <v-container fluid>
      <div class="checkout-content">
        <div class="billing-details">
          <form action="" class="main-form">
            <div class="first-name">
              <label for="first-name">First Name</label>
              <input type="text" name="first-name" />
            </div>
            <div class="last-name">
              <label for="last-name">Last Name</label>
              <input type="text" name="last-name" />
            </div>
            <div class="address">
              <label for="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="House number Street Name"
              />
            </div>
            <div class="town">
              <label for="town">Town / City</label>
              <input type="text" name="town" />
            </div>
            <div class="country">
              <label for="country">Country</label>
              <input type="text" name="country" />
            </div>
            <div class="postcode">
              <label for="postcode">Postcode</label>
              <input type="text" name="postcode" />
            </div>
            <div class="mobile">
              <label for="mobile">Mobile</label>
              <input type="tel" name="mobile" />
            </div>
            <div class="email">
              <label for="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div class="checkbox">
              <div class="top">
                <input type="checkbox" name="data" />
                <label for="create">Create an account?</label>
              </div>
              <div class="bottom">
                <input type="checkbox" name="data" />
                <label for="ship">Ship to a different adderes?</label>
              </div>
            </div>
            <div class="textarea">
              <textarea name="messaege" placeholder="Order Notes"></textarea>
            </div>
          </form>
        </div>
        <div class="billing-data">
          <div class="checkout-table-holder">
            <table class="checkout-table">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
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
                    <span>{{ cartItem.count }}</span>
                  </td>
                  <td>{{ cartItem.price * cartItem.count }}$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="subtotal">
            <span>Subtotal</span>
            <span class="price">$414.00</span>
          </div>
          <div class="shipping">
            <h3>shipping</h3>
            <form action="" class="shipping-form">
              <div>
                <input type="checkbox" name="total" />
                <label for="create">Free Shipping</label>
              </div>
              <div>
                <input type="checkbox" name="total" />
                <label for="ship">Flat rate: $15.00</label>
              </div>
              <div>
                <input type="checkbox" name="total" />
                <label for="ship">Local Pickup: $8.00</label>
              </div>
            </form>
          </div>
          <div class="total">
            <span>Total</span>
            <span class="price">$135.00</span>
          </div>
          <form action="" class="finish">
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Direct Bank Transfer</label>
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Check Payments</label>
            </div>
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Cash On Delivery</label>
            </div>
            <div>
              <input type="checkbox" name="payment" />
              <label for="create">Paypal</label>
            </div>
            <input type="submit" value="place order" class="finish-submit" />
          </form>
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
          count: 2,
        },
        {
          id: 2,
          img: new URL("@/assets/images/Botatos.webp", import.meta.url).href,
          name: "Botatos",
          price: 2.88,
          count: 2,
        },
        {
          id: 3,
          img: new URL("@/assets/images//broccoli.jpg", import.meta.url).href,
          name: "Brocoli",
          price: 2.77,
          count: 2,
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
.checkout {
  .checkout-content {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    gap: 50px;
    .billing-details {
      flex: 1;
      text-align: left;
      .main-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
          flex-basis: 100%;
          width: 100%;
          margin-bottom: 10px;
          label {
            color: var(--bs-gray);
            font-size: 18px;
            margin-bottom: 10px;
            display: block;
          }
          input {
            border: 1px solid var(--bs-gray-light);
            border-radius: 12px;
            padding: 5px 10px;
            &:not(input[type="checkbox"]) {
              display: block;
              width: 100%;
            }
          }
          &.checkbox {
            label {
              display: inline-block;
              margin-left: 10px;
            }
          }
          &.first-name,
          &.last-name {
            flex-basis: 48%;
          }
          textarea {
            width: 100%;
            border: 1px solid var(--bs-gray-light);
            resize: none;
            border-radius: 12px;
            padding: 5px 10px;
            height: 400px;
          }
        }
      }
    }
    .billing-data {
      width: 500px;
      max-width: 100%;
      .checkout-table-holder {
        .checkout-table {
          text-align: left;
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
              }
            }
          }
        }
      }
      .subtotal,
      .shipping,
      .total {
        border-bottom: 1px solid var(--bs-gray-light);
        padding-bottom: 30px;
        padding-top: 30px;
      }
      .subtotal,
      .shipping,
      .total,
      .finist {
        color: var(--bs-gray);
      }
      .subtotal,
      .total,
      .shipping {
        display: flex;
        justify-content: space-around;
      }
      .subtotal,
      .total {
        .price {
          padding-bottom: 10px;
          padding-top: 10px;
          border-top: 1px solid var(--bs-gray-light);
          border-bottom: 1px solid var(--bs-gray-light);
        }
      }
      .shipping {
        align-items: center;
        .shipping-form {
          text-align: left;
          > div {
            display: flex;
            gap: 10px;
          }
        }
      }
      .finish {
        text-align: left;
        > div {
          border-bottom: 1px solid var(--bs-gray-light);
          padding-bottom: 20px;
          padding-top: 20px;
          input {
            display: inline-block;
            margin-right: 20px;
          }
          label {
            color: var(--bs-gray);
          }
          p {
            margin-top: 20px;
          }
        }
        .finish-submit {
          display: block;
          width: 100%;
          color: var(--bs-primary);
          cursor: pointer;
          border: 2px solid var(--bs-secondary);
          padding: 15px;
          border-radius: 10px;
          transition: 0.3s;
          margin-top: 20px;
          font-size: 16px;
          text-transform: uppercase;
          &:hover {
            background-color: var(--bs-secondary);
            color: var(--bs-white);
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .checkout {
    .checkout-content {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      .billing-details {
        .main-form {
          div {
            &.first-name,
            &.last-name {
              flex-basis: 100%;
            }
          }
        }
      }
    }
    .billing-data {
      min-width: 100%;
    }
  }
}

@media (max-width: 767px) {
  .checkout {
    .checkout-content {
      width: 100%;
    }
  }
}
</style>
