<template>
  <li class="catalog__item">
    <div
      class="catalog__pic"
      @click.prevent="$router.push(`/product/${product.id}`)"
    >
      <img :src="product.images[0]" :alt="product.title" />
    </div>
    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price"> {{ product.price }} ₽ </span>
    <ul class="colors colors--black">
      <li
        class="colors__item"
        v-for="(color, index) in product.colors"
        :key="index"
      >
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :name="'color' + product.id"
            :value="color"
          />
          <span class="colors__value" :style="{ backgroundColor: color }">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
.catalog__item {
  cursor: pointer;
}
</style>