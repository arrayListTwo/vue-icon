<template>
  <div class="font-class">
    <div class="icon-wrapper">
      <span class="iconfont icon-yonghu icon-active"></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style lang="stylus" scoped>
  .font-class
    .icon-wrapper
      margin-top 20px
      background-color azure

      .icon-active
        transition: font-size 0.25s linear
        font-size 30px
        line-height 60px
        background-color #8bce7a

        &:hover /* 设置字体大小实现 */
          font-size 60px
          color aqua
</style>
