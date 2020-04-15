<template lang="pug">
  .home
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
