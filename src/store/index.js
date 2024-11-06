import { defineStore } from "pinia";

export const counterStore = defineStore("counter", {
  state: () => ({
    testimonials: [
      {
        id: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-1.jpg", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "5",
      },
      {
        id: 2,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-2.webp", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "4",
      },
      {
        id: 3,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-3.webp", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "4.5",
      },
      {
        id: 4,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("../assets/images/person-4.jpg", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "3.5",
      },
      {
        id: 5,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-5.webp", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "3",
      },
      {
        id: 6,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-6.webp", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "4",
      },
      {
        id: 7,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-7.avif", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "5",
      },
      {
        id: 8,
        desc: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ecer since the 1500s",
        img: new URL("@/assets/images/person-8.avif", import.meta.url).href,
        name: "Client Name",
        state: "Profession",
        rate: "4.5",
      },
    ],
  }),
});
