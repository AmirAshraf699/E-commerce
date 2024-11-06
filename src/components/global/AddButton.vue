<template>
  <a href="" class="add">
    <v-icon>mdi-shopping</v-icon>
    <span>Add to cart</span>
  </a>
</template>

<style lang="scss" scoped>
.add {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  color: var(--bs-primary);
  cursor: pointer;
  border: 2px solid var(--bs-secondary);
  padding: 8px 15px;
  border-radius: 30px;
  transition: 0.3s;
  &:hover {
    background-color: var(--bs-secondary);
    color: var(--bs-white);
  }
}
</style>
