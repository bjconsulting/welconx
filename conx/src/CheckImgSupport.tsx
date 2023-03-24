import NextImgSrc from './NextImgSrc'

export default function CheckImgSupport(selector:string, webpImg: string, avifImg: string, fallbackImg: string): void {
  function supportsWebp() {
    return new Promise((resolve) => {
      const webpTestImage = new Image()
      webpTestImage.onload = () => resolve(webpTestImage.height === 1)
      webpTestImage.onerror = () => resolve(false)
      webpTestImage.src = NextImgSrc('test-image.webp')
    })
  
  }
  
  function supportsAvif() {
    return new Promise((resolve) => {
      const avifTestImage = new Image()
      avifTestImage.onload = () => resolve(avifTestImage.height === 1)
      avifTestImage.onerror = () => resolve(false)
      avifTestImage.src = NextImgSrc('test-image.avif')
    })
  
  }
  
  async function setBackgroundImage() {
    const element = document.querySelector(selector)! as HTMLElement
  
    if (await supportsAvif()) {
      element.style.backgroundImage = `url(${NextImgSrc(avifImg)})`
    } else if (await supportsWebp()) {
      element.style.backgroundImage = `url(${NextImgSrc(webpImg)})`
    } else {
      element.style.backgroundImage = `url(${NextImgSrc(fallbackImg)})`
    }
  }
  
  setBackgroundImage()
}