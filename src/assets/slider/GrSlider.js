export class GrSlider {
  constructor(options) {
    this.navigationEnabled = options.navigationEnabled
    this.wrapper = document.getElementById('gr-slider-wrapper')
    this.container = document.getElementById('gr-slider-container')
    this.items = document.querySelectorAll('.gr-slider-item')
    this.items.forEach(item => { item.style.minWidth = this.wrapper.offsetWidth + 'px' })
    this.itemsNumber = this.items.length
    const cloneFirst = this.items[0].cloneNode(true)
    const cloneLast = this.items[this.itemsNumber - 1].cloneNode(true)
    this.container.appendChild(cloneFirst)
    this.container.insertBefore(cloneLast, this.items[0])
    this.itemWidth = this.wrapper.offsetWidth
    this.currentItem = 0
    this.allowSlide = true

    this.posX1 = 0
    this.posX2 = 0
    this.threshold = 100
    this.bindedDragEnd = this.dragEnd.bind(this)
    this.bindedDragAction = this.dragAction.bind(this)

    this.container.style.left = -this.itemWidth + 'px'
    this.container.style.transition = '0.2s'

    this.container.addEventListener('mousedown', this.dragStart.bind(this))
    this.container.addEventListener('touchstart', this.dragStart.bind(this))
    this.container.addEventListener('touchend', this.dragEnd.bind(this))
    this.container.addEventListener('touchmove', this.dragAction.bind(this))

    if (options.arrowsEnabled) {
      const arrowLeft = document.createElement('button')
      arrowLeft.classList.add('gr-slider-arrow')
      arrowLeft.classList.add('gr-slider-arrow_left')
      const arrowRight = document.createElement('button')
      arrowRight.classList.add('gr-slider-arrow')
      arrowRight.classList.add('gr-slider-arrow_right')
      this.wrapper.appendChild(arrowLeft)
      this.wrapper.appendChild(arrowRight)
      arrowLeft.addEventListener('click', () => this.slide(this.currentItem - 1))
      arrowRight.addEventListener('click', () => this.slide(this.currentItem + 1))
    }

    if (this.navigationEnabled) {
      this.wrapper.style.height = this.wrapper.offsetHeight + 50 + 'px'
      this.container.style.height = this.wrapper.offsetHeight - 50 + 'px'
      this.navItems = []
      const navContainer = document.createElement('div')
      navContainer.classList.add('gr-slider-nav')
      for (let i = 0; i < this.itemsNumber; i++) {
        const navItem = document.createElement('button')
        navItem.classList.add('gr-slider-nav__item')
        this.navItems.push(navItem)
        navContainer.appendChild(this.navItems[i])
      }
      this.navItems[0].classList.add('gr-slider-nav__item_active')
      this.wrapper.appendChild(navContainer)
      for (let i = 0; i < this.itemsNumber; i++)
        this.navItems[i].addEventListener('click', () => this.slide(i))
    }
  }

  slide(itemNumber) {
    if (this.allowSlide) {
      this.allowSlide = false
      setTimeout(() => { this.allowSlide = true }, 300)
      this.currentItem = itemNumber
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.checkIndex() }, 200)
      if (this.navigationEnabled) {
        this.navItems.forEach(item => { item.classList.remove('gr-slider-nav__item_active') })
        if (this.currentItem === -1)
          this.navItems[this.navItems.length - 1].classList.add('gr-slider-nav__item_active')
        else if (this.currentItem === this.navItems.length)
          this.navItems[0].classList.add('gr-slider-nav__item_active')
        else
          this.navItems[this.currentItem].classList.add('gr-slider-nav__item_active')
      }
    }
  }
  checkIndex() {
    if (this.currentItem === -1) {
      this.container.style.transition = 'none'
      this.currentItem = this.itemsNumber - 1
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.container.style.transition = '0.2s' }, 80)
    }
    if (this.currentItem === this.itemsNumber) {
      this.container.style.transition = 'none'
      this.currentItem = 0
      this.container.style.left = -(this.currentItem + 1) * this.itemWidth + 'px'
      setTimeout(() => { this.container.style.transition = '0.2s' }, 80)
    }
  }

  dragStart(e) {
    this.container.style.transition = 'none'
    e = e || window.event
    e.preventDefault()
    this.posInitial = parseInt(this.container.style.left)
    if (e.type == 'touchstart') {
      this.posX1 = e.touches[0].clientX
    } else {
      this.posX1 = e.clientX
      document.addEventListener('mouseup', this.bindedDragEnd)
      document.addEventListener('mousemove', this.bindedDragAction)
    }
  }
  dragAction(e) {
    e = e || window.event
    if (e.type === 'touchmove') {
      this.posX2 = this.posX1 - e.touches[0].clientX
      this.posX1 = e.touches[0].clientX
    } else {
      this.posX2 = this.posX1 - e.clientX
      this.posX1 = e.clientX
    }
    this.container.style.left = (parseInt(this.container.style.left) - this.posX2) + 'px'
  }
  dragEnd() {
    this.container.style.transition = '0.2s'
    this.posFinal = parseInt(this.container.style.left)
    if (this.posFinal - this.posInitial < -this.threshold)
      this.slide(this.currentItem + 1)
    else if (this.posFinal - this.posInitial > this.threshold)
      this.slide(this.currentItem - 1)
    else
      this.container.style.left = (this.posInitial) + 'px'
    document.removeEventListener('mouseup', this.bindedDragEnd)
    document.removeEventListener('mousemove', this.bindedDragAction)
  }
}