require = require("esm")(module/*, options*/)
const makeParser = require('./o.js').default;

const Parser = makeParser({
  onMatch: (...args) => {
      console.log('match!')
      return 0
  }
})

const parser = new Parser()
parser.execute(Buffer.from('hello hello'))