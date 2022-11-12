<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box :hot-suggests="hotSuggests" />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import useHomeStore from "@/stores/modules/home";

// 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
//1.热门建议
// const hotSuggests = ref([]);
// hyRequest
//   .get({
//     url: "/home/hotSuggests",
//   })
//   .then((res) => {
//     hotSuggests.value = res.data;
//   });
</script>
<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;
    .text {
      position: relative;
      top: 1px;
      font-size: 12px;
      color: #444;
    }
    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
