<template lang="pug">
  .home
    //- .main__vue.main__vue_broken
    //-   img(src="../assets/img/vue.svg", alt="Vue")
    Main
    Cards
    Footer
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Cards from '@/components/Cards.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Main,
    Cards,
    Footer
  }
}
</script>

<style scoped lang="stylus">
// .home
//   .main
//     &__vue
//       position: absolute
//       top: 320px
//       left: 970px
//       width: 450px
//       cursor: pointer
//       transition: 1s
//       z-index 10
//       &_broken
//         top calc(100% - 368px)
</style>