// TICKER
const tickers = document.querySelectorAll('.ticker')
if (tickers.length) {
  tickers.forEach((ticker) => {
    if (ticker.dataset.orientation === 'vertical' && window.bodyWidth > 1199) {
      ticker.style.width = window.innerHeight + 'px'
    }
    const tickerContent = ticker.querySelector('.ticker-content')
    const tickerWidth = ticker.clientWidth
    const tickerContentWidth = tickerContent.scrollWidth
    const tickerWrapper = document.createElement('div')
    tickerWrapper.classList.add('ticker-wrapper')
    // console.log(`${tickerContent.textContent}  -  ${tickerContentWidth}`);
    if (tickerContentWidth <= tickerWidth) {
      let countTicker = Math.ceil(tickerWidth / tickerContentWidth)
      for (let i = 0; i < countTicker + 1; i++) {
        tickerWrapper.innerHTML += ticker.innerHTML
      }
    } else {
      tickerContent.style.width = tickerContentWidth + 'px'
      tickerWrapper.innerHTML += ticker.innerHTML
    }
    ticker.innerHTML = ''
    ticker.append(tickerWrapper)
    ticker.innerHTML += ticker.innerHTML
    ticker.querySelectorAll('.ticker-wrapper').forEach((i) => {
      i.style.animation = 'scroll 15s infinite linear'
    })
  })
}
