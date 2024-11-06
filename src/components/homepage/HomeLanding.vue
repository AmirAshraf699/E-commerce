<template>
  <div class="home-landing" id="home-landing">
    <v-container fluid>
      <div class="content">
        <div class="title">
          <p class="organic">100% Organic Foods</p>
          <h1>Organic Veggies & Fruits Foods</h1>
          <form action="">
            <input type="search" name="search" placeholder="Search" />
            <input type="submit" value="Submit Now" @submit="prevent" />
          </form>
        </div>
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :navigation="{
            prevIcon: '.swiper-prev',
            nextIcon: '.swiper-next',
          }"
          :autoplay="{ delay: 3000 }"
        >
          <swiper-slide>
            <img src="@/assets/images/fruits.webp" alt="" />
            <a href="#">Fruits</a>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/vegetables.webp" alt="" />
            <a href="#">Vegetables</a>
          </swiper-slide>
          <div class="swiper-prev"></div>
          <div class="swiper-next"></div>
        </Swiper>
      </div>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.home-landing {
  height: 500px;
  background-image: linear-gradient(
      rgba(248, 223, 173, 0.1),
      rgba(248, 223, 173, 0.1)
    ),
    url("@/assets/images/main-bg.jpg");
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  position: relative;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      text-align: left;
      width: 700px;
      max-width: 100%;
      .organic {
        color: var(--bs-secondary);
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 0;
      }
      h1 {
        font-size: 55px;
        color: var(--bs-primary);
        line-height: 1.4;
        font-weight: 900;
        margin: {
          top: 20px;
          bottom: 30px;
        }
      }
      form {
        width: 450px;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;
      }
      input[type="submit"] {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        background-color: var(--bs-primary);
        color: white;
        padding: 15px;
        border-radius: 30px;
        border: 2px solid var(--bs-secondary);
        font-weight: 600;
        transition: 0.3s;
        &:hover {
          background-color: var(--bs-secondary);
        }
      }
      input[type="search"] {
        border-radius: 30px;
        display: block;
        padding: 15px;
        background-color: white;
        color: var(--bs-primary);
        width: 100%;
        border: 2px solid var(--bs-secondary);
        caret-color: var(--bs-secondary);
        &:focus {
          outline: none;
        }
      }
    }
    .swiper {
      position: relative;
      width: 450px;
      max-width: 100%;
      .swiper-wrapper {
        width: 100%;
        .swiper-slide {
          position: relative;
          overflow: hidden;
          img {
            width: 100%;
            height: 300px;
            border-radius: 15px;
          }
          a {
            position: absolute;
            text-decoration: none;
            color: white;
            font-size: 25px;
            z-index: 20;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255, 182, 36, 0.7);
            padding: 5px 25px;
            font-weight: bold;
            border-radius: 12px;
          }
        }
      }
      .swiper-button-next,
      .swiper-button-prev {
        position: absolute;
        width: 50px;
        height: 50px;
        border: 2px solid var(--bs-light);
        background-color: var(--bs-primary);
        border-radius: 50%;
        top: 50%;
        z-index: 5;
        &::after {
          position: absolute;
          font-size: 20px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--bs-light);
        }
      }
      .swiper-button-next {
        right: 10px;
      }
      .swiper-button-prev {
        left: 10px;
      }
    }
  }
}

@media (max-width: 991px) {
  .home-landing {
    height: 100vh;
    .content {
      gap: 50px;
      flex-direction: column;
      justify-content: center;
      .title,
      .swiper {
        width: 70%;
      }
      .title {
        text-align: left;
      }
      .swiper {
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            img {
              width: 100%;
              height: 400px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .home-landing {
    height: calc(100vh - 100px);
    .content {
      .title,
      .swiper {
        width: 80%;
      }
      .title {
        text-align: left;
        h1 {
          font-size: 45px;
        }
        form {
          width: 400px;
        }
      }
      .swiper {
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            img {
              width: 100%;
              height: 300px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .home-landing {
    .content {
      .title,
      .swiper {
        width: 100%;
      }
      .title {
        text-align: left;
        h1 {
          font-size: 35px;
        }
        form {
          width: 100%;
        }
      }
      .swiper {
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            img {
              width: 100%;
              height: 250px;
            }
          }
        }
      }
    }
  }
}
</style>
