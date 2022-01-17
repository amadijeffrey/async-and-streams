const { createReadStream, createWriteStream } = require ('fs')
const { Duplex, PassThrough } = require('stream')


const {createServer} = require('http')
const readStream = createReadStream('./screen.mp4')
const writeStream = createWriteStream('./test.mp4')

class Throttle extends Duplex{
    constructor(ms){
        super()
        this.delay = ms
    }
    _read(){}
    _write(chunk, encoding, callback){
        this.push(chunk)
        setTimeout(callback, this.delay)
    }
    _final(){
        this.push(null)
    }
}

const report = new PassThrough()
const throttle = new Throttle(100)

// let total = 0
// report.on('data', chunk => {
    
//     total += chunk.length
//     console.log('bytes: ' + total)
// })

createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'video/mp4',
        // 'Content-Length': `${size}`
    })
    createReadStream('./screen.mp4').pipe(res)
}).listen(9090,'127.0.0.1', ()=>{
    console.log('server is running')
})

// readStream.pipe(report).pipe(throttle).pipe(writeStream)