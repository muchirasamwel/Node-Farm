const EventEmitter = require('events')

class SaleBid extends EventEmitter {
  constructor () {
    super()
  }
}
const myEmitter = new SaleBid()

myEmitter.on('bidAdded', e => {
  console.log('event occurred', e)
})

myEmitter.emit('bidAdded', { name: 'sam', bidValue: 'ksh.400' })
