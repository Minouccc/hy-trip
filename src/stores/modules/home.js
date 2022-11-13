import { defineStore } from "pinia";
import {
  getHomeHotSuggests,
  getHotCategories,
  getHomeHouselist,
} from "./../../services/modules/home";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houselist: [],
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHotCategories();
      this.categories = res.data;
    },
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage);
      this.houselist.push(...res.data);
      this.currentPage++;
    },
  },
});

export default useHomeStore;
