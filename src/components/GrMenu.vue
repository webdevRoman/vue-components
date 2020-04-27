<template lang="pug">
.gr-menu
  .gr-container
    .gr-menu-burger
      .gr-menu-burger__line
    .gr-menu__items
      router-link.gr-menu__item(v-for="item in links", :to="{ path: item.path, query: item.query }", :key="item.id")
        .gr-menu__link {{ item.title }}
</template>

<script>
export default {
  name: 'GrMenu',
  props: ['grMenuConfig'],
  data() {
    return {
      links: []
    }
  },
  created() {
    for (let i = 0; i < this.grMenuConfig.items.length; i++) {
      const itemLink = this.grMenuConfig.items[i].link
      this.links.push({
        id: i,
        path: itemLink.path,
        query: itemLink.query,
        title: this.grMenuConfig.items[i].title,
        isActive: this.$route.path === itemLink.path && JSON.stringify(this.$route.query) === JSON.stringify(itemLink.query)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-container
    margin: 0 auto
    max-width: $wcXL
    @media screen and (max-width: $wXL)
      max-width: $wcL
    @media screen and (max-width: $wL)
      max-width: $wcM
    @media screen and (max-width: $wM)
      max-width: $wcS
    @media screen and (max-width: $wS)
      max-width: $wcXS
  &-menu
    width 100%
    padding 10px 0
    background-color $cBgDark
    box-shadow: 0 0 20px rgba(0, 0, 0, .3)
    &-burger
      display none
    &__items
      display: flex
      justify-content flex-end
      align-items center
      flex-wrap: wrap
      .router-link-exact-active
        &:hover
          &:after
            transform translateX(-50%) scaleX(0)
    &__item
      position relative
      padding 10px
      font-size 18px
      font-weight bold
      text-transform uppercase
      color $cFontLight
      margin-left 20px
      &:first-child
        margin-left 0
      &:after
        position absolute
        bottom 0
        left 50%
        transform translateX(-50%) scaleX(0)
        content ''
        display block
        width 50%
        height 3px
        background $cActive
        transition 0.2s
      &:hover
        &:after
          transform translateX(-50%) scaleX(1)
    .router
      &-link
        &-exact
          &-active
            color $cActive
</style>