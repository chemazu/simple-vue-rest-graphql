<template>
  <button :class="className">{{ title }}</button>
</template>

<script>
export default {
  props: ["title", "className"],
};
</script>

<style lang="scss">
@import "../assets/scss/ButtonComponent.scss";
</style>
