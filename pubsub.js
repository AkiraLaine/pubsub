/*
  Pubsub.js - A super simple implementation to handle events
  by Akira Laine
*/

const events = {
  events: {},
  on (event, fn) {
    this.events[event] = this.events[event] || []
    this.events[event].push(fn)
  },
  off (event, fn) {
    const functionIndex = this.events[event].indexOf(fn)
    if (functionIndex > -1) this.events[event].splice(functionIndex, 1)
    if (!this.events[event].length) delete this.events[event]
  },
  emit (event, data) {
    if (this.events[event]) {
      this.events[event].forEach(fn => {
        fn(data)
      })
    }
  }
}