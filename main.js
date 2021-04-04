import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'
import { createComponent, withStyles } from 'https://cdn.skypack.dev/ficusjs'

createComponent('hello-world',
  withStyles({
    renderer,
    styles () {
      return [
        'https://cdn.jsdelivr.net/npm/@nekohack/normalize.css/dist/index.css',
        `
          hello-world button {
            background-color: yellow;
            color: black;
          }
        `
      ]
    },
    handleClick(e) {
      window.alert('Button Tap')
    },
    render() {
      return html`
        <main>
          <h1>FicusJS</h1>
          <h2>Hello World</h2>
          <button type="button" @click="${this.handleClick}">
            Click Me
          </button>
        </main>
      `
    }
  })
)
