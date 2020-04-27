<template lang="pug">
.gr-drawer
  button.gr-drawer__btn(@click="toggleMenu")
    .gr-drawer__arrow
  .gr-drawer__menu
    .gr-drawer__title(v-if="grDrawerConfig.title") {{ grDrawerConfig.title }}
    router-link.gr-drawer__item(v-for="item in links", :to="{ path: item.path, query: item.query }", :key="item.id") {{ item.title }}
</template>

<script>
export default {
  name: 'GrDrawer',
  props: ['grDrawerConfig'],
  data() {
    return {
      links: []
    }
  },
  methods: {
    toggleMenu() {
      const drawer = document.getElementById(this.$attrs.id)
      const button = drawer.querySelector('.gr-drawer__btn')
      const menu = drawer.querySelector('.gr-drawer__menu')
      button.classList.toggle('gr-drawer__btn_active')
      menu.classList.toggle('gr-drawer__menu_active')
    }
  },
  created() {
    for (let i = 0; i < this.grDrawerConfig.items.length; i++) {
      const itemLink = this.grDrawerConfig.items[i].link
      this.links.push({
        id: i,
        path: itemLink.path,
        query: itemLink.query,
        title: this.grDrawerConfig.items[i].title,
        isActive: this.$route.path === itemLink.path && JSON.stringify(this.$route.query) === JSON.stringify(itemLink.query)
      })
    }
  },
  mounted() {
    const drawer = document.getElementById(this.$attrs.id)
    drawer.parentNode.style.overflow = 'hidden'
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-drawer
    position relative
    display flex
    justify-content flex-end
    &__btn
      display flex
      justify-content center
      align-items center
      width 40px
      height 40px
      background-color rgba($cBgDark, 0.2)
      transition 0.2s
      &_active
        transform rotate(180deg)
      &:hover
        .gr-drawer__arrow
          background-color $cActive
          &:before, &:after
            background-color $cActive
    &__arrow
      width 26px
      height 3px
      border-radius 1px
      background-color $cBgDark
      transition 0.2s
      &:before, &:after
        content: ''
        display block
        width 12px
        height 2px
        background-color $cBgDark
        border-radius 1px
        transform-origin left center
        transition 0.2s
      &:before
        transform translateX(1px) rotate(-45deg)
      &:after
        transform translate(1px, -2px) rotate(45deg)
    &__menu
      position absolute
      top 150%
      right -100%
      width 400px
      background-color $cBgLight
      box-shadow: 0 0 20px rgba(0, 0, 0, .3)
      margin-right -100px
      transition 0.2s
      &_active
        right 0
    &__title
      padding 20px 120px 30px 20px
      font-size 22px
      font-weight bold
    &__item
      display block
      padding 15px 120px 15px 20px
      font-size 18px
      text-transform uppercase
      transition 0.2s
      &:hover
        background-color rgba($cBgDark, 0.2)
    .router
      &-link
        &-exact
          &-active
            background-color rgba($cBgDark, 0.2)
</style>