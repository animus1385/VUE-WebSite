<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        :class="{ 'pagination__link--disabled': this.page == 1 }"
        aria-label="Предыдущая страница"
        @click.prevent="paginates(page - 1)"
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
          'pagination__link--current': pageNumber === this.page,
        }"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
          :class="{ 'pagination__link--disabled': this.page ==  pages }"
        aria-label="Следующая страница"
        @click.prevent="paginates(page + 1)"
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
  props: ["page", "count", "perPage"],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginates(page) {
      if(page >= 1 && page <= this.pages) {
        this.$emit("update:page", page);
      }
     
    }
  },
};
</script>

<style>
.pagination__link {
  cursor: pointer;
}
</style>