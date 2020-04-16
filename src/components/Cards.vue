<template lang="pug">
.container.cards-container
  router-link.card(:to="{ path: `/component/${card.engName}`, query: { name: card.name, ind: imgNumbers[i] }}", v-for="(card, i) in cards")
    .card-item(:class="`card-item-${imgNumbers[i]}`")
      .card__text
        .subtitle.card__title {{ card.shortName }}
        .card__subtitle {{ card.engName }}
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      cards: [{
        name: 'календарь',
        shortName: 'календарь',
        engName: 'calendar',
      }, {
        name: 'слайдер',
        shortName: 'слайдер',
        engName: 'slider',
      }, {
        name: 'модальное окно',
        shortName: 'модальное окно',
        engName: 'modal',
      }, {
        name: 'горизонтальный аккордеон',
        shortName: 'гориз. аккордеон',
        engName: 'horizontal accordion',
      }]
    }
  },
  computed: {
    imgNumbers() {
      const imgNumbers = []
      for (let i = 0; i < this.cards.length; i++)
        imgNumbers.push(Math.ceil(Math.random() * 5))
        // imgNumbers.push(`card-item-${Math.ceil(Math.random() * 5)}`)
      return imgNumbers
    }
  },
  mounted() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      card.addEventListener('mouseenter', setTransition)
      card.addEventListener('mousemove', rotate)
      card.addEventListener('mouseout', stopRotate)
    })
  }
}

function setTransition() {
  const cardItem = this.querySelector('.card-item')
  cardItem.style.transition = '0.2s'
  setTimeout(() => { cardItem.style.transition = 'none' }, 210)
}
function rotate(event) {
  const cardItem = this.querySelector('.card-item')
  const halfHeight = cardItem.offsetHeight / 2
  const halfWidth = cardItem.offsetWidth / 2
  cardItem.style.transform = `rotateX(${-(event.offsetY - halfWidth) / 15}deg) rotateY(${(event.offsetX - halfHeight) / 15}deg)`
}
function stopRotate() {
  const cardItem = this.querySelector('.card-item')
  cardItem.style.transition = '0.2s'
  setTimeout(() => { cardItem.style.transition = 'none' }, 210)
  cardItem.style.transform = 'rotate(0)'
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.cards
  &-container
    margin-top: 300px
    margin-bottom: 110px

.card
  margin-right: 128px
  margin-bottom: 90px
  perspective: 1000px
  transform-style: preserve-3d
  &-item
    position: relative
    width: 264px
    height: 264px
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    box-shadow: 0 0 20px rgba(0, 0, 0, .3)
    &:before, &:after
      content: ''
      display: block
      position: absolute
      background-color: $cActive
      transition: .2s
    &:before
      top: -20px
      left: 45px
      width: 10px
      height: 95px
      z-index: 5
    &:after
      bottom: 45px
      left: -15px
      width: 100px
      height: 32px
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
  &:nth-child(3n)
    margin-right: 0
  &__text
    position: absolute
    bottom: 20px
    right: -30px
    z-index: 10
  &__title
    font-size: 24px
    font-weight: bold
    text-transform: uppercase
    text-align: right
    margin-bottom: 10px
    transition: .2s
  &__subtitle
    font-size: 14px
    letter-spacing: .25em
    text-transform: uppercase
    text-align: left
    margin-right: -10px
    transition: .2s
  &:hover
    .card-item
      &:before
        top: 180px
      &:after
        width: 343px
        background-color: $cBgMiddle
      .card
        &__title
          color: $cFontLight
        &__subtitle
          color: $cBgMiddle
</style>