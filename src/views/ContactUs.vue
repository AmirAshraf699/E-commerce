<template>
  <div class="contact">
    <v-container fluid>
      <PagesHeading title="Contact" />
      <div class="contact-content">
        <form action="" class="contact-form">
          <div class="contact-input">
            <input type="text" placeholder="Your Name" name="name" />
          </div>
          <div class="contact-input">
            <input type="email" placeholder="Your Email" name="email" />
          </div>
          <div class="contact-input">
            <textarea placeholder="Your Message" name="message"></textarea>
          </div>
          <div class="contact-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div class="contact-data">
          <div class="address">
            <v-icon>mdi-map-marker</v-icon>
            <div class="info">
              <h3>Address</h3>
              <p>123 Street New York.USA</p>
            </div>
          </div>
          <div class="mail">
            <v-icon>mdi-mail</v-icon>
            <div class="info">
              <h3>Mail Us</h3>
              <p>info@example.com</p>
            </div>
          </div>
          <div class="phone">
            <v-icon>mdi-phone</v-icon>
            <div class="info">
              <h3>Telephone</h3>
              <p>(+012) 3456 7890</p>
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
  components: {
    PagesHeading,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  .contact-content {
    width: 80%;
    margin: 100px auto;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    background-color: var(--bs-gray-light);
    border-radius: 13px;
    .contact-form,
    .contact-data {
      > div {
        background-color: var(--bs-white);
        border-radius: 10px;
        &:not(:last-of-type) {
          margin-bottom: 20px;
        }
      }
    }
    .contact-form {
      flex: 1;
      div {
        position: relative;
        width: 100%;
        input,
        textarea {
          padding: 17px 10px;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          z-index: 2;
          position: relative;
          width: 100%;
        }
        textarea {
          resize: none;
        }
      }
      .contact-submit {
        display: block;
        width: 100%;
        color: var(--bs-primary);
        cursor: pointer;
        border: 2px solid var(--bs-secondary);
        border-radius: 10px;
        transition: 0.3s;
        font-size: 18px;
        text-transform: uppercase;
        &:hover {
          background-color: var(--bs-secondary);
          color: var(--bs-white);
        }
      }
    }
    .contact-data {
      width: 400px;
      > div {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: start;
        .v-icon {
          color: var(--bs-primary);
          font-size: 40px;
        }
        .info {
          flex: 1;
          text-align: left;
          margin-left: 15px;
          h3 {
            font-size: 20px;
            color: var(--bs-dark);
          }
          p {
            color: var(--bs-gray);
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .contact {
    .contact-content {
      width: 90%;
      flex-direction: column-reverse;
      .contact-form {
        width: 100%;
      }
      .contact-data {
        width: 100%;
      }
    }
  }
}

@media (max-width: 767px) {
  .contact {
    .contact-content {
      width: 100%;
    }
  }
}
</style>
