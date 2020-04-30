<template lang="pug">
  section.main
    .main__bg
      .main__img
        img(src="../assets/img/code.jpg", alt="Code")
      .main__right-bg
    .main__content
      .main__delement
      .container
        .main__text
          h1.title.main__title Пакет компонентов Vue
          .text Здесь вы найдёте различные элементы, используемые в веб-приложениях. Все компоненты являются кастомизируемыми: как стили, так и некоторые конфигурации могут быть настроены при подключении компонента.
    .main__vue
      img(src="../assets/img/vue.svg", alt="Vue")
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.main
  &__img
    height: 310px
    @media screen and (max-width: $wXL)
      height 270px
    @media screen and (max-width: $wL)
      height auto
      width 100%
    img
      height: 100%
      width: auto
      @media screen and (max-width: $wL)
        height auto
        width 100%
  &__right-bg
    position: absolute
    left: 1000px
    top: -339px
    transform: rotate(-60deg)
    width: 950px
    height: 950px
    background-color: $cBgMiddle
    @media screen and (max-width: $wXL)
      left 850px
      top -379px
    @media screen and (max-width: $wL)
      display none
  &__content
    position: relative
  &__delement
    position: absolute
    left: 0
    top: 120px
    width: 120px
    height: 240px
    background-color: $cBgMiddle
    @media screen and (max-width: $wXL)
      width 80px
      height 200px
    @media screen and (max-width: $wM)
      top 90px
    @media screen and (max-width: $wS)
      display none
    &:after
      content: ''
      display: block
      width: 10px
      height: 150px
      background-color: $cActive
      position: absolute
      top: -75px
      right: 15px
  &__text
    max-width: 753px
    margin-top: 130px
    @media screen and (max-width: 1439px)
      margin-left: 120px
    @media screen and (max-width: $wXL)
      max-width: 600px
      margin-left: 80px
    @media screen and (max-width: $wM)
      margin-top 100px
    @media screen and (max-width: $wS)
      margin-left: 0
      margin-top 70px
  &__title
    margin-bottom: 30px
    @media screen and (max-width: $wM)
      margin-bottom 15px
  &__vue
    position: absolute
    top: 320px
    right: 0
    width: 450px
    transition: 1s
    @media (max-width: 1439px)
      right: -25px
    @media screen and (max-width: $wXL)
      width 350px
    @media screen and (max-width: $wL)
      top 20px
      right: 20px
    @media screen and (max-width: $wM)
      width 250px
    @media screen and (max-width: $wS)
      top 10px
      right 10px
      width 150px
    &:hover
      transform: scale(1.25)
      @media screen and (max-width: $wL)
        transform: none
</style>