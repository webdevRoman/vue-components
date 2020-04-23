<template lang="pug">
.gr-modal
  button.gr-modal__btn(@click="openModal") {{ grModalConfig.buttonTitle }}
  .gr-modal-overlay
    .gr-modal-window
      button.gr-modal-window__close(@click="closeModal") &times;
      .gr-modal-window__title(v-if="grModalConfig.title") {{ grModalConfig.title }}
      .gr-modal-window__text(v-if="grModalConfig.text") {{ grModalConfig.text }}
      .gr-modal-window__confirmation(v-if="grModalConfig.confirmEnabled")
        button.gr-modal-window__btn.gr-modal-window__btn--close(@click="closeModal") Отмена
        button.gr-modal-window__btn.gr-modal-window__btn--confirm(@click="confirmModal") Подтвердить
</template>

<script>
export default {
  name: 'GrModal',
  props: ['grModalConfig'],
  methods: {
    openModal() {
      this.$emit('input', false)
      const modal = document.getElementById(this.$attrs.id).querySelector('.gr-modal-overlay')
      modal.style.display = 'flex'
      setTimeout(() => { modal.style.opacity = '1' }, 10)
    },
    closeModal() {
      const modal = document.getElementById(this.$attrs.id).querySelector('.gr-modal-overlay')
      modal.style.opacity = '0'
      setTimeout(() => { modal.style.display = 'none' }, 200)
    },
    confirmModal() {
      this.$emit('input', true)
      this.closeModal()
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-modal
    &__btn
      width 150px
      padding 10px
      background-color $cBgDark
      font-family $font
      font-weight bold
      color $cFontLight
      text-transform uppercase
      transition 0.2s
      &:hover
        width 170px
        color $cActive
    &-overlay
      position: fixed
      top: 0
      left: 0
      display: none
      justify-content: center
      align-items: center
      width: 100vw
      height: 100vh
      background-color: rgba(#000, .75)
      opacity 0
      z-index: 50
      transition 0.2s
    &-window
      position relative
      max-width: 80%
      max-height: 90%
      padding 30px 60px
      background-color: $cBgLight
      &__close
        position absolute
        top -40px
        right -30px
        font-size 36px
        color $cFontLight
        transition 0.2s
        &:hover
          transform rotate(90deg)
      &__title
        font-size 24px
        font-weight bold
        text-transform uppercase
        margin-bottom 30px
      &__text
        font-size: 18px
        line-height: 1.5
      &__confirmation
        display flex
        justify-content center
        align-items center
        margin-top 30px
      &__btn
        width 200px
        padding 10px
        background-color $cBgDark
        font-family $font
        font-weight bold
        color $cFontLight
        text-transform uppercase
        transition 0.2s
        &--close
          background-color $cWarning
        &--confirm
          background-color $cActive
        &:first-child
          margin-right 20px
        &:hover
          width 220px
</style>