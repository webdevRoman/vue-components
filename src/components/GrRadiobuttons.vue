<template lang="pug">
.gr-radiobuttons
  button.gr-radiobutton(v-for="item in items", @click="toggleItem(item)")
    .gr-radiobutton__box
      .gr-radiobutton__tick(v-if="item.isChecked")
    .gr-radiobutton__value {{ item.value }}
</template>

<script>
export default {
  name: 'GrRadiobuttons',
  props: ['grRadiobuttonsConfig'],
  data() {
    return {
      keysEnabled: false,
      items: [],
      chosenItem: ''
    }
  },
  methods: {
    toggleItem(item) {
      this.items.forEach(item => { item.isChecked = false })
      item.isChecked = true
      if (this.keysEnabled)
        this.chosenItem = item.key
      else
        this.chosenItem = item.value
      this.$emit('input', this.chosenItem)
    }
  },
  created() {
    if (this.grRadiobuttonsConfig.keys && this.grRadiobuttonsConfig.keys.length === this.grRadiobuttonsConfig.values.length)
      this.keysEnabled = true
    if (this.keysEnabled)
      for (let i = 0; i < this.grRadiobuttonsConfig.values.length; i++)
        this.items.push({
          value: this.grRadiobuttonsConfig.values[i],
          key: this.grRadiobuttonsConfig.keys[i],
          isChecked: false
        })
    else
      this.grRadiobuttonsConfig.values.forEach(value => {
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
  &-radiobuttons
    min-width 400px
    padding 20px 40px
    box-shadow: 0 0 20px rgba(0, 0, 0, .3)
    @media screen and (max-width: $wM)
      min-width: 300px
      padding: 10px 20px
  &-radiobutton
    display flex
    align-items center
    margin-bottom 20px
    @media screen and (max-width: $wM)
      margin-bottom: 10px
    &:last-child
      margin-bottom 0
    &:hover
      .gr-radiobutton__box
        background-color rgba($cBgMiddle, 0.2)
      @media screen and (max-width: $wL)
        .gr-radiobutton__box
          background-color transparent
    &__box
      position relative
      width 30px
      height 30px
      border-radius 50%
      border 2px solid $cBgDark
      margin-right 20px
      transition 0.2s
      @media screen and (max-width: $wM)
        width: 25px
        height: 25px
        margin-right 15px
    &__tick
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 15px
      height 15px
      border-radius 50%
      background-color $cActive
      @media screen and (max-width: $wM)
        width: 12px
        height: 12px
    &__value
      font-family $font
      font-size 20px
      @media screen and (max-width: $wM)
        font-size 18px
</style>