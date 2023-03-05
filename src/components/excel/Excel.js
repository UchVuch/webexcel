import { ExelComponent } from '@core/ExelComponent';
import { $ } from '../../core/dom';

export class Excel extends ExelComponent {
  constructor(selector, options) {
    super()
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.insertAdjacentHTML('beforeend', component.toHTML())
      $root.insertAdjacentElement('beforeend', $el)
    })

    return $root
  }

  render() {
    this.$el.insertAdjacentElement('beforeend', this.getRoot())
  }
}

