<template>
  <div class="city top-page">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      >
      </van-search>
      <!-- tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup" /> -->
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import CityGroup from "./cpns/city-group.vue";

const router = useRouter();

//搜索框功能
const searchValue = ref("");
const cancelClick = () => {
  router.back();
};

//tab的切换
const tabActive = ref();

//网络请求:请求城市的数据
// const allCity = ref();
// getCityAll().then((res) => {
//   allCity.value = res.data;
// });

//从Store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

//目的:获取选中标签后数据
//1.获取正确的key: 将tabs中绑定的tabAction正确绑定
//2.根据key从allCities获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
// const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>
<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
