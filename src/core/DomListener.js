export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  // listenerCallback = '' лучше не использовать, лишнее свойство будет везде
  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const errorName = `
          Method ${method} is not declared in the ${this.name} component
        `
        return console.error( new Error(errorName) )
      }
      this[method] = this[method].bind(this)
      // this.listenerCallback = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(method) {
  return 'on' + method.charAt(0).toUpperCase() + method.slice(1)
}
