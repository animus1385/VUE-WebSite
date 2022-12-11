<template>
  
  <ul class="catalog__list">
  <ProductsItem :product="product" v-for="product in products" :key="product.id"/>
  </ul>
</template>

<script>
import ProductsItem from './ProductItem.vue';

export default {
  props: ['products'],
  components: { ProductsItem },
 
};
</script>
