const fs = require('fs')

//blocking
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `We read the text and it was \n${textIn} \nthats all`

// fs.writeFileSync('./txt/output.txt', textOut)

// console.log('file written succesfully')

//non - blocking

fs.readFile('./txt/input.txt', 'utf-8', (err, data1) => {
  fs.writeFile(`./txt/${data1}.txt`, 'SOme new text', res => {
    console.log('written', res)
  })
  //   console.log('read complete\n', data)
})
console.log('continue')
