// --- Directions
// Create an 'eventing' library out of the
// Events class. The Events class should have
// method 'on', 'trigger', and 'off'

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all calbacks associated
  // with a given event name
  trigger(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(item => item());
    }
  }

  // UnRegister an event handler
  off(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}

module.exports = Events;