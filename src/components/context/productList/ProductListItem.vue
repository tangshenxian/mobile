<template>
  <div class="product-item">
    <a :href="productItem.link">
      <img :src="productItem.show.img" @load="imageLoad"/>
    </a>
    <div class="product-info">
      <p>{{ productItem.title }}</p>
      <span class="price">{{ productItem.price }}</span>
      <span class="collect">{{ productItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    productItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('itemImageLoad');
    }
  }
}
</script>

<style scoped>
.product-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.product-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.product-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.product-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.product-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.product-info .collect {
  position: relative;
}

.product-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
