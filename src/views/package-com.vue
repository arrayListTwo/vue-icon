<template>
  <div class="package-com">
    <p>单纯使用vue封装组件，依赖symbol方式</p>
    <icon-svg class="icon-favorite" icon-class="favorite"></icon-svg>
    <p>使用svg-sprite-loader处理svg</p>
    <svg-icon iconClass="headset" class="icon-size"></svg-icon>
    <svg-icon iconClass="guide" className="red" class="icon-size"></svg-icon>
  </div>
</template>

<script type="text/ecmascript-6">
  /* 局部注册，也可以使用Vue.conponent('icon-svg', IconSvg)全局注册 */
  import IconSvg from '@/components/icon-svg'

  export default {
    name: 'package-com',
    components: {
      IconSvg
    }
  }
</script>

<style lang="stylus" scoped>
  .package-com
    display inline-block
    margin-top 20px
    font-size 20px

    .red
      fill #719cff

    .icon-size
      font-size 60px
      margin-right 20px

    .icon-favorite
      font-size 60px
      transition: font-size 0.25s linear

      &:hover
        font-size 80px

        >>> .icon
          fill aqua
</style>
