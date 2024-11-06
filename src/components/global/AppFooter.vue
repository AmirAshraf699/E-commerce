<template>
  <div class="footer">
    <v-container fluid>
      <div class="top">
        <div class="title">
          <h2>Fruitables</h2>
          <p>Fresh products</p>
        </div>
        <div class="email-parent">
          <form action="">
            <input
              class="email"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              class="sub"
              type="submit"
              value="Subscribe Now"
              @submit.prevent
            />
          </form>
        </div>
        <div class="icons">
          <ul>
            <li>
              <a href="#"><v-icon>mdi-twitter</v-icon></a>
            </li>
            <li>
              <a href="#"><v-icon>mdi-facebook</v-icon></a>
            </li>
            <li>
              <a href="#"><v-icon>mdi-youtube</v-icon></a>
            </li>
            <li>
              <a href="#"><v-icon>mdi-linkedin</v-icon></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="info">
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="people">
              <h3 class="info-title">Why People Like Us!</h3>
              <p class="desc">
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the like Aldus PageMaker including of Lorem
                Ipsum.
              </p>
              <a href="#" class="read">Read More</a>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="links-parent">
              <h3 class="info-title">Shop Info</h3>
              <ul class="links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">FAQs & Help</a></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="links-parent">
              <h3 class="info-title">Account</h3>
              <ul class="links">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Shop details</a></li>
                <li><a href="#">Shopping Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">International Orders</a></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="3" xl="3" xxl="3">
            <div class="address">
              <h3 class="info-title">Contact</h3>
              <p class="desc">
                Address: 1429 Netus Rd, NY 48247
                <br />
                Email: Example@gmail.com
                <br />
                Phone: +0123 4567 8910
                <br />
                Payment Accepted
              </p>
              <div class="payment">
                <img src="../../assets/images/visa.png" alt="" />
                <img src="../../assets/images/mastercard.png" alt="" />
                <img src="../../assets/images/maestro.png" alt="" />
                <img src="../../assets/images/paypal.webp" alt="" />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="copyright">
        <p class="left">
          <v-icon>mdi-copyright</v-icon> <span>Your sitename</span>, All right
          reserved.
        </p>
        <p class="right">
          Designed By <span>HTML Codex</span>Distributed By
          <span>ThemeWagon.</span>
        </p>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 60px;
  background-color: var(--bs-dark);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--bs-secondary);
    .title {
      text-align: left;
      h2 {
        color: var(--bs-primary);
        font-size: 40px;
        font-weight: normal;
      }
      p {
        color: var(--bs-secondary);
      }
    }
    .email-parent {
      position: relative;
      width: 500px;
      form {
        width: 100%;
        .email {
          background-color: var(--bs-white);
          width: 100%;
          padding: 15px 20px;
          border-radius: 30px;
          transition: 0.3s;
          &:focus {
            outline-color: var(--bs-primary);
          }
        }
        .sub {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          padding: 15px 20px;
          background-color: var(--bs-primary);
          color: white;
          border-radius: 30px;
          transition: 0.3s;
          font-weight: 500;
          &:hover {
            background-color: var(--bs-secondary);
          }
        }
      }
    }
    .icons {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        li {
          a {
            color: var(--bs-secondary);
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 1px solid var(--bs-secondary);
          }
        }
      }
    }
  }
  .info {
    margin-top: 30px;
    text-align: left;
    h3.info-title {
      color: var(--bs-white);
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: 500;
    }
    .desc {
      color: var(--bs-gray-light);
      line-height: 2;
      margin-bottom: 20px;
      font-size: 17px;
    }
    .people {
      a {
        border: 1px solid var(--bs-secondary);
        padding: 10px 15px;
        color: var(--bs-primary);
        font-weight: bold;
        display: inline-block;
        border-radius: 30px;
      }
      .desc {
        width: 80%;
      }
    }
    .links-parent {
      ul.links {
        li {
          a {
            display: inline-block;
            color: var(--bs-gray-light);
            margin-bottom: 10px;
            transition: 0.3s;
            font-size: 17px;
            &:hover {
              color: var(--bs-secondary);
            }
          }
        }
      }
    }
    .payment {
      display: flex;
      gap: 20px;
      img {
        height: 30px;
        width: 50px;
        border-radius: 4px;
      }
    }
  }
  .copyright {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    color: var(--bs-white);
    font-size: 18px;
    p {
      span {
        color: var(--bs-primary);
      }
    }
  }
}

@media (max-width: 991px) {
  .top,
  .info,
  .copyright {
    width: 80%;
    margin: 0 auto;
  }
  .top {
    flex-direction: column;
    gap: 40px;
    .title {
      margin-right: auto;
    }
    .email-parent {
      min-width: 100%;
      max-width: 100%;
    }
    .icons {
      margin-left: auto;
    }
  }
}

@media (max-width: 767px) {
  .copyright {
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 16px;
    }
  }
}
</style>
