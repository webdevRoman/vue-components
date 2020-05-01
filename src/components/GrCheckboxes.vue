<template lang="pug">
.gr-checkboxes
  button.gr-checkbox(v-for="item in items", @click="toggleItem(item)")
    .gr-checkbox__box
      .gr-checkbox__tick(v-if="item.isChecked")
    .gr-checkbox__value {{ item.value }}
</template>

<script>
export default {
  name: 'GrCheckboxes',
  props: ['grCheckboxesConfig'],
  data() {
    return {
      keysEnabled: false,
      items: [],
      chosenItems: []
    }
  },
  methods: {
    toggleItem(item) {
      item.isChecked = !item.isChecked
      if (item.isChecked) {
        if (this.keysEnabled)
          this.chosenItems.push(item.key)
        else
          this.chosenItems.push(item.value)
      } else {
        let itemIndex
        if (this.keysEnabled)
          itemIndex = this.chosenItems.findIndex(arrItem => arrItem === item.key)
        else
          itemIndex = this.chosenItems.findIndex(arrItem => arrItem === item.value)
        this.chosenItems.splice(itemIndex, 1)
      }
      this.$emit('input', this.chosenItems)
    }
  },
  created() {
    if (this.grCheckboxesConfig.keys && this.grCheckboxesConfig.keys.length === this.grCheckboxesConfig.values.length)
      this.keysEnabled = true
    if (this.keysEnabled)
      for (let i = 0; i < this.grCheckboxesConfig.values.length; i++)
        this.items.push({
          value: this.grCheckboxesConfig.values[i],
          key: this.grCheckboxesConfig.keys[i],
          isChecked: false
        })
    else
      this.grCheckboxesConfig.values.forEach(value => {
        this.items.push({
          value: value,
          isChecked: false
        })
      })
  }
}
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars'

.gr
  &-checkboxes
    min-width: 400px
    padding: 20px 40px
    box-shadow: 0 0 20px rgba(0, 0, 0, .3)
    @media screen and (max-width: $wM)
      min-width: 300px
      padding: 10px 20px
  &-checkbox
    display: flex
    align-items: center
    margin-bottom: 20px
    @media screen and (max-width: $wM)
      margin-bottom: 10px
    &:last-child
      margin-bottom: 0
    &:hover
      .gr-checkbox__box
        background-color: rgba($cBgMiddle, .2)
      @media screen and (max-width: $wL)
        .gr-checkbox__box
          background-color: transparent
    &__box
      position: relative
      width: 30px
      height: 30px
      border: 2px solid $cBgDark
      margin-right: 20px
      transition: .2s
      @media screen and (max-width: $wM)
        width: 25px
        height: 25px
        margin-right 15px
    &__tick
      position: absolute
      top: -5%
      left: 10%
      width: 30px
      height: 15px
      border-bottom: 3px solid $cActive
      border-left: 3px solid $cActive
      transform: rotate(-45deg)
      @media screen and (max-width: $wM)
        top: 5%
        width: 25px
        height: 10px
    &__value
      font-family: $font
      font-size: 20px
      @media screen and (max-width: $wM)
        font-size: 18px
</style>