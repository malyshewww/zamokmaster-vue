//Блок со скрытым текстом

function textHide(textHidden, heightContent, heightOld) {
  textHidden.classList.toggle('open')
  if (textHidden.classList.contains('open')) {
    itemContent.style.maxHeight = heightContent
  } else {
    itemContent.style.maxHeight = heightOld
  }
}

function textHidden() {
  const textHiddenBlocks = document.querySelectorAll('.text-hidden')
  if (textHiddenBlocks.length > 0) {
    textHiddenBlocks.forEach((textHidden) => {
      //фиксированная макс высота
      const itemContent = textHidden.querySelector('.text-hidden-content')
      let heightOld = itemContent.clientHeight + 'px'
      //высота дочернего блока с текстом
      let heightContent = itemContent.querySelector('.content').clientHeight + 'px'
      //если высота текста меньше или равна заданной фиксированной, то скрываем кнопку показать еще
      if (
        Number.parseInt(heightContent) === Number.parseInt(heightOld) ||
        Number.parseInt(heightContent) < Number.parseInt(heightOld)
      ) {
        textHidden.querySelector('.text-hidden__btn').style.display = 'none'
        textHidden.classList.add('text-hidden--not-scroll')
      } else {
        textHidden.querySelector('.text-hidden__btn').addEventListener('click', () => {
          textHide()
        })
        textHidden.querySelector('.text-hidden-content__gradient').addEventListener('click', () => {
          textHide()
        })
      }
    })
  }
}

export { textHide, textHidden }
