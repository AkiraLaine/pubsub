/*
  Pubsub.js - A super simple implementation to handle events
  by Akira Laine
*/

var events = {
  events: {},
  on: function (event, fn) {
    this.events[event] = this.events[event] || []
    this.events[event].push(fn)
  },
  emit: function (event, data) {
    this.events[event].forEach(fn => {
      fn(data)
    })
  }
}