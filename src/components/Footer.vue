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
  @media screen and (max-width: $wXL)
    padding 40px
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
      @media screen and (max-width: $wXL)
        top -8px
        left -10%
        width 120%
      @media screen and (max-width: $wS)
        top -5px
        height 40px
    &:hover
      color $cBgDark
      @media screen and (max-width: $wXL)
        color $cFontLight
      &:before
        width 104%
        @media screen and (max-width: $wXL)
          width 120%
</style>