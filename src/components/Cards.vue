<template lang="pug">
.container.cards-container
  button.card(v-for="(card, i) in cards", :class="imgNumbers[i]")
    .card__text
      .subtitle.card__title {{ card.name }}
      .card__subtitle {{ card.engName }}
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      cards: [{
        // id: 1,
        name: 'Календарь',
        engName: 'Calendar',
      }, {
        // id: 2,
        name: 'Слайдер',
        engName: 'Slider',
      }, {
        // id: 3,
        name: 'Модальное окно',
        engName: 'Modal',
      }, {
        // id: 4,
        name: 'Гориз. аккордеон',
        engName: 'Horizontal accordion',
      }]
    }
  },
  computed: {
    imgNumbers() {
      const imgNumbers = []
      for (let i = 0; i < this.cards.length; i++)
        imgNumbers.push(`card-${Math.ceil(Math.random() * 5)}`)
      console.log(imgNumbers)
      return imgNumbers
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.cards
  &-container
    margin-top: 300px
    margin-bottom: 110px

.card
  position: relative
  width: 264px
  height: 264px
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  box-shadow: 0 0 20px rgba(0, 0, 0, .3)
  margin-right: 128px
  margin-bottom: 90px
  transition: .2s
  &:before, &:after
    content: ''
    display: block
    position: absolute
    background-color: $cActive
    transition 0.2s
  &:before
    top: -20px
    left: 45px
    width: 10px
    height: 95px
    z-index 5
  &:after
    bottom 45px
    left -15px
    width 100px
    height 32px
  &:nth-child(3n)
    margin-right: 0
  &-1
    background-image: url('../assets/img/bg1.jpg')
  &-2
    background-image: url('../assets/img/bg2.jpg')
  &-3
    background-image: url('../assets/img/bg3.jpg')
  &-4
    background-image: url('../assets/img/bg4.jpg')
  &-5
    background-image: url('../assets/img/bg5.jpg')
  &__text
    position: absolute
    bottom: 20px
    right: -30px
    z-index 10
  &__title
    font-size: 24px
    font-weight: bold
    text-transform: uppercase
    text-align: right
    margin-bottom: 10px
    transition 0.2s
  &__subtitle
    font-size: 14px
    letter-spacing: .25em
    text-transform: uppercase
    text-align: left
    margin-right: -10px
    transition 0.2s
  &:hover
    &:before
      top: 180px
    &:after
      width 343px
      background-color $cBgMiddle
    .card
      &__title
        color $cFontLight
      &__subtitle
        color $cBgMiddle
</style>