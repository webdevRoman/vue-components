<template lang="pug">
.gr-select
  .gr-select__container
    .gr-select__input(@click="toggleSelect") {{ selectedStr }}
    .gr-select__items
      button.gr-select__item(v-for="item in items", :class="{'gr-select__item_active': item.selected}", @click="selectItem(item)")
        .gr-select__text {{ item.value }}
        .gr-select__buttons(v-if="grSelectConfig.itemsMultiple")
          button.gr-select__btn(@click="decrementItem(item)", :disabled="item.quantity <= 0") -
          .gr-select__quantity {{ item.quantity }}
          button.gr-select__btn(@click="incrementItem(item)", :disabled="item.quantity >= maxQuantity") +
</template>

<script>
export default {
  name: 'GrSelect',
  props: ['grSelectConfig'],
  data() {
    return {
      keysEnabled: false,
      items: [],
      selectedStr: 'Выберите элемент',
      selectedArr: []
    }
  },
  methods: {
    toggleSelect() {
      const itemsBlock = document.getElementById(this.$attrs.id).querySelector('.gr-select__items')
      const input = document.getElementById(this.$attrs.id).querySelector('.gr-select__input')
      itemsBlock.classList.toggle('gr-select__items_active')
      input.classList.toggle('gr-select__input_active')
    },
    selectItem(item) {
      if (!this.grSelectConfig.itemsMultiple) {
        if (!this.grSelectConfig.isMultiple) {
          this.items.forEach(arrItem => { arrItem.selected = false })
          item.selected = true
          this.selectedStr = item.value
          if (this.keysEnabled)
            this.$emit('input', item.key)
          else
            this.$emit('input', item.value)
        } else {
          const ind = this.selectedArr.findIndex(arrItem => arrItem.value === item.value)
          if (ind === -1) {
            item.selected = true
            this.selectedArr.push(item)
          } else {
            item.selected = false
            this.selectedArr.splice(ind, 1)
          }
          const valuesArr = this.selectedArr.map(arrItem => arrItem.value)
          if (valuesArr.length === 0)
            this.selectedStr = 'Выберите элемент'
          else
            this.selectedStr = valuesArr.join(', ')
          if (this.keysEnabled)
            this.$emit('input', this.selectedArr.map(arrItem => arrItem.key))
          else
            this.$emit('input', valuesArr)
        }
      }
    },
    decrementItem(item) {
      if (!this.grSelectConfig.isMultiple) {
        item.quantity--
        if (item.quantity === 0) {
          item.selected = false
          this.selectedStr = 'Выберите элемент'
          this.$emit('input', {})
        } else {
          this.selectedStr = item.value + ' (' + item.quantity + ')'
          if (this.keysEnabled)
            this.$emit('input', { key: item.key, quantity: item.quantity })
          else
            this.$emit('input', { value: item.value, quantity: item.quantity })
        }
      } else {
        const ind = this.selectedArr.findIndex(arrItem => arrItem.value === item.value)
        item.quantity--
        if (item.quantity === 0) {
          item.selected = false
          this.selectedArr.splice(ind, 1)
        }
        const valuesArr = this.selectedArr.map(arrItem => arrItem.value + ' (' + arrItem.quantity + ')')
        if (valuesArr.length === 0)
          this.selectedStr = 'Выберите элемент'
        else
          this.selectedStr = valuesArr.join(', ')
        if (this.keysEnabled)
          this.$emit('input', this.selectedArr.map(arrItem => { return { key: arrItem.key, quantity: arrItem.quantity } }))
        else
          this.$emit('input', this.selectedArr.map(arrItem => { return { value: arrItem.value, quantity: arrItem.quantity } }))
      }
    },
    incrementItem(item) {
      if (!this.grSelectConfig.isMultiple) {
        this.items.forEach(arrItem => {
          if (arrItem.value !== item.value) {
            arrItem.selected = false
            arrItem.quantity = 0
          }
        })
        item.selected = true
        item.quantity++
        this.selectedStr = item.value + ' (' + item.quantity + ')'
        if (this.keysEnabled)
          this.$emit('input', { key: item.key, quantity: item.quantity })
        else
          this.$emit('input', { value: item.value, quantity: item.quantity })
      } else {
        const ind = this.selectedArr.findIndex(arrItem => arrItem.value === item.value)
        item.selected = true
        item.quantity++
        if (ind === -1)
          this.selectedArr.push(item)
        const valuesArr = this.selectedArr.map(arrItem => arrItem.value + ' (' + arrItem.quantity + ')')
        if (valuesArr.length === 0)
          this.selectedStr = 'Выберите элемент'
        else
          this.selectedStr = valuesArr.join(', ')
        if (this.keysEnabled)
          this.$emit('input', this.selectedArr.map(arrItem => { return { key: arrItem.key, quantity: arrItem.quantity } }))
        else
          this.$emit('input', this.selectedArr.map(arrItem => { return { value: arrItem.value, quantity: arrItem.quantity } }))
      }
    }
  },
  computed: {
    maxQuantity() {
      let maxQuantity = 99
      if (this.grSelectConfig.maxItemQuantity)
        maxQuantity = this.grSelectConfig.maxItemQuantity
      return maxQuantity
    }
  },
  created() {
    if (this.grSelectConfig.keys && this.grSelectConfig.keys.length === this.grSelectConfig.values.length)
      this.keysEnabled = true
    if (this.keysEnabled)
      for (let i = 0; i < this.grSelectConfig.values.length; i++)
        this.items.push({
          value: this.grSelectConfig.values[i],
          key: this.grSelectConfig.keys[i],
          selected: false
        })
    else
      this.grSelectConfig.values.forEach(value => {
        this.items.push({
          value: value,
          selected: false
        })
      })
    if (this.grSelectConfig.itemsMultiple)
      this.items.forEach(item => item.quantity = 0)
  },
  mounted() {
    if (this.grSelectConfig.itemsMultiple) {
      const itemsElements = document.getElementById(this.$attrs.id).querySelectorAll('.gr-select__item')
      itemsElements.forEach(el => { el.style.cursor = 'default' })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-select
    &__container
      position relative
      width 300px
      @media screen and (max-width: $wS)
        width 200px
    &__input
      position relative
      display: block
      width: 100%
      padding 5px 30px 5px 10px
      background-color $cBgLight
      border: 2px solid $cBgDark
      font-family: $font
      font-size: 22px
      transition: .2s
      cursor pointer
      transition 0.2s
      @media screen and (max-width: $wS)
        padding 2px 20px 2px 5px
        font-size 16px
      &:after
        position absolute
        top 50%
        right 10px
        transform translateY(-60%) rotateZ(45deg)
        content ''
        display block
        width 10px
        height 10px
        border-bottom 2px solid $cBgDark
        border-right 2px solid $cBgDark
        transition 0.2s
        @media screen and (max-width: $wS)
          right 5px
          width 7px
          height 7px
      &:hover
        &:after
          border-bottom 2px solid $cActive
          border-right 2px solid $cActive
        @media screen and (max-width: $wL)
          &:after
            border-bottom 2px solid $cBgDark
            border-right 2px solid $cBgDark
      &_active
        &:after
          transform translateY(-30%) rotateZ(225deg)
    &__items
      position absolute
      top 100%
      left 0
      display flex
      flex-direction column
      width 100%
      max-height: 200px
      background-color $cBgLight
      border-left: 2px solid $cBgDark
      border-bottom: 2px solid $cBgDark
      overflow-y scroll
      transform-origin center top
      transform scaleY(0)
      transition 0.2s
      z-index 10
      &::-webkit-scrollbar
        width: 3px
      &::-webkit-scrollbar-button
        height: 0
      &::-webkit-scrollbar-track
        background-color: $cBgDark
      &::-webkit-scrollbar-track-piece
        background-color: $cBgDark
      &::-webkit-scrollbar-thumb
        height: 50px
        background-color: $cActive
      &::-webkit-scrollbar-corner
        background-color: $cBgDark
      &::-webkit-resizer
        background-color: $cBgDark
      &_active
        transform scaleY(1)
    &__item
      display flex
      justify-content space-between
      align-items center
      padding 5px 10px
      transition 0.2s
      &:hover
        background-color rgba($cBgMiddle, 0.2)
        @media screen and (max-width: $wL)
          background-color transparent
      &_active
        background-color rgba($cActive, 0.5)
        &:hover
          background-color rgba($cActive, 0.5)
    &__text
      font-family $font
      text-align left
    &__buttons
      display flex
      align-items center
    &__btn
      width 25px
      height 25px
      border-radius 50%
      border 2px solid $cBgDark
      font-family $font
      transition 0.2s
      &:hover
        background-color rgba($cBgMiddle, 0.2)
        @media screen and (max-width: $wL)
          background-color transparent
      &[disabled]
        opacity 0.5
        &:hover
          background-color transparent
          cursor default
    &__quantity
      font-family $font
      margin 0 10px
      @media screen and (max-width: $wS)
        margin 0 5px
</style>