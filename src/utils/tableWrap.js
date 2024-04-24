function wrapTable() {
  if (window.innerWidth < 767.98) {
    let contentTable = document.querySelectorAll('.content table')
    if (contentTable.length) {
      contentTable.forEach(function (item) {
        let tableWrap = document.createElement('div')
        tableWrap.setAttribute('class', 'table-wrap')
        item.parentNode.insertBefore(tableWrap, item)
        tableWrap.appendChild(item)
      })
    }
  }
}
export default wrapTable
