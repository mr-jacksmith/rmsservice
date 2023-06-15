const smoothScroll = (target) => {
    const start = window.scrollY
    const end = target.offsetTop
    const distance = end - start
    const duration = 1000 // время анимации в мс
    let startTime = null
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = ease(timeElapsed, start, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }
    const ease = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }
    requestAnimationFrame(animation)
  }

  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const href = link.getAttribute('href')
      const target = document.querySelector(href)
      smoothScroll(target)
    })
  })