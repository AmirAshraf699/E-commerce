<template>
  <div class="parent-nav" id="parent-nav" @click="navFixed">
    <div class="top" id="nav-top">
      <div class="city">
        <span><v-icon>mdi-map-marker</v-icon>123 Street, New York</span>
        <span><v-icon>mdi-email</v-icon>Email@Example.com</span>
      </div>
      <div class="privacy">
        <a href="#">Privacy Policy</a> / <a href="#">Terms of Use</a> /
        <a href="#">Sales and Refunds</a>
      </div>
    </div>
    <v-container fluid>
      <div class="main-nav">
        <div class="title">
          <router-link to="/">Fruitable</router-link>
        </div>
        <nav id="navbar">
          <router-link v-for="link in links" :key="link.id" :to="link.path">{{
            link.name
          }}</router-link>
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
        <v-list style="width: 1000px; max-width: 100%">
          <v-list-item v-for="link in links" :key="link.id">
            <router-link :to="link.path">{{ link.name }}</router-link>
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

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          path: "/",
          name: "Home",
        },
        {
          id: 2,
          path: "/shop-page",
          name: "Shop",
        },
        {
          id: 3,
          path: "/shop-details",
          name: "Shop Details",
        },
        {
          id: 4,
          path: "/cart-page",
          name: "Cart",
        },
        {
          id: 5,
          path: "/checkout-page",
          name: "Checkout",
        },
        {
          id: 6,
          path: "/testimonials-page",
          name: "Testimonials",
        },
        {
          id: 7,
          path: "/contact-us",
          name: "Contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.parent-nav {
  transition: 0.3s;
  background-color: white;
  z-index: 1000;
  position: relative;
  box-shadow: 0 1px 5px var(--bs-primary);
  width: 100%;
  transition: 0.3s;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(-60px);
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bs-primary);
    margin: {
      right: 50px;
      left: 50px;
    }
    padding: 15px 30px;
    border-radius: 40px 15px 40px 15px;
    color: var(--bs-light);
    transition: 0.3s;
    .city span,
    .privacy a {
      letter-spacing: 1.7px;
      font-size: 13px;
      color: var(--bs-light);
    }
    .city {
      span {
        display: inline-block;
        margin-right: 20px;
        .v-icon {
          margin-right: 10px;
          color: var(--bs-secondary);
        }
      }
    }
    .privacy a {
      transition: 0.3s;
      &:hover {
        color: var(--bs-secondary);
      }
    }
  }
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
    &.fixed {
      transform: translateY(0);
    }
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
