<template lang="pug">
footer.footer
  a.title.footer__title(href="https://github.com/webdevRoman/vue-components", target="_blank") Проект на GitHub
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.footer
  padding 60px
  background-color $cBgMiddle
  text-align center
  &__title
    position relative
    display inline-block
    color $cFontLight
    transition 0.2s
    z-index 5
    &:before
      content: ''
      display block
      position absolute
      left -2%
      width 24px
      height 60px
      background-color $cActive
      z-index -1
      transition 0.2s
    &:hover
      color $cBgDark
      &:before
        width 104%
</style>