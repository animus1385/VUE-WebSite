<template>
  <div class="content__top">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="/"> Каталог </a>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="#">{{getCategory().title}} </a>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link"> {{ product.title}} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import categories from '@/data/categories';

export default {
  props: ["product"],

  methods: {
    getCategory() {
      return categories.find(cat => cat.id == this.product.categoryId )
    },
  },
};
</script>

<style>
</style>