export class GrPreloader {
  constructor() {
    this.overlay = document.getElementById('gr-preloader')
    this.overlay.classList.add('gr-preloader__overlay')

    const preloaderContainer = document.createElement('div')
    preloaderContainer.classList.add('gr-preloader__animation')
    const preloaderDot = document.createElement('div')
    preloaderDot.classList.add('gr-preloader__dot')
    preloaderContainer.appendChild(preloaderDot)
    preloaderContainer.appendChild(preloaderDot.cloneNode(true))
    preloaderContainer.appendChild(preloaderDot.cloneNode(true))
    this.overlay.appendChild(preloaderContainer)
  }
  showPreloader() {
    this.overlay.style.display = 'flex'
    setTimeout(() => { this.overlay.style.opacity = '1' }, 10)
  }
  hidePreloader() {
    this.overlay.style.opacity = '0'
    setTimeout(() => { this.overlay.style.display = 'none' }, 200)
  }
}