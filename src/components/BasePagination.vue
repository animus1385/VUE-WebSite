<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        :class="{ 'pagination__link--disabled': currentNumber == 1 }"
        aria-label="Предыдущая страница"
        @click.prevent="prevPaginate()"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a
        href="#"
        @click.prevent="paginates(pageNumber)"
        class="pagination__link"
        :class="{
          'pagination__link--current': pageNumber === this.$attrs.modelValue,
        }"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
          :class="{ 'pagination__link--disabled': currentNumber ==  pages }"
        aria-label="Следующая страница"
        @click.prevent="nextPaginate()"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentNumber: 0,
    };
  },
  model: {
    prop: "page",
    event: "paginates",
  },
  props: ["page", "count", "perPage"],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginates(page) {
      this.$emit("update:modelValue", page);
    },
    prevPaginate() {
      if (this.$attrs.modelValue > 1) {
        this.currentNumber = this.$attrs.modelValue - 1;
        this.$emit("update:modelValue", this.currentNumber);
      }
    },
    nextPaginate() {
      if (this.$attrs.modelValue < this.pages) {
        this.currentNumber = this.$attrs.modelValue + 1;
        this.$emit("update:modelValue", this.currentNumber);
      }
    },
  },
};
</script>

<style>
.pagination__link {
  cursor: pointer;
}
</style>