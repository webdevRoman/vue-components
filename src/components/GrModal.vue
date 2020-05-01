<template lang="pug">
.gr-modal
  button.gr-modal__btn(@click="openModal") {{ grModalConfig.buttonTitle }}
  .gr-modal-overlay
    .gr-modal-window
      button.gr-modal-window__close(@click="closeModal") &times;
      .gr-modal-window__title(v-if="grModalConfig.title") {{ grModalConfig.title }}
      .gr-modal-window__text(v-if="grModalConfig.text") {{ grModalConfig.text }}
      input.gr-modal-window__input(type="text", placeholder="Введите текст", v-if="grModalConfig.inputEnabled", v-model="modalInput")
      .gr-modal-window__confirmation(v-if="grModalConfig.confirmEnabled || grModalConfig.inputEnabled")
        button.gr-modal-window__btn.gr-modal-window__btn--close(@click="closeModal") Отмена
        button.gr-modal-window__btn.gr-modal-window__btn--confirm(@click="confirmModal") Подтвердить
</template>

<script>
export default {
  name: 'GrModal',
  props: ['grModalConfig'],
  data() {
    return {
      modalInput: ''
    }
  },
  methods: {
    openModal() {
      if (this.grModalConfig.inputEnabled)
        this.$emit('input', '')
      else
        this.$emit('input', false)
      const modal = document.getElementById(this.$attrs.id).querySelector('.gr-modal-overlay')
      modal.style.display = 'flex'
      setTimeout(() => { modal.style.opacity = '1' }, 10)
    },
    closeModal() {
      if (this.grModalConfig.inputEnabled)
        this.modalInput = ''
      const modal = document.getElementById(this.$attrs.id).querySelector('.gr-modal-overlay')
      modal.style.opacity = '0'
      setTimeout(() => { modal.style.display = 'none' }, 200)
    },
    confirmModal() {
      if (this.grModalConfig.inputEnabled)
        this.$emit('input', this.modalInput)
      else
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
      width 200px
      padding 10px
      background-color $cBgDark
      font-family $font
      font-weight bold
      color $cFontLight
      text-transform uppercase
      transition 0.2s
      &:hover
        width 220px
        color $cActive
        @media screen and (max-width: $wL)
          width 200px
          color $cFontLight
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
      padding 30px 60px
      background-color: $cBgLight
      @media screen and (max-width: $wL)
        max-width: 90%
        padding 25px 50px
      @media screen and (max-width: $wS)
        max-width: 95%
        padding 10px 15px
      &__close
        position absolute
        top -40px
        right -30px
        font-size 36px
        color $cFontLight
        transition 0.2s
        @media screen and (max-width: $wL)
          top -50px
          right 0
        @media screen and (max-width: $wS)
          top -35px
          font-size 28px
        &:hover
          transform rotate(90deg)
          @media screen and (max-width: $wL)
            transform none
      &__title
        font-size 24px
        font-weight bold
        text-transform uppercase
        margin-bottom 30px
        @media screen and (max-width: $wL)
          margin-bottom 15px
        @media screen and (max-width: $wS)
          font-size 18px
          margin-bottom 10px
      &__text
        font-size: 18px
        line-height: 1.5
        @media screen and (max-width: $wL)
          font-size 16px
        @media screen and (max-width: $wS)
          font-size 14px
      &__input
        display: block
        width: 420px
        border-bottom: 2px solid $cBgDark
        font-family: $font
        font-size: 24px
        text-align: center
        margin: 30px auto 0 auto
        transition: .2s
        @media screen and (max-width: $wS)
          width 100%
          font-size 18px
          margin-top 15px
        &:hover, &:focus
          border-bottom: 2px solid $cActive
          @media screen and (max-width: $wL)
            border-bottom: 2px solid $cBgDark
      &__confirmation
        display flex
        justify-content center
        align-items center
        margin-top 30px
        @media screen and (max-width: $wS)
          margin-top 15px
      &__btn
        width 200px
        padding 10px
        background-color $cBgDark
        font-family $font
        font-weight bold
        color $cFontLight
        text-transform uppercase
        transition 0.2s
        @media screen and (max-width: $wS)
          width 130px
          padding 5px
        &--close
          background-color $cWarning
        &--confirm
          background-color $cActive
        &:first-child
          margin-right 20px
          @media screen and (max-width: $wS)
            margin-right 10px
        &:hover
          width 220px
          @media screen and (max-width: $wL)
            width 200px
          @media screen and (max-width: $wS)
            width 130px
</style>