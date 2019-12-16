<template>
  <div class="ico-moon">
    <div class="icon-wrapper">
      <span class="icomoon-send"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ico-moon'
  }
</script>

<style lang="stylus" scoped>
  .ico-moon
    margin-top 20px

    .icon-wrapper
      display inline-block
      font-size 30px
      transition-duration .5s
      transform-origin bottom

      &:hover
        transform scale(1.25)

        .icomoon-send
          &:before
            color #ff838f
</style>
