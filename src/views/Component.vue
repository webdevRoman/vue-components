<template lang="pug">
  .component
    header.header(:class="`header-${$route.query.ind}`")
      .header__text
        h2.header__title {{ $route.query.name }}
        .header__subtitle {{ $route.params.engName }}
    .component-section
      Calendar(v-if="$route.params.engName === 'calendar'", :calendar-config="calendarConfig")
    Footer
</template>

<script>
import Calendar from '@/components/Calendar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MyComponent',
  components: {
    Calendar,
    Footer
  },
  data() {
    return {
      calendarConfig: {
        monthsDictionary: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
        weekdaysDictionary: ['Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб', 'Вос'],
        separator: '/',
        disabledDays: ['Вос', 'Вто'],
        disabledDaysBefore: '10/04/2020',
        disabledDaysAfter: '15/04/2020'
      }
    }
  }
  // mounted() {
  //   const header = document.querySelector('.header')
  //   const footer = document.querySelector('.footer')
  //   const componentSection = document.querySelector('.component-section')
  //   componentSection.style.minHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight + 'px'
  // }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.header
  display: flex
  justify-content: center
  align-items: center
  height: 288px
  padding: 25px 0
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  text-align: center
  &-1
    background-image: url('../assets/img/bg1b.jpg')
  &-2
    background-image: url('../assets/img/bg2b.jpg')
  &-3
    background-image: url('../assets/img/bg3b.jpg')
  &-4
    background-image: url('../assets/img/bg4b.jpg')
  &-5
    background-image: url('../assets/img/bg5b.jpg')
  &__title
    width: 700px
    font-weight: bold
    font-size: 64px
    text-transform: uppercase
    margin-bottom: 20px
  &__subtitle
    font-size: 24px
    letter-spacing: .25em
    text-transform: uppercase
    color: $cFontLight
  &__text
    position: relative
    z-index: 10
    &:before, &:after
      content: ''
      display: block
      position: absolute
    &:before
      bottom: -6px
      left: 50%
      transform: translateX(-50%)
      width: 800px
      height: 40px
      background-color: $cActive
      z-index: -1
    &:after
      bottom: -35px
      left: -15px
      width: 20px
      height: 200px
      background-color: $cBgDark

.component
  display: flex
  justify-content: space-between
  flex-direction: column
  width: 100%
  min-height: 100vh
  &-section
    display: flex
    justify-content: center
    align-items: center
    padding: 100px 0
</style>