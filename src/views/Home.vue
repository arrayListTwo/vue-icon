<template>
  <div class="home">
    <div class="back">
      <svg class="icon icon-back" aria-hidden="true">
        <use xlink:href="#icon-back"></use>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="stylus" scoped>
  .home
    .back
      .icon
        width: 1em
        height: 1em
        vertical-align: -0.15em
        fill: rgba(0, 0, 0, 0)
        overflow: hidden

      .icon-back
        width 30px
        height 30px

        &:active, &:focus
          fill #8CF6FB
</style>
