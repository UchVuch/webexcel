import './module'
import './scss/main.scss'


async function newfunc() {
  return await new Promise((resolve, reject) => {
    resolve('working!@')
  })
}

newfunc().then(console.log)

console.log('start app')
