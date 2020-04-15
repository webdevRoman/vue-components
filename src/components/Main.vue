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
    img
      height: 100%
      width: auto
  &__right-bg
    position: absolute
    left: 1000px
    top: -339px
    transform: rotate(-60deg)
    width: 950px
    height: 950px
    background-color: $cBgMiddle
  &__content
    position: relative
  &__delement
    position: absolute
    left: 0
    top: 120px
    width: 120px
    height: 240px
    background-color: $cBgMiddle
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
  &__title
    margin-bottom: 30px
  &__vue
    position: absolute
    top: 320px
    left: 970px
    width: 450px
    transition: 1s
    &:hover
      transform scale(1.25)
</style>