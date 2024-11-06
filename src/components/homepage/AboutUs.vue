<template>
  <div class="about-us">
    <v-container fluid>
      <div class="content">
        <div class="parent">
          <div class="child" v-for="el in about" :key="el.id">
            <v-icon>mdi-account-group</v-icon>
            <h3>{{ el.title }}</h3>
            <p>{{ el.num }}</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [
        {
          id: 1,
          title: "satisfied customers",
          num: "1963",
        },
        {
          id: 2,
          title: "quality of service",
          num: "99%",
        },
        {
          id: 3,
          title: "quality certificates",
          num: "33",
        },
        {
          id: 4,
          title: "Available Products",
          num: "789",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about-us {
  .content {
    padding: 50px;
    background-color: var(--bs-light);
    .parent {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 30px;
      .child {
        background-color: var(--bs-white);
        border-radius: 10px;
        padding: 25px;
        .v-icon {
          font-size: 80px;
          color: var(--bs-secondary);
        }
        h3 {
          color: var(--bs-primary);
          font-size: 25px;
          font-weight: normal;
          text-transform: uppercase;
          margin: {
            top: 20px;
            bottom: 20px;
          }
        }
        p {
          color: var(--bs-dark);
          font-size: 40px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
