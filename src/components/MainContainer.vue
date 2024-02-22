<template>
  <div class="ZJL__main-container">
    <slot></slot>
  </div>
</template>

<script>
  import {defineComponent} from "vue";

  export default defineComponent({
    name: 'MainContainer'
  })

</script>

<style scoped lang="scss">
  .ZJL__main-container{
      @media (min-width: $breakpoint-lg-max){
        max-width: $breakpoint-lg;
        margin: 0 auto;
      }
  }
</style>
