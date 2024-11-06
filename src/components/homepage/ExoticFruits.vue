<template>
  <div class="exotic-fruits">
    <v-container fluid>
      <div class="content">
        <div class="store">
          <h2>Fresh Exotic Fruits</h2>
          <p class="our-store">in Our Store</p>
          <p class="desc">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <a href="#">Buy</a>
        </div>
        <div class="image">
          <p><span>1</span><sup>50$</sup><sub>kg</sub></p>
          <img src="@/assets/images/backage-apple.png" alt="" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
.exotic-fruits {
  height: 600px;
  background-color: var(--bs-secondary);
  .v-container {
    height: 100%;
    .content {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .store,
      .image {
        flex: 1;
      }
      .store {
        text-align: left;
        h2 {
          font-size: 60px;
          font-weight: 900;
          color: var(--bs-white);
          line-height: 1.2;
        }
        .our-store {
          font-size: 70px;
          color: var(--bs-gray);
          margin-bottom: 0;
        }
        .desc {
          margin-bottom: 20px;
          margin-top: 20px;
          color: var(--bs-dark);
          font-size: 18px;
        }
        a {
          display: block;
          color: var(--bs-dark);
          font-size: 18px;
          border: 2px solid var(--bs-white);
          width: fit-content;
          padding: 15px 50px;
          border-radius: 40px;
          transition: 0.3s;
          &:hover {
            background-color: var(--bs-primary);
          }
        }
      }
      .image {
        position: relative;
        p {
          position: absolute;
          background-color: var(--bs-white);
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 80px;
          border-radius: 50%;
          font-weight: 900;
          color: var(--bs-dark);
          top: 0;
          left: 90px;
          sub,
          sup {
            font-weight: normal;
            font-size: 30px;
          }
          sup {
            font-weight: 600;
          }
          sub {
            position: absolute;
            top: 60%;
            left: 50%;
            color: var(--bs-gray);
          }
        }
        img {
          width: 400px;
          height: 400px;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .exotic-fruits {
    height: 100vh;
    padding: 50px 100px 100px;
    .v-container {
      .content {
        flex-direction: column;
        .store {
          h2 {
            font-size: 50px;
          }
          .our-store {
            font-size: 60px;
          }
        }
        .image {
          p {
            left: 30px;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .exotic-fruits {
    .v-container {
      .content {
        flex-direction: column;
        gap: 50px;
        .store {
          .our-store {
            font-size: 50px;
          }
        }
        .image {
          p {
            left: 30px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .exotic-fruits {
    padding: 50px 0;
    .v-container {
      .content {
        flex-direction: column;
        gap: 50px;
        .store {
          h2 {
            font-size: 35px;
          }
          .our-store {
            font-size: 40px;
          }
          .desc {
            font-size: 16px;
          }
        }
        .image {
          p {
            left: 30px;
          }
        }
      }
    }
  }
}
</style>
