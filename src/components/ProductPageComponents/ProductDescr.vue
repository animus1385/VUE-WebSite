<template>
  <div class="item__desc">
    <ul class="tabs">
      <li
        class="tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTabs"
      >
        <div
          class="tabs__link"
          :class="{ 'tabs__link--current': tab == activeTab }"
        >
          {{ tab }}
        </div>
      </li>
    </ul>

    <div class="item__content">
      <!-- <a href="#"> Все характеристики </a> -->

      <div  v-if="activeTab == 'Описание'"  v-for="descrElem in product.descr">
        <h3>{{ descrElem.title }}</h3>
        <p>{{ descrElem.descr }}</p>
      </div>

      <p v-else v-for="attr in product.attr">{{ attr }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescr",
  props: ["product"],
  data() {
    return {
      activeTab: "Описание",
      tabs: ["Описание", "Характеристики", "Гарантия", "Оплата и доставка"],
    };
  },
  methods: {
    selectTabs(tab) {
      return this.activeTab = tab.target.textContent;
    },
  },
};
</script>

<style>
.tabs__item {
  cursor: pointer;
}
</style>