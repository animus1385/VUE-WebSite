<template>
  <div class="item__info">
    <span class="item__code">Артикул: {{ product.SKU }}</span>
    <h2 class="item__title">{{ product.title }}</h2>
    <div class="item__form">
      <form class="form" action="#" method="POST">
        <b class="item__price"> {{ product.price }} ₽ </b>

        <fieldset class="form__block">
          <legend class="form__legend">Цвет:</legend>
          <ul class="colors">
            <li
              class="colors__item"
              v-for="(color, index) in product.colors"
              :key="color"
            >
              <label class="colors__label">
                <input
                  class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  :checked="index == 0"
                  :value="color"
                  @click="changeColor"
                />
                <span class="colors__value" :style="{ backgroundColor: color }">
                </span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset v-if="product.memory" class="form__block">
          <legend class="form__legend">Объемб в ГБ:</legend>

          <ul class="sizes sizes--primery">
            <li
              class="sizes__item"
              v-for="memory in product.memory"
              :key="memory"
            >
              <label class="sizes__label">
                <input
                  class="sizes__radio sr-only"
                  type="radio"
                  name="sizes-item"
                  :value="memory"
                />
                <span class="sizes__value"> {{ memory }} </span>
              </label>
            </li>
          </ul>
        </fieldset>

        <div class="item__row">
          <div class="form__counter">
            <button
              type="button"
              aria-label="Убрать один товар"
              @click.prevent="minus"
            >
              <svg width="12" height="12" fill="currentColor">
                <use xlink:href="#icon-minus"></use>
              </svg>
            </button>

            <input type="text" :value="startItem" name="count" />

            <button
              type="button"
              aria-label="Добавить один товар"
              @click.prevent="plus"
            >
              <svg width="12" height="12" fill="currentColor">
                <use xlink:href="#icon-plus"></use>
              </svg>
            </button>
          </div>

          <button
            class="button button--primery"
            type="submit"
            @click.prevent="$emit('click', push())"
          >
            В корзину
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: ["product"],
  data() {
    return {
      startItem: 1,
      colorStart: this.product.colors[0],
    };
  },

  methods: {
    changeColor(e) {
     return   this.colorStart = e.target.value;
    },
    plus() {
      return (this.startItem = this.startItem + 1);
    },
    minus() {
      if (this.startItem > 1) {
        return (this.startItem = this.startItem - 1);
      }
    },
    pushCard() {
      return {
        product: this.product,
        count: this.startItem,
        colorStart: this.colorStart,
        type: null,
      };
    },
  },
};
</script>

<style>
</style>