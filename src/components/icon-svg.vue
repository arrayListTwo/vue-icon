<!-- 还是使用symbol方式，封装了一层svg -->
<template>
  <div class="icon-svg">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'icon-svg',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.iconClass}`
      }
    }
  }
</script>

<style lang="stylus" scoped>
  /* icon样式可以在main.js中引入，也可以直接封装到组件的样式中 */
  /*.icon
    width: 1em
    height: 1em
    vertical-align: -0.15em
    fill: rgba(0, 0, 0, 0)
    overflow: hidden*/

  .icon-svg
    display inline-block
</style>
