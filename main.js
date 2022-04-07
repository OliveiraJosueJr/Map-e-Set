//*** Exercício Maps ***//

// function getAdmins(map) {
//   let admins = []
//   for ([key, value] of map) {
//     if (value === 'Admin') {
//       admins.push(key)
//     }
//   }

//   return admins
// }

// const usuarios = new Map()

// usuarios.set('Luiz', 'Admin')
// usuarios.set('João', 'Admin')
// usuarios.set('Ana', 'User')
// usuarios.set('Julia', 'Admin')

// console.log(getAdmins(usuarios))

//*** Exercício Sets ***//

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5, 10, 10]

//*** O código abaixo cria um set, porém não é um novo array ***//

// function valoresUnicos(arr) {
//   const mySet = new Set(arr)

//   return mySet
// }

// console.log(valoresUnicos(meuArray))

//*** O código abaixo cria um set e o transforma em um novo array ***//

function valoresUnicos(arr) {
  const mySet = new Set(arr)

  return [...mySet]
}

console.log(valoresUnicos(meuArray))
