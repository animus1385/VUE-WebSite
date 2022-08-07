<template>
  <div class="content__catalog">
    <ProductFilter
      v-model:price-from="filterPriceFrom"
      v-model:price-to="filterPriceTo"
      v-model:category-id="filterCategoryId"
      v-model:filter-color="filterColor"
    />

    <section id="catalog" class="catalog">
      <ProductsList :products="products" />

      <BasePagination
        v-model="page"
        :count="countProducts"
        :per-page="productsPerPage"
      />
    </section>
  </div>
</template>

<script>
import products from "@/data/products";
import ProductsList from "@/components/ProductList.vue";
import BasePagination from "@/components/BasePagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";

export default {
  name: "App",

  components: { ProductsList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: "",
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    filterProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > this.filterPriceFrom
        );
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price < this.filterPriceTo
        );
      }
      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId
        );
      }
      if (this.filterColor) {
        filteredProducts = filteredProducts.filter(
          (product) => product.colors.includes(this.filterColor)
        );
      }
      return filteredProducts;
    },
    products() {
      const offsest = (this.page - 1) * this.productsPerPage;
      return this.filterProducts.slice(offsest, offsest + this.productsPerPage);
    },
    countProducts() {
      return this.filterProducts.length;
    },
  },
  methods: {
    paginates(page) {},
  },
};
</script>
