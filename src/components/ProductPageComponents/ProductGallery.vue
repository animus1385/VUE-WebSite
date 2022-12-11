<template>
  <div class="item__pics pics">
    <div class="pics__wrapper">
      <img
        width="570"
        height="570"
        :src="images[0]"
        alt="Название товара"
      />
    </div>
    <ul class="pics__list">
      <li class="pics__item" v-for="image in images" :key="image">
        <div  class="pics__link pics__link--current">
          <img
            width="98"
            height="98"
            :src="image"
            alt="Название товара"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'ProductGalley',
    props: ['images']
};
</script>

<style>
</style>