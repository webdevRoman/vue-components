<template lang="pug">
  .component
    header.header(:class="`header-${$route.query.ind}`")
      .header__text
        h2.header__title {{ $route.query.name }}
        .header__subtitle {{ $route.params.engName }}
    .component-section
      GrCalendar(v-if="$route.params.engName === 'calendar'", :gr-calendar-config="calendarConfig", v-model="calendarDate")
      .gr-slider-wrapper#gr-slider-wrapper(v-if="$route.params.engName === 'slider'")
        .gr-slider-container#gr-slider-container
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/ablefor.jpg", alt="Image")
              .gr-slider-item__title Эублефар
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/dog.jpg", alt="Image")
              .gr-slider-item__title Австралийская овчарка
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/parrot.jpg", alt="Image")
              .gr-slider-item__title Попугай Корелла
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/duck.jpg", alt="Image")
              .gr-slider-item__title Утка
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/packbot.jpg", alt="Image")
              .gr-slider-item__title Малый поясохвост
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/hedgehog.jpg", alt="Image")
              .gr-slider-item__title Ёж
          .gr-slider-item
            .gr-slider-item__wrapper
              .gr-slider-item__img
                img(src="../assets/img/slider/cat.jpg", alt="Image")
              .gr-slider-item__title Кот
      GrCheckboxes(v-if="$route.params.engName === 'checkboxes'", :gr-checkboxes-config="checkboxesConfig", v-model="chosenCheckboxes")
      GrRadiobuttons(v-if="$route.params.engName === 'radiobuttons'", :gr-radiobuttons-config="radiobuttonsConfig", v-model="chosenRadiobutton")
      GrMenu(v-if="$route.params.engName === 'menu'", :gr-menu-config="menuConfig")
    Footer
</template>

<script>
import GrCalendar from '@/components/GrCalendar.vue'
import GrCheckboxes from '@/components/GrCheckboxes.vue'
import GrRadiobuttons from '@/components/GrRadiobuttons.vue'
import GrMenu from '@/components/GrMenu.vue'
import Footer from '@/components/Footer.vue'

import '../assets/slider/GrSlider.styl'
import { GrSlider } from '@/assets/slider/GrSlider.js'

export default {
  name: 'GrComponent',
  components: {
    GrCalendar,
    GrCheckboxes,
    GrRadiobuttons,
    GrMenu,
    Footer
  },
  data() {
    return {
      calendarConfig: {
        monthsDictionary: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
        weekdaysDictionary: ['Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб', 'Вос'],
        separator: '/',
        disabledWeekdays: ['Вос', 'Вто'],
        disabledDaysBefore: '10/03/2020',
        disabledDaysAfter: '15/05/2020'
      },
      calendarDate: '',
      sliderConfig: {
        containerId: 'slider-container',
        arrows: true,
        navButtons: true
      },
      checkboxesConfig: {
        values: ['Чекбокс 1', 'Чекбокс 2', 'Чекбокс 3'],
        keys: ['chb1', 'chb2', 'chb3']
      },
      chosenCheckboxes: [],
      radiobuttonsConfig: {
        values: ['Переключатель 1', 'Переключатель 2', 'Переключатель 3'],
        keys: ['rb1', 'rb2', 'rb3']
      },
      chosenRadiobutton: '',
      menuConfig: {
        items: [{
          link: {
            path: '/component',
            params: ['menu'],
            query: { name: 'меню', ind: '1' }
          },
          title: 'Главная'
        }, {
          link: {
            path: '/component',
            params: ['menu'],
            query: { name: 'меню', ind: '2' }
          },
          title: 'О нас'
        }, {
          link: {
            path: '/component',
            params: ['menu'],
            query: { name: 'меню', ind: '3' }
          },
          title: 'Портфолио'
        }, {
          link: {
            path: '/component',
            params: ['menu'],
            query: { name: 'меню', ind: '4' }
          },
          title: 'Блог'
        }, {
          link: {
            path: '/component',
            params: ['menu'],
            query: { name: 'меню', ind: '5' }
          },
          title: 'Контакты'
        }]
      }
    }
  },
  mounted() {
    if (this.$route.params.engName === 'calendar') {
      const grSlider = new GrSlider({
        arrowsEnabled: true,
        navigationEnabled: true
      })
    }
  }
  // watch: {
    // chosenRadiobutton(val) {
    //   console.log(val)
    // },
    // chosenCheckboxes(val) {
    //   console.log(val)
    // }
    // '$route.query.ind'(val) {
    //   console.log(this.$route)
    //   this.$router.push({ path: this.$route.path, query: this.$route.query })
    // }
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

// @import '../assets/slider/GrSlider'

.gr
  &-slider
    &-item
      display flex
      justify-content center
      align-items center
      &__wrapper
        position: relative
        height 100%
      &__img
        height 100%
        img
          height 100%
          width auto
      &__title
        position: absolute
        bottom: 0
        right: -60px
        padding: 15px 45px
        background-color: $cBgDark
        font-size: 24px
        font-weight: bold
        color $cFontLight
        text-align: center
        text-transform: uppercase
        box-shadow: -5px -5px 20px rgba(0, 0, 0, .5)
.gr-slider-arrow
  width 100px
  height 100px
  background-color red
</style>