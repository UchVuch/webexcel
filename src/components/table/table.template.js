const CODES = {
  A: 65,
  Z: 90
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function createCel() {
  return `
    <div class="cell" contenteditable=""></div>
  `
}

function createCol(col) {
  return `
    <div class="column">
      ${col}
    </div>
  `
}

function createRow(rowNumber = '', content) {
  return `
    <div class="row">
      <div class="row-info">${rowNumber ? rowNumber : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')
  const cels = new Array(colsCount)
      .fill('')
      .map(createCel)
      .join('')

  rows.push(createRow('', cols))
  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(i, cels))
  }

  return rows.join('')
}
