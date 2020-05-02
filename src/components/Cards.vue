<template lang="pug">
.container.cards-container
  router-link.card(:to="{ path: '/component', query: { engName: card.engName, name: card.name, ind: imgNumbers[i] }}", v-for="(card, i) in cards", :key="card.engName")
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
        name: 'флажки',
        shortName: 'флажки',
        engName: 'checkboxes',
      }, {
        name: 'переключатели',
        shortName: 'переключатели',
        engName: 'radiobuttons',
      }, {
        name: 'меню',
        shortName: 'меню',
        engName: 'menu',
      }, {
        name: 'модальное окно',
        shortName: 'модальное окно',
        engName: 'modal',
      }, {
        name: 'раскрывающийся список',
        shortName: 'раскр. список',
        engName: 'select',
      }, {
        name: 'табы',
        shortName: 'табы',
        engName: 'tabs',
      }, {
        name: 'аккордеон',
        shortName: 'аккордеон',
        engName: 'accordion',
      }, {
        name: 'анимация загрузки',
        shortName: 'анимация загрузки',
        engName: 'preloader',
      }, {
        name: 'уведомление',
        shortName: 'уведомление',
        engName: 'notification',
      }, {
        name: 'выдвижная панель',
        shortName: 'выдвиж. панель',
        engName: 'drawer',
      }]
    }
  },
  computed: {
    imgNumbers() {
      const imgNumbers = []
      for (let i = 0; i < this.cards.length; i++)
        imgNumbers.push(Math.ceil(Math.random() * 5))
      return imgNumbers
    }
  },
  mounted() {
    if (window.innerWidth > 992) {
      const cards = document.querySelectorAll('.card')
      cards.forEach(card => {
        card.addEventListener('mouseenter', setTransition)
        card.addEventListener('mousemove', rotate)
        card.addEventListener('mouseout', stopRotate)
      })
    }
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
  const rect = cardItem.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  cardItem.style.transform = `rotateX(${-(event.pageY - rect.top - scrollTop - halfWidth) / 15}deg) rotateY(${(event.pageX - rect.left - scrollLeft - halfHeight) / 15}deg)`
}
function stopRotate(event) {
  const cardItem = this.querySelector('.card-item')
  const rect = cardItem.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (event.pageY - rect.top - scrollTop < 0 || event.pageY - rect.top - scrollTop > cardItem.offsetHeight || event.pageX - rect.left - scrollLeft < 0 || event.pageX - rect.left - scrollLeft > cardItem.offsetWidth) {
    cardItem.style.transition = '0.2s'
    setTimeout(() => { cardItem.style.transition = 'none' }, 210)
    cardItem.style.transform = 'rotate(0)'
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.cards
  &-container
    margin-top: 300px
    margin-bottom: 110px
    @media screen and (max-width: $wXL)
      margin-top 170px
      margin-bottom 50px
    @media screen and (max-width: $wS)
      flex-direction column
      align-items center
      margin-top 120px
      margin-bottom 20px

.card
  margin-right: 128px
  margin-bottom: 90px
  perspective: 1000px
  transform-style: preserve-3d
  @media screen and (max-width: $wXL)
    margin-right: $wColL + 2 * $wGap
    margin-bottom 70px
  @media screen and (max-width: $wL)
    margin-right: $wColM + 2 * $wGap
  @media screen and (max-width: $wM)
    margin-right: $wColS + 2 * $wGap
  @media screen and (max-width: $wS)
    margin-right: 0
  &-item
    position: relative
    width: 264px
    height: 264px
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    box-shadow: 0 0 20px rgba(0, 0, 0, .3)
    @media screen and (max-width: $wXL)
      width: 3 * ($wColL + $wGap) - $wGap
      height: 3 * ($wColL + $wGap) - $wGap
    @media screen and (max-width: $wL)
      width: 5 * ($wColM + $wGap) - $wGap
      height: 5 * ($wColM + $wGap) - $wGap
    @media screen and (max-width: $wM)
      width: 5 * ($wColS + $wGap) - $wGap
      height: 5 * ($wColS + $wGap) - $wGap
    @media screen and (max-width: $wS)
      height: 3 * ($wColS + $wGap) - $wGap
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
      @media screen and (max-width: $wS)
        top -15px
    &:after
      bottom: 45px
      left: -15px
      width: 100px
      height: 32px
      @media screen and (max-width: $wXL)
        height 24px
      @media screen and (max-width: $wL)
        bottom: 42px
        left: -10px
      @media screen and (max-width: $wS)
        width 125%
        background-color: $cBgMiddle
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
    @media screen and (max-width: $wL)
      margin-right: $wColM + 2 * $wGap
    @media screen and (max-width: $wS)
      margin-right 0
  &:nth-child(2n)
    @media screen and (max-width: $wL)
      margin-right 0
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
    @media screen and (max-width: $wXL)
      font-size 20px
    @media screen and (max-width: $wS)
      color: $cFontLight
  &__subtitle
    font-size: 14px
    letter-spacing: .25em
    text-transform: uppercase
    text-align: left
    margin-right: -10px
    transition: .2s
    @media screen and (max-width: $wXL)
      font-size 12px
  &:hover
    .card-item
      &:before
        top: 180px
        @media screen and (max-width: $wXL)
          top: 140px
        @media screen and (max-width: $wL)
          top: -20px
      &:after
        width 125%
        background-color: $cBgMiddle
        @media screen and (max-width: $wL)
          width 100px
          background-color: $cActive
      .card
        &__title
          color: $cFontLight
          @media screen and (max-width: $wL)
            color #000
        &__subtitle
          color: $cBgMiddle
          @media screen and (max-width: $wL)
            color #000
</style>