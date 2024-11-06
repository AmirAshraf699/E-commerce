<template>
  <div class="second-nav">
    <v-container fluid>
      <div class="main-nav" id="main-nav">
        <div class="title">
          <router-link to="/">Fruitable</router-link>
        </div>
        <nav id="navbar">
          <router-link to="/">Home</router-link>
          <router-link to="/shop-page">Shop</router-link>
          <router-link to="/shop-details">Shop Details</router-link>
          <router-link to="/cart-page"> Cart </router-link>
          <router-link to="/checkout-page"> Checkout </router-link>
          <router-link to="/testimonials-page"> Testmonials </router-link>
          <router-link to="/contact-us">Contact</router-link>
        </nav>
        <div class="icons">
          <v-icon>mdi-magnify</v-icon>
          <v-icon>mdi-shopping</v-icon>
          <v-icon>mdi-account</v-icon>
        </div>
        <div class="nav-icon" id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <v-menu activator="#nav-icon">
        <v-list>
          <v-list-item>
            <router-link to="/">Home</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/shop-page">Shop</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/shop-details">Shop Details</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/cart-page"> Cart </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/checkout-page"> Checkout </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/testimonials-page"> Testmonials </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/contact-us">Contact</router-link>
          </v-list-item>
          <v-list-item>
            <div class="icons">
              <v-icon>mdi-magnify</v-icon>
              <v-icon>mdi-shopping</v-icon>
              <v-icon>mdi-account</v-icon>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.second-nav {
  background-color: white;
  z-index: 1000;
  position: relative;
  box-shadow: 0 1px 5px var(--bs-primary);
  .main-nav {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      a {
        color: var(--bs-primary);
        font-size: 40px;
        font-weight: 900;
        margin: 0;
        text-decoration: none;
      }
    }
    nav {
      display: flex;
      a {
        padding: 0 10px;
      }
    }
    .icons {
      display: flex;
      gap: 20px;
      .v-icon {
        display: block;
        color: var(--bs-primary);
        font-size: 30px;
      }
    }
    .nav-icon {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      padding: 8px;
      border: 2px solid var(--bs-primary);
      border-radius: 6px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        border-color: var(--bs-secondary);
      }
      span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: var(--bs-primary);
      }
    }
  }
}

@media (max-width: 991px) {
  .parent-nav {
    .top {
      display: none;
    }
    .main-nav {
      .title {
        a {
          font-size: 40px;
          font-weight: 900;
        }
      }
      nav {
        display: none;
      }
      .icons {
        display: none;
      }
      .nav-icon {
        display: flex;
      }
    }
  }
}
</style>
