const {Transform} = require('stream')

class replaceText extends Transform {
    constructor(char){
        super()
        this.replaceChar = char
    }
    _transform(chunk,encoding,callback){
        const tranformedStream = chunk.toString().replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar)
        this.push(tranformedStream)
    }
    
}

const replace = new replaceText('x')

process.stdin.pipe(replace).pipe(process.stdout)