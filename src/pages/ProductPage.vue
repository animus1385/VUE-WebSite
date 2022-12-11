<template>
  <main class="content container">
    <BaseBreadcrumbs :product="product" />
    <section class="item">
      <ProductGallery :images="product.images" />
      <ProductInfo :product="product" />
      <ProductDescr :product="product" />
    </section>
  </main>
</template>

<script>
import products from "@/data/products";
import ProductDescr from "@/components/ProductPageComponents/ProductDescr.vue";
import ProductInfo from "@/components/ProductPageComponents/ProductInfo.vue";
import ProductGallery from "@/components/ProductPageComponents/ProductGallery.vue";
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";

export default {
  name: "ProductPage",
  components: { ProductDescr, ProductInfo, ProductGallery, BaseBreadcrumbs },
  data() {
    return {
      product: this.getDataItem(),
    };
  },
  methods: {
    getDataItem() {
      return products.find((product) => product.id == this.$route.params.id);
    },
  },
};
</script>

<style>
</style>