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
  off: function (event, fn) {
    var functionIndex = this.events[event].indexOf(fn)
    if (functionIndex > -1) this.events[event].splice(functionIndex, 1)
  },
  emit: function (event, data) {
    this.events[event].forEach(fn => {
      fn(data)
    })
  }
}