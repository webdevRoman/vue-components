export class GrTabs {
  constructor(options) {
    const tabsContainer = document.getElementById('gr-tabs')
    this.navItems = tabsContainer.querySelectorAll('.gr-tabs-nav__item')
    this.contentItems = tabsContainer.querySelectorAll('.gr-tabs-content__item')
    this.setActive(0)
    for (let i = 0; i < this.navItems.length; i++)
      this.navItems[i].addEventListener('click', () => this.setActive(i))
    if (options.layout === 'vertical')
      tabsContainer.classList.add('gr-tabs_vertical')
  }
  setActive(ind) {
    for (let i = 0; i < this.navItems.length; i++) {
      this.navItems[i].classList.remove('gr-tabs-nav__item_active')
      this.hideContent(i)
    }
    setTimeout(() => {
      this.navItems[ind].classList.add('gr-tabs-nav__item_active')
      this.showContent(ind)
    }, 200)
  }
  showContent(ind) {
    this.contentItems[ind].style.display = 'block'
    setTimeout(() => { this.contentItems[ind].classList.add('gr-tabs-content__item_active') }, 10)
  }
  hideContent(ind) {
    this.contentItems[ind].classList.remove('gr-tabs-content__item_active')
    setTimeout(() => { this.contentItems[ind].style.display = 'none' }, 200)
  }
}