<template lang="">
  <div class="page-title">
    <span class="left-ornament"></span>
    <h1>{{ page_title }}</h1>
    <span class="right-ornament"></span>
  </div>
</template>
<script setup>
import { defineComponent } from "vue";

const MyProps = defineProps({
  page_title: {
    type: String,
    default: "Type here",
    required: false,
  },
});
</script>
<style lang="scss">
.page-title {
  display: flex;
  align-items: center;
  .ornament {
    width: 80%;
    height: 1px;
    background-color: orange;
    position: relative;
  }
  .left-ornament {
    @extend .ornament;
  }
  .right-ornament {
    @extend .ornament;
  }
  h1 {
    font-size: 3.222em;
    margin: 40px auto;
    white-space: nowrap;
  }
}
</style>
