<template>
  <div class="wrapper">
    <HeadNav/>
    <div class="content">
      <LeftMenu/>
      <router-view style="flex: 1;"></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from "../components/HeaderNav.vue";
import LeftMenu from "../components/LeftMenu.vue";
export default {
  name: "index",
  components: {
    HeadNav,
    LeftMenu
  }
};
</script>

<style scoped>
.wrapper, .content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  display: flex;
  flex-direction: row;
}
</style>
