export class GrSlider {
  constructor(options) {
    this.arrowsEnabled = options.arrowsEnabled
    this.navigationEnabled = options.navigationEnabled

    this.wrapper = document.getElementById('gr-slider-wrapper')
    this.container = document.getElementById('gr-slider-container')
    this.items = document.querySelectorAll('.gr-slider-item')
    this.itemsNumber = this.items.length

    const cloneFirst = this.items[0].cloneNode(true)
    const cloneLast = this.items[this.itemsNumber - 1].cloneNode(true)
    this.container.appendChild(cloneFirst)
    this.container.insertBefore(cloneLast, this.items[0])

    this.currentItem = 0
    this.itemWidth = this.wrapper.offsetWidth
    
    this.container.style.left = -this.itemWidth + 'px'
    this.container.style.transition = '0.2s'
    this.allowSlide = true
    
    if (this.arrowsEnabled) {
      const arrowLeft = document.createElement('div')
      arrowLeft.classList.add('gr-slider-arrow')
      arrowLeft.classList.add('gr-slider-arrow_left')
      const arrowRight = document.createElement('div')
      arrowRight.classList.add('gr-slider-arrow')
      arrowRight.classList.add('gr-slider-arrow_right')
      this.wrapper.appendChild(arrowLeft)
      this.wrapper.appendChild(arrowRight)

      arrowLeft.addEventListener('click', () => this.slideLeft())
      arrowRight.addEventListener('click', () => this.slideRight())
    }
  }

  slideLeft() {
    if (this.allowSlide) {
      this.allowSlide = false
      setTimeout(() => { this.allowSlide = true }, 300)
      this.currentItem--
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.checkLeftIndex() }, 200)
    }
  }
  slideRight() {
    if (this.allowSlide) {
      this.allowSlide = false
      setTimeout(() => { this.allowSlide = true }, 300)
      this.currentItem++
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.checkRightIndex() }, 200)
      
    }
  }
  checkLeftIndex() {
    if (this.currentItem === -1) {
      this.container.style.transition = 'none'
      this.currentItem = this.itemsNumber - 1
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.container.style.transition = '0.2s' }, 80)
    }
  }
  checkRightIndex() {
    if (this.currentItem === this.itemsNumber) {
      this.container.style.transition = 'none'
      this.currentItem = 0
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.container.style.transition = '0.2s' }, 80)
    }
  }
}


// const container = document.getElementById('gr-slider-container'),
//   items = document.querySelectorAll('.gr-slider-item'),
//   prev = document.getElementById('prev'),
//   next = document.getElementById('next')

// // function slide(container, items, prev, next) {
// function slide(container, items) {
//   let posX1 = 0,
//     posX2 = 0,
//     posInitial,
//     posFinal,
//     threshold = 100,
//     itemsNumber = items.length,
//     itemWidth = items[0].offsetWidth,
//     firstItem = items[0],
//     lastItem = items[itemsNumber - 1],
//     firstClone = firstItem.cloneNode(true),
//     lastClone = lastItem.cloneNode(true),
//     index = 0,
//     allowShift = true

//   // Clone first and last slide
//   container.appendChild(firstClone)
//   container.insertBefore(lastClone, firstItem)

//   // Mouse events
//   container.addEventListener('mousedown', dragStart)

//   // Touch events
//   container.addEventListener('touchstart', dragStart)
//   container.addEventListener('touchend', dragEnd)
//   container.addEventListener('touchmove', dragAction)

//   // Click events
//   // prev.addEventListener('click', () => shiftSlide(-1))
//   // next.addEventListener('click', () => shiftSlide(1))

//   // Transition events
//   container.addEventListener('transitionend', checkIndex)

//   function dragStart(e) {
//     e = e || window.event
//     e.preventDefault()
//     posInitial = container.offsetLeft
//     if (e.type === 'touchstart')
//       posX1 = e.touches[0].clientX
//     else {
//       posX1 = e.clientX
//       document.onmouseup = dragEnd
//       document.onmousemove = dragAction
//     }
//   }

//   function dragAction(e) {
//     e = e || window.event
//     if (e.type === 'touchmove') {
//       posX2 = posX1 - e.touches[0].clientX
//       posX1 = e.touches[0].clientX
//     } else {
//       posX2 = posX1 - e.clientX
//       posX1 = e.clientX
//     }
//     container.style.left = (container.offsetLeft - posX2) + "px"
//   }

//   function dragEnd() {
//     posFinal = container.offsetLeft
//     if (posFinal - posInitial < -threshold)
//       shiftSlide(1, 'drag')
//     else if (posFinal - posInitial > threshold)
//       shiftSlide(-1, 'drag')
//     else
//       container.style.left = (posInitial) + "px"
//     document.onmouseup = null
//     document.onmousemove = null
//   }

//   function shiftSlide(dir, action) {
//     container.classList.add('shifting')
//     if (allowShift) {
//       if (!action)
//         posInitial = container.offsetLeft
//       if (dir == 1) {
//         container.style.left = (posInitial - itemWidth) + "px"
//         index++
//       } else if (dir == -1) {
//         container.style.left = (posInitial + itemWidth) + "px"
//         index--
//       }
//     }
//     allowShift = false
//   }

//   function checkIndex() {
//     container.classList.remove('shifting')
//     if (index === -1) {
//       container.style.left = -(itemsNumber * itemWidth) + "px"
//       index = itemsNumber - 1
//     }
//     if (index === itemsNumber) {
//       container.style.left = -(1 * itemWidth) + "px"
//       index = 0
//     }
//     allowShift = true
//   }
// }

// // slide(container, items, prev, next)
// slide(container, items)