// const names = require('./4-names')
// const sayHi = require('./5-util')
// //require('./mind-grenade')


// sayHi(names.peter)
// sayHi('random person')
 

const os = require('os')
const user = os.userInfo()
console.log(`the system has been up for ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)