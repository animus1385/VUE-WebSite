<template>
  <ul class="catalog__list">
  <ProductsItem :product="product" v-for="(product, index) in products" :key="index"/>
  </ul>
</template>

<script>
import ProductsItem from './ProductItem.vue';

export default {
  props: ['products'],
  components: { ProductsItem },
 
};
</script>
