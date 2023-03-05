class Dom {
  constructor() {}
}

export function $() {
  return new Dom()
}

$.create = (tagName, classNames = '') => {
  const el = document.createElement(tagName)
  if (classNames) el.classList.add(classNames)

  return el
}
