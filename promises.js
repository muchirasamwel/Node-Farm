const fs = require('fs')

const readAFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject('File not found')
      resolve(data)
    })
  })
}

const readFiles = async () => {
  try {
    const readFile1 = await readAFile(__dirname + '/txt/input.txt')
    const readFile2 = readAFile(__dirname + '/txt/output.txt')
    const readFile3 = readAFile(__dirname + '/txt/some text.txt')
    const threeFiles = await Promise.all([readFile1, readFile2, readFile3])
    console.log(threeFiles)
  } catch (err) {
    console.log(err)
    throw err
  }
}
readFiles()
  .then(() => {
    console.log('Read Complete')
  })
  .catch(err => {
    console.log('Error Catch')
  })
