export class GrAccordion {
  constructor(options) {
    const accordionContainer = document.getElementById('gr-accordion')
    this.navItems = accordionContainer.querySelectorAll('.gr-accordion-item__title')
    this.contentItems = accordionContainer.querySelectorAll('.gr-accordion-item__content')

    if (options.isMultiple !== undefined)
      this.isMultiple = options.isMultiple
    else
      this.isMultiple = true
    if (options.defaultOpened)
      this.contentItems.forEach(item => item.classList.add('gr-accordion-item__content_active'))
    if (options.defaultOpenedItems && options.defaultOpenedItems.length > 0)
      options.defaultOpenedItems.forEach(ind => this.contentItems[ind].classList.add('gr-accordion-item__content_active'))
    
    for (let i = 0; i < this.navItems.length; i++)
      this.navItems[i].addEventListener('click', () => this.setActive(i))
  }
  setActive(ind) {
    if (this.contentItems[ind].classList.contains('gr-accordion-item__content_active'))
      this.contentItems[ind].classList.remove('gr-accordion-item__content_active')
    else {
      if (this.isMultiple) {
        this.contentItems[ind].classList.add('gr-accordion-item__content_active')
      } else {
        this.contentItems.forEach(item => item.classList.remove('gr-accordion-item__content_active'))
        // this.contentItems[ind].classList.add('gr-accordion-item__content_active')
        setTimeout(() => { this.contentItems[ind].classList.add('gr-accordion-item__content_active') }, 200)
      }
    }
  }
}