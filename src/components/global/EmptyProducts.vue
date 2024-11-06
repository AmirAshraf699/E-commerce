<template>
  <div class="empty"></div>
</template>

<style lang="scss" scoped>
.empty {
  background-image: url("@/assets/images/empty.jpg");
  background-attachment: fixed;
  height: 500px;
  background-size: 100% 100%;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.61);
  }
}
</style>
