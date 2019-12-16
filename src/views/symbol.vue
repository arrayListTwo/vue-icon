<template>
  <div class="home">
    <div class="icon-wrapper">
      <div class="icon-content">
        <svg class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-prev"></use>
        </svg>
      </div>
      <span>上一个</span>
    </div>
    <div class="icon-wrapper">
      <div class="icon-content">
        <svg class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-pause"></use>
        </svg>
      </div>
      <span>状态</span>
    </div>
    <div class="icon-wrapper">
      <div class="icon-content">
        <svg class="icon icon-back" aria-hidden="true">
          <use xlink:href="#icon-next"></use>
        </svg>
      </div>
      <span>下一个</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'home'
  }
</script>

<style lang="stylus" scoped>
  .home
    margin-top 20px

    .icon-wrapper
      display inline-block
      flex-direction column
      align-items center
      justify-content center
      padding 10px
      flex-wrap wrap

      .icon-content
        transition-duration .5s
        transform-origin bottom

        &:hover /*缩放实现*/
          transform scale(1.25)

          .icon-back
            fill #8CF6FB

        .icon-back
          width 30px
          height 30px
</style>
