<template lang="pug">
  #app
    router-view
</template>

<style lang="stylus">
@import "assets/styles/reset"
@import "assets/styles/main"

.gr
  &-modal
    &__btn
      margin-bottom 20px
      &:last-child
        margin-bottom 0
  &-select
    margin-right 20px
    @media screen and (max-width: $wL)
      margin-right 0
      margin-bottom 20px
    &:last-child
      margin-right 0
      @media screen and (max-width: $wL)
        margin-bottom 0
</style>
