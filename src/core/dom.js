class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  append(content) {
    if (content instanceof Dom) {
      this.$el.insertAdjacentElement('beforeend', content.$el)
    } else {
      this.$el.append(content)
    }
    return this
  }

  on(listener, callback) {
    this.$el.addEventListener(listener, callback)
  }

  off(listener, callback) {
    this.$el.removeEventListener(listener, callback)
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classNames = '') => {
  const el = document.createElement(tagName)
  if (classNames) el.classList.add(classNames)

  return $(el)
}
