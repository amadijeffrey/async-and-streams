const fs = require('fs')
const http = require('http') 
const server = http.createServer()
// setTimeout(() =>{
//     console.log('timer 1 has finished')
// },3000)

// fs.readFile('text.txt', ()=>{
//     setTimeout(() => {
//         console.log('timer 2 finished')
//     },0)
    
// })

// console.log('hello from the top level code')

const C = require('./module-test')
const calc = require('./module-test2')

const calc1 = new C()
console.log(calc1.add(2,5))
console.log(calc.divide(10,2))

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err,data) => {
            if(err) return reject('could not find that file')
            resolve(data)
        })
    })
}

const writeFilePro = (file, data)=> {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if(err) return reject('could not write file')
            resolve('file has been written')
        })
    })
}

readFilePro('text.txt')
.then(() => {
   return http.request( `https://dog.ceo/api/breed/${data}/image/random`) 
})
.then((res) => {
  const  data = JSON.parse(res)
  
})




// const readable = fs.createReadStream('index.txt')
// readable.on('data', (chunks) =>{
//     res.write(chunks)
// })
// readable.on('end', ()=>{
//     res.send('dONE')
// })  

server.on('request', (req,res)=> {
res.end('page received')
})
server.listen(2000,'127.0.0.1' ,()=>{
    console.log('server is running')
})
