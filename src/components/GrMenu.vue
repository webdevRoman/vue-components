<template lang="pug">
.gr-menu
  .gr-container
    button.gr-menu-burger(@click="toggleMenu")
      .gr-menu-burger__line
    .gr-menu__wrapper
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
      links: [],
      enableClick: true
    }
  },
  methods: {
    toggleMenu() {
      if (this.enableClick) {
        this.enableClick = false
        const menu = document.getElementById(this.$attrs.id)
        const burgerBtn = menu.querySelector('.gr-menu-burger')
        const burgerItems = menu.querySelector('.gr-menu__items')
        if (burgerItems.classList.contains('gr-menu__items_active')) {
          burgerItems.classList.remove('gr-menu__items_active')
          setTimeout(() => {
            burgerItems.style.display = 'none'
            this.enableClick = true
          }, 200)
          burgerBtn.classList.remove('gr-menu-burger_active')
        } else {
          burgerItems.style.display = 'flex'
          setTimeout(() => { burgerItems.classList.add('gr-menu__items_active') }, 10)
          setTimeout(() => { this.enableClick = true }, 210)
          burgerBtn.classList.add('gr-menu-burger_active')
        }
      }
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
  },
  mounted() {
    if (window.innerWidth <= 768) {
      const burgerItems = document.getElementById(this.$attrs.id).querySelector('.gr-menu__items')
      burgerItems.style.display = 'none'
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-container
    display flex
    justify-content flex-end
    margin: 0 auto
    max-width: $wcXL
    @media screen and (max-width: $wXL)
      max-width: $wcL
    @media screen and (max-width: $wL)
      max-width: $wcM
    @media screen and (max-width: $wM)
      max-width: $wcS
      flex-direction column
      align-items flex-end
    @media screen and (max-width: $wS)
      max-width: $wcXS
  &-menu
    width 100%
    padding 10px 0
    background-color $cBgDark
    box-shadow: 0 0 20px rgba(0, 0, 0, .3)
    @media screen and (max-width: $wXL)
      padding 5px 0
    &-burger
      display none
      justify-content center
      align-items center
      width 40px
      height 40px
      @media screen and (max-width: $wM)
        display flex
      &__line
        position relative
        width 100%
        height 3px
        background-color $cBgLight
        transition 0.2s
        &:before, &:after
          position absolute
          left 0
          content ''
          display block
          width 40px
          height 3px
          background-color $cBgLight
          transform-origin left center
          transition 0.2s
        &:before
          top -12px
        &:after
          bottom -12px
      &_active
        .gr-menu-burger__line
          height 0
          &:before
            transform translateY(-3px) rotate(45deg)
          &:after
            transform translateY(3px) rotate(-45deg)
    &__wrapper
      @media screen and (max-width: $wM)
        width 100%
        overflow hidden
    &__items
      display: flex
      justify-content flex-end
      align-items center
      flex-wrap: wrap
      transition 0.2s
      @media screen and (max-width: $wM)
        display flex
        flex-direction column
        width 100%
        padding 10px 0
        margin-top -55%
      &_active
        @media screen and (max-width: $wM)
          margin-top 0
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
      @media screen and (max-width: $wXL)
        font-size 16px
        margin-left 15px
      @media screen and (max-width: $wM)
        width 100%
        padding 15px 0
        font-size 18px
        text-align center
        border-bottom 1px solid darken($cBgDark, 10)
        margin-left 0
        &:first-child
          border-top 1px solid darken($cBgDark, 10)
        &:last-child
          margin-bottom 0
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
        @media screen and (max-width: $wL)
          &:after
            display none
    .router
      &-link
        &-exact
          &-active
            color $cActive
</style>