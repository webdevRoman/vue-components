<template lang="pug">
.gr-slider

</template>

<script>
export default {
  name: 'GrSlider',
  props: ['grSliderConfig'],
  data() {
    return {
      sliderItems: []
    }
  },
  mounted() {
    const sliderContainer = document.getElementById(this.grSliderConfig.containerId)
    const sliderItems = sliderContainer.childNodes
    sliderItems.forEach(item => this.sliderItems.push(item))
    console.log(this.sliderItems)
    sliderContainer.parentNode.removeChild(sliderContainer)
  }
}
</script>

<style scoped lang="stylus">

</style>